import { PCR_EN_FILE } from "./scaffold-templates.mjs";
import { buildProjectionMetadata } from "../../packages/pcr-core/src/projection-integrity.mjs";

function yamlScalar(value) {
  if (value === null || value === undefined || value === "") {
    return "\"\"";
  }
  return JSON.stringify(String(value));
}

function yamlPlainOrQuoted(value) {
  const normalized = String(value ?? "");
  if (/^[A-Za-z0-9_.-]+$/u.test(normalized)) {
    return normalized;
  }
  return yamlScalar(normalized);
}

function yamlKeyValue(lines, indent, key, value) {
  lines.push(`${" ".repeat(indent)}${key}: ${yamlScalar(value)}`);
}

function yamlStringArray(lines, indent, key, values) {
  if (!values || values.length === 0) {
    lines.push(`${" ".repeat(indent)}${key}: []`);
    return;
  }
  lines.push(`${" ".repeat(indent)}${key}:`);
  for (const value of values) {
    lines.push(`${" ".repeat(indent + 2)}- ${yamlPlainOrQuoted(value)}`);
  }
}

function yamlRangeArray(lines, indent, ranges) {
  if (!ranges || ranges.length === 0) {
    lines.push(`${" ".repeat(indent)}ranges: []`);
    return;
  }
  lines.push(`${" ".repeat(indent)}ranges:`);
  for (const range of ranges) {
    lines.push(`${" ".repeat(indent + 2)}- role: ${yamlPlainOrQuoted(range.role)}`);
    yamlKeyValue(lines, indent + 4, "lower", range.lower);
    yamlKeyValue(lines, indent + 4, "upper", range.upper);
    yamlKeyValue(lines, indent + 4, "unit", range.unit);
    yamlKeyValue(lines, indent + 4, "basis", range.basis);
    yamlKeyValue(lines, indent + 4, "basis_kind", range.basis_kind);
    yamlKeyValue(lines, indent + 4, "evidence_kind", range.evidence_kind);
    yamlStringArray(lines, indent + 4, "source_ids", range.source_ids);
  }
}

function yamlFlatObject(lines, indent, object) {
  const entries = Object.entries(object ?? {}).filter(([, value]) => value !== "");
  if (entries.length === 0) {
    lines.push(`${" ".repeat(indent)}{}`);
    return;
  }
  for (const [key, value] of entries) {
    yamlKeyValue(lines, indent, key, value);
  }
}

function yamlNormativeRules(lines, indent, rules) {
  if (!rules || rules.length === 0) {
    lines.push(`${" ".repeat(indent)}[]`);
    return;
  }
  for (const rule of rules) {
    lines.push(`${" ".repeat(indent)}- rule_id: ${yamlPlainOrQuoted(rule.rule_id)}`);
    yamlKeyValue(lines, indent + 2, "applies_to", rule.applies_to);
    yamlKeyValue(lines, indent + 2, "rule", rule.rule);
    yamlStringArray(lines, indent + 2, "source_ids", rule.source_ids);
  }
}

function yamlFlowBinding(lines, indent, binding) {
  if (!binding) return;
  const value = typeof binding === "string" ? { binding } : binding;
  yamlKeyValue(lines, indent, "binding", value.binding ?? "");
  if (value.binding === "parameterized" && value.flow_set_ref) {
    lines.push(`${" ".repeat(indent)}flow_set_ref:`);
    yamlKeyValue(lines, indent + 2, "id", value.flow_set_ref.id);
    yamlKeyValue(lines, indent + 2, "version", value.flow_set_ref.version);
    if (value.flow_set_ref.group) yamlKeyValue(lines, indent + 2, "group", value.flow_set_ref.group);
  }
}

