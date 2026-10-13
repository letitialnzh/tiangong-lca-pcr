import { unknownField, type ContractIssue } from "./types.ts";
const FUNCTIONAL_UNIT_FIELDS = [
  "what",
  "how_much",
  "how_well",
  "how_long_or_cycle",
  "reference_flow_link",
];

const BOUNDARY_ABSTRACTION_FIELDS = [
  "declared_starting_condition",
  "starting_condition_role",
  "product_classification_scope",
  "recursive_input_rule",
  "upstream_dataset_requirement",
  "disclosure",
];

const PUBLISHED_DATASET_PROFILE_FIELDS = [
  "dataset_role",
  "downstream_use",
  "allowed_use",
  "excluded_use",
  "required_metadata",
  "required_quality_disclosure",
  "update_trigger",
];

const REFERENCE_FLOW_FIELDS = [
  ["reference_amount"],
  ["product_flow_ref", "name"],
  ["product_flow_ref", "uuid"],
  ["flow_property_ref", "uuid"],
  ["unit_group_ref", "uuid"],
  ["reference_unit"],
];

function meaningfulScalar(value: unknown): boolean {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function valueAtPath(value: unknown, segments: readonly string[]): unknown {
  return segments.reduce<unknown>((current, segment) => unknownField(current, segment), value);
}

function missingFieldIssue(codePath: string, displayPath: string, message?: string): ContractIssue {
  return {
    code: `material_projection.${codePath}`,
    message: message ?? `Material PCR projection requires non-empty ${displayPath}.`,
  };
}

function inventoryFlowRowCount(processInventory: unknown): number {
  let count = 0;
  for (const processEntry of array(processInventory)) {
    for (const direction of ["inputs", "outputs"]) {
      for (const flowType of ["product", "waste", "elementary"]) {
        count += Array.isArray(valueAtPath(processEntry, [direction, flowType]))
          ? array(valueAtPath(processEntry, [direction, flowType])).length
          : 0;
      }
    }
  }
  return count;
}

/**
 * Checks content that must be present before a material projection can guide data production.
 * JSON Schema owns stable shape; this function owns state-sensitive methodology completeness.
 */
export function hasDeclaredUnresolvedReferenceProductFlow(projection: unknown, manifest: unknown): boolean {
  if (unknownField(manifest, 'status') !== 'candidate' || unknownField(manifest, 'content_maturity') !== 'authored_methodology') return false;
  const productName = String(valueAtPath(projection, ['reference_flow_definition', 'product_flow_ref', 'name']) ?? '').trim();
  if (!productName) return false;
  const review = unknownField(manifest, 'review_metadata') ?? {};
  const unresolved = unknownField(review, 'unresolved');
  const legacy = array(unresolved).filter(entry => /reference[_ -]?product[_ -]?flow/iu.test(String(unknownField(entry, 'code') ?? unknownField(entry, 'issue_id') ?? '')));
  const referenceIdentity = unknownField(review, 'reference_flow_identity');
  const support = unknownField(referenceIdentity, 'unresolved_support_fields');
  const supportsReference = unknownField(referenceIdentity, 'status') === 'unresolved' && optionalSupportFields(support).some(field => String(field) === 'reference_product_flow_uuid');
  const hasLegacyReferenceProductDeclaration = legacy.length > 0 || supportsReference;
  const unresolvedEntries: unknown[] = [
    ...array(unknownField(unresolved, 'inventory_flow_uuids')),
    ...array(unknownField(review, 'unresolved_flow_identities')),
    ...array(unresolved).filter(entry => /reference[_ -]?product[_ -]?flow(?:[_ -]?uuid)?/iu.test(String(unknownField(entry, 'code') ?? unknownField(entry, 'issue_id') ?? ''))).map(() => 'reference product flow'),
    ...(supportsReference ? ['reference product flow'] : []),
  ];
  if (unresolvedEntries.length === 0) return false;
  for (const processEntry of array(unknownField(projection, 'process_inventory'))) {
    for (const row of array(valueAtPath(processEntry, ['outputs', 'product']))) {
      const rowId = String(unknownField(row, 'row_id') ?? '').trim();
      if (hasLegacyReferenceProductDeclaration && /^reference_product(?:_|$)/u.test(rowId)) return true;
      if (String(unknownField(row, 'name') ?? '').trim() !== productName) continue;
      const normalizedProductName = productName.toLocaleLowerCase('en-US');
      const hasMatchingDeclaration = unresolvedEntries.some(entry => {
        if (typeof entry === 'object' && entry !== null) return String(unknownField(entry, 'row_id') ?? '').trim() === rowId;
        const declaration = String(entry ?? '').trim();
        const normalizedDeclaration = declaration.toLocaleLowerCase('en-US');
        return declaration === rowId || Boolean(rowId && declaration.includes(rowId)) || declaration.startsWith('reference_product_') || normalizedDeclaration.includes(normalizedProductName) || /\breference product(?: flow)?\b|参考产品(?:流)?/iu.test(declaration);
      });
      if (hasMatchingDeclaration) return true;
    }
  }
  return false;
}
function array(value: unknown): unknown[] { return Array.isArray(value) ? value : []; }
function optionalSupportFields(value: unknown): readonly unknown[] {
  if (value === null || value === undefined) return [];
  if (!Array.isArray(value)) throw new TypeError('unresolved_support_fields.some is not a function');
  return value;
}

export function materialProjectionCompletenessIssues(
  projection: unknown,
  { expectedPcrId, allowUnresolvedProductFlowUuid = false }: { expectedPcrId?: unknown; allowUnresolvedProductFlowUuid?: boolean } = {},
): ContractIssue[] {
  const issues: ContractIssue[] = [];
  const canonicalPcrId = valueAtPath(projection, ["product_category_identity", "canonical_pcr_id"]);
  if (!meaningfulScalar(canonicalPcrId)) {
    issues.push(
      missingFieldIssue(
        "product_category_identity.canonical_pcr_id",
        "product_category_identity.canonical_pcr_id",
        "Product Category Identity requires canonical_pcr_id.",
      ),
    );
  } else if (meaningfulScalar(expectedPcrId) && canonicalPcrId !== expectedPcrId) {
    issues.push({
      code: "material_projection.product_category_identity.id_mismatch",
      message: `canonical_pcr_id "${canonicalPcrId}" does not match manifest id "${expectedPcrId}".`,
    });
  }

  for (const field of FUNCTIONAL_UNIT_FIELDS) {
    if (!meaningfulScalar(valueAtPath(projection, ["functional_unit", field]))) {
      issues.push(
        missingFieldIssue(
          `functional_unit.${field}`,
          `functional_unit.${field}`,
          `Functional Unit is missing ${field}.`,
        ),
      );
    }
  }

  for (const segments of REFERENCE_FLOW_FIELDS) {
    if (
      allowUnresolvedProductFlowUuid &&
      segments.length === 2 &&
      segments[0] === "product_flow_ref" &&
      segments[1] === "uuid"
    ) {
      continue;
    }
    if (!meaningfulScalar(valueAtPath(unknownField(projection, "reference_flow_definition"), segments))) {
      const field = segments.join(".");
      issues.push(
        missingFieldIssue(
          `reference_flow_definition.${field}`,
          `reference_flow_definition.${field}`,
          `Reference Flow Definition is missing ${field}.`,
        ),
      );
    }
  }

  if (!Array.isArray(unknownField(projection, "measurement_rules")) || array(unknownField(projection, "measurement_rules")).length === 0) {
    issues.push(
      missingFieldIssue(
        "measurement_rules",
        "measurement_rules",
        "material PCR requires at least one Measurement and Unit rule.",
      ),
    );
  }

  for (const [label, rules, code] of [
    ["System Boundary", valueAtPath(projection, ["system_boundary", "rules"]), "system_boundary.rules"],
    ["Allocation", unknownField(projection, "allocation_rules"), "allocation_rules"],
    ["Validation", unknownField(projection, "validation_rules"), "validation_rules"],
  ] as const) {
    if (!Array.isArray(rules) || rules.length === 0) {
      issues.push(
        missingFieldIssue(
          code,
          code,
          `material PCR requires at least one ${label} rule.`,
        ),
      );
    }
  }

  for (const field of BOUNDARY_ABSTRACTION_FIELDS) {
    if (!meaningfulScalar(valueAtPath(projection, ["boundary_abstraction", field]))) {
      issues.push(
        missingFieldIssue(
          `boundary_abstraction.${field}`,
          `boundary_abstraction.${field}`,
          `Boundary Abstraction is missing ${field}.`,
        ),
      );
    }
  }

  if (!Array.isArray(unknownField(projection, "process_map")) || array(unknownField(projection, "process_map")).length === 0) {
    issues.push(
      missingFieldIssue(
        "process_map",
        "process_map",
        "material PCR is missing a Process Map.",
      ),
    );
  }
  if (inventoryFlowRowCount(unknownField(projection, "process_inventory")) === 0) {
    issues.push(
      missingFieldIssue(
        "process_inventory.flow_rows",
        "process_inventory",
        "material PCR has no process inventory flow rows.",
      ),
    );
  }

  for (const field of PUBLISHED_DATASET_PROFILE_FIELDS) {
    if (!meaningfulScalar(valueAtPath(projection, ["published_dataset_profile", field]))) {
      issues.push(
        missingFieldIssue(
          `published_dataset_profile.${field}`,
          `published_dataset_profile.${field}`,
          `Published Dataset Profile is missing ${field}.`,
        ),
      );
    }
  }

  return issues;
}