function yamlModuleReferences(lines, moduleReferences) {
  if (
    !moduleReferences ||
    ((moduleReferences.selected?.length ?? 0) === 0 &&
      (moduleReferences.unresolved?.length ?? 0) === 0)
  ) return;
  lines.push("module_references:");
  yamlKeyValue(lines, 2, "selection_mode", moduleReferences.selection_mode);
  for (const key of ["selected", "unresolved"]) {
    const entries = moduleReferences[key] ?? [];
    lines.push(`  ${key}:`);
    if (entries.length === 0) {
      lines.push("    []");
      continue;
    }
    for (const entry of entries) {
      lines.push(`    - id: ${yamlPlainOrQuoted(entry.id)}`);
      yamlKeyValue(lines, 6, "kind", entry.kind);
      yamlKeyValue(lines, 6, "path", entry.path);
      yamlKeyValue(lines, 6, "decision", entry.decision);
    }
  }
}

export function structuredProjectionYaml(projection, { sourceMarkdown, moduleReferences } = {}) {
  if (typeof sourceMarkdown !== "string") {
    throw new TypeError("structuredProjectionYaml requires canonical sourceMarkdown.");
  }
  const lines = [
    "schema_version: 1",
    "generated_from: markdown",
    `source_markdown: ${PCR_EN_FILE}`,
  ];

  lines.push("product_category_identity:");
  yamlFlatObject(lines, 2, projection.productCategoryIdentity);

  lines.push("functional_unit:");
  yamlFlatObject(lines, 2, projection.functionalUnit);

  lines.push("system_boundary:");
  lines.push("  rules:");
  yamlNormativeRules(lines, 4, projection.systemBoundary?.rules);

  lines.push("boundary_abstraction:");
  yamlFlatObject(lines, 2, projection.boundaryAbstraction);

  lines.push("reference_flow_definition:");
  if (projection.referenceFlowDefinition) {
    const definition = projection.referenceFlowDefinition;
    yamlKeyValue(lines, 2, "reference_amount", definition.reference_amount);
    lines.push("  product_flow_ref:");
    yamlKeyValue(lines, 4, "name", definition.product_flow.name);
    if (definition.product_flow.uuid) {
      yamlKeyValue(lines, 4, "uuid", definition.product_flow.uuid);
    }
    lines.push("  flow_property_ref:");
    yamlKeyValue(lines, 4, "uuid", definition.flow_property_uuid);
    lines.push("  unit_group_ref:");
    yamlKeyValue(lines, 4, "uuid", definition.unit_group_uuid);
    yamlKeyValue(lines, 2, "reference_unit", definition.reference_unit);
    yamlStringArray(lines, 2, "required_qualifiers", definition.required_qualifiers);
    yamlFlowBinding(lines, 2, definition.binding
      ? { binding: definition.binding, flow_set_ref: definition.flow_set_ref }
      : undefined);
  } else {
    lines.push("  {}");
  }

  lines.push("reference_flows:");
  if (projection.referenceFlows.length === 0) {
    lines.push("  []");
  } else {
    for (const flow of projection.referenceFlows) {
      lines.push("  - role: " + yamlScalar(flow.role));
      yamlKeyValue(lines, 4, "name", flow.name);
      yamlKeyValue(lines, 4, "flow_type", flow.flow_type);
      if (flow.uuid) {
        lines.push("    flow_ref:");
        yamlKeyValue(lines, 6, "uuid", flow.uuid);
      }
      lines.push("    flow_property_ref:");
      yamlKeyValue(lines, 6, "uuid", flow.flow_property_uuid);
      lines.push("    unit_group_ref:");
      yamlKeyValue(lines, 6, "uuid", flow.unit_group_uuid);
      yamlKeyValue(lines, 4, "preferred_unit", flow.preferred_unit);
      yamlFlowBinding(lines, 4, flow.binding
        ? { binding: flow.binding, flow_set_ref: flow.flow_set_ref }
        : undefined);
    }
  }

  lines.push("measurement_rules:");
  if (projection.measurementRules.length === 0) {
    lines.push("  []");
  } else {
    for (const rule of projection.measurementRules) {
      lines.push("  - id: " + yamlPlainOrQuoted(rule.id));
      yamlKeyValue(lines, 4, "applies_to", rule.applies_to);
      lines.push("    required_property_ref:");
      yamlKeyValue(lines, 6, "name", rule.required_property);
      yamlKeyValue(lines, 6, "uuid", rule.required_property_uuid);
      yamlKeyValue(lines, 4, "required_unit", rule.required_unit);
      yamlKeyValue(lines, 4, "rule", rule.rule);
    }
  }

  lines.push("process_map:");
  if (projection.processMap.length === 0) {
    lines.push("  []");
  } else {
    for (const processEntry of projection.processMap) {
      lines.push("  - id: " + processEntry.id);
      yamlKeyValue(lines, 4, "name", processEntry.name);
      yamlKeyValue(lines, 4, "inclusion", processEntry.inclusion);
      yamlKeyValue(lines, 4, "inclusion_condition", processEntry.inclusion_condition);
      yamlKeyValue(lines, 4, "role", processEntry.role);
      yamlKeyValue(lines, 4, "quantitative_reference", processEntry.quantitative_reference);
    }
  }

  lines.push("process_inventory:");
  if (projection.processInventory.length === 0) {
    lines.push("  []");
  } else {
    for (const processEntry of projection.processInventory) {
      lines.push("  - id: " + processEntry.id);
      yamlKeyValue(lines, 4, "label", processEntry.label);
      for (const direction of ["inputs", "outputs"]) {
        lines.push(`    ${direction}:`);
        for (const flowType of ["product", "waste", "elementary"]) {
          lines.push(`      ${flowType}:`);
          const rows = processEntry[direction][flowType];
          if (rows.length === 0) {
            lines.push("        []");
            continue;
          }
          for (const row of rows) {
            lines.push("        - row_id: " + yamlPlainOrQuoted(row.row_id));
            yamlKeyValue(lines, 10, "role", row.role);
            yamlKeyValue(lines, 10, "name", row.name);
            yamlKeyValue(lines, 10, "flow_type", row.flow_type);
            if (row.uuid) {
              lines.push("          flow_ref:");
              yamlKeyValue(lines, 12, "uuid", row.uuid);
            }
            yamlFlowBinding(lines, 10, row.binding
              ? { binding: row.binding, flow_set_ref: row.flow_set_ref }
              : undefined);
            yamlKeyValue(lines, 10, "property_unit", row.property_unit);
            if (row.description) {
              yamlKeyValue(lines, 10, "description", row.description);
            }
            lines.push("          amount:");
            yamlKeyValue(lines, 12, "expression", row.amount?.expression);
            yamlKeyValue(lines, 12, "value_mode", row.amount?.value_mode);
            yamlKeyValue(lines, 12, "specificity", row.amount?.specificity);
            lines.push("            basis:");
            yamlKeyValue(lines, 14, "text", row.amount?.basis?.text);
            yamlKeyValue(lines, 14, "kind", row.amount?.basis?.kind);
            lines.push("            evidence:");
            yamlKeyValue(lines, 14, "kind", row.amount?.evidence?.kind);
            if (row.amount?.evidence?.collection_protocol_id) {
              lines.push(
                "              collection_protocol_id: " +
                  yamlPlainOrQuoted(row.amount.evidence.collection_protocol_id),
              );
            }
            yamlStringArray(lines, 14, "source_ids", row.amount?.evidence?.source_ids);
            yamlRangeArray(lines, 12, row.amount?.ranges);
          }
        }
      }
    }
  }

  lines.push("allocation_rules:");
  yamlNormativeRules(lines, 2, projection.allocationRules);

  lines.push("dataset_production:");
  lines.push("  collection_protocols:");
  if (projection.collectionProtocols.length === 0) {
    lines.push("    []");
  } else {
    for (const protocol of projection.collectionProtocols) {
      lines.push("    - protocol_id: " + yamlPlainOrQuoted(protocol.protocol_id));
      yamlKeyValue(lines, 6, "process_id", protocol.process_id);
      yamlKeyValue(lines, 6, "flow_role", protocol.flow_role);
      yamlKeyValue(lines, 6, "record_type", protocol.record_type);
      yamlKeyValue(lines, 6, "raw_fields", protocol.raw_fields);
      yamlKeyValue(lines, 6, "collection_method", protocol.collection_method);
      yamlKeyValue(lines, 6, "unit", protocol.unit);
      yamlKeyValue(lines, 6, "frequency", protocol.frequency);
      yamlKeyValue(lines, 6, "temporal_coverage", protocol.temporal_coverage);
      yamlKeyValue(lines, 6, "site_scope", protocol.site_scope);
      yamlKeyValue(lines, 6, "aggregation_rule", protocol.aggregation_rule);
      yamlKeyValue(lines, 6, "quality_evidence", protocol.quality_evidence);
    }
  }
  lines.push("  calculation_rules:");
  if (projection.calculationRules.length === 0) {
    lines.push("    []");
  } else {
    for (const rule of projection.calculationRules) {
      lines.push("    - id: " + yamlPlainOrQuoted(rule.id));
      yamlKeyValue(lines, 6, "applies_to", rule.applies_to);
      yamlKeyValue(lines, 6, "rule", rule.rule);
      yamlStringArray(lines, 6, "inputs", rule.inputs);
      yamlKeyValue(lines, 6, "output", rule.output);
      yamlStringArray(lines, 6, "source_ids", rule.source_ids);
    }
  }
  lines.push("  data_quality_requirements:");
  if (projection.dataQualityRequirements.length === 0) {
    lines.push("    []");
  } else {
    for (const requirement of projection.dataQualityRequirements) {
      lines.push("    - id: " + yamlPlainOrQuoted(requirement.id));
      yamlKeyValue(lines, 6, "applies_to", requirement.applies_to);
      yamlKeyValue(lines, 6, "requirement", requirement.requirement);
      yamlKeyValue(lines, 6, "evidence", requirement.evidence);
    }
  }

  lines.push("validation_rules:");
  yamlNormativeRules(lines, 2, projection.validationRules);

  lines.push("published_dataset_profile:");
  yamlFlatObject(lines, 2, projection.publishedDatasetProfile);

  yamlModuleReferences(lines, moduleReferences);

  lines.push("data_sources:");
  if (projection.dataSources.length === 0) {
    lines.push("  []");
  } else {
    for (const source of projection.dataSources) {
      lines.push("  - id: " + yamlScalar(source.id));
      yamlKeyValue(lines, 4, "type", source.type);
      yamlKeyValue(lines, 4, "reference", source.reference);
      yamlKeyValue(lines, 4, "used_for", source.used_for);
    }
  }

  const generatedContent = `${lines.join("\n")}\n`;
  const metadata = buildProjectionMetadata({ sourceMarkdown, generatedContent });
  lines.push("projection_metadata:");
  yamlKeyValue(lines, 2, "contract_version", metadata.contract_version);
  yamlKeyValue(lines, 2, "generator", metadata.generator);
  lines.push("  canonical_markdown:");
  yamlKeyValue(lines, 4, "path", metadata.canonical_markdown.path);
  yamlKeyValue(lines, 4, "normalization", metadata.canonical_markdown.normalization);
  yamlKeyValue(lines, 4, "hash_algorithm", metadata.canonical_markdown.hash_algorithm);
  yamlKeyValue(lines, 4, "sha256", metadata.canonical_markdown.sha256);
  yamlKeyValue(lines, 2, "generated_content_sha256", metadata.generated_content_sha256);

  return `${lines.join("\n")}\n`;
}
