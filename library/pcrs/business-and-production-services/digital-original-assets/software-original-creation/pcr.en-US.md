---
pcr_id: pcr.business-and-production-services.digital-original-assets.software-original-creation
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Software original creation

## 1. Scope and Applicability

This PCR covers creation of completed software originals: instructions capable of producing a declared computing result, embodied in an identifiable original asset that can be protected and licensed as intellectual property. It covers system and application originals, including games and development tools, without restricting a programming language or requiring a physical carrier. The reference is the original produced, not a customer copy. Software produced under contract for others is outside this category.

Data assets/databases without a software-original output, general R&D results, designs, brands, franchise assets, licence-only transactions, packaged copies, software downloads and hosted ongoing services are excluded as reference products. The activity boundary includes the real original-development cycle and one accepted original handover; later replication, network distribution and use require separate datasets. Sources: `un-cpc-software-originals`, `un-cpc-system-downloads`, `un-cpc-application-downloads`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-original-assets.software-original-creation |
| classification_refs | CPC 3.0 83143 — Software originals |
| covered_products | Completed system/application software original assets, including games and developer tools, with identified functionality and original acceptance |
| excluded_products | Contract software for others; data-only assets; R&D originals; copies/downloads; SaaS; licence-only services |
| representative_product | One frozen, accepted software original version with documented source and build provenance |
| production_route | Requirements/architecture → implementation/integration → build/verification → original acceptance/preservation; actual shared infrastructure |
| market_state | Original asset ready for declared reproduction/reuse; no assumed number of future copies or users |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one completed software original with the declared computing functions and reuse scope |
| How much | One accepted original asset, counted once regardless of archive file count or platform-build count |
| How well | Actual version-specific functional/platform acceptance, integrity and completeness defined by primary acceptance records |
| How long or cycle | One declared creation cycle from project start/baseline to original acceptance and handover; no assumed operational lifetime |
| reference_flow_link | `software_original_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed software original |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | asset/version/hash; system/application function; platforms and included builds; acceptance/completeness criteria; source and component provenance; original/revision scope; reuse/reproduction rights and conditions; creation interval; sites; provider boundaries; infrastructure attribution; exclusions |

The unit item is the display alias for public Item(s), with the unchanged Number of items property and unit group. All required qualifiers must be supplied in the actual dataset. A different original is not functionally equivalent merely because it also counts as one item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_original_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one completed original through cp_original; the fixed reference output is 1 item. Count is not the number of users, rights transfers, files or downloads. |
| `electricity_unit` | electricity exchanges | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public energy property. Meter kWh and convert to MJ with electricity_conversion; no GB-to-kWh factor. |
| `hardware_mass` | apparatus inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure actual configuration-specific net device mass and its attributable upstream manufacture share. This does not define a software-original mass or change the item reference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented project decision and actual source/component baseline; initial original creation or specifically delimited later revision |
| starting_condition_role | Separates prior completed originals and general research from the measured current-original creation interval |
| product_classification_scope | Software original asset; excludes contracted software for others and download/copy outputs |
| recursive_input_rule | Record each acquired same-category original once with its upstream dataset and documented reuse share; do not recursively redevelop its source chain in this foreground |
| upstream_dataset_requirement | Compatible site/voltage electricity, configuration-specific equipment manufacture, acquired original/component and actual supplier delivery datasets; disclose missing boundaries |
| disclosure | Original identity; baseline and creation dates; all teams/sites/provider scopes; allocation keys; included equipment/cooling; excluded downstream copies and operation; unresolved data |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_original` | original production | Include project-attributable requirements, architecture, implementation, integration, builds, tests, rework, release acceptance, source/artifact preservation and the one original handover. Include unsuccessful attempts belonging to the accepted original. Do not assume any specific language, algorithm, training step or deployment architecture. | `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1` |
| `boundary_separate_copies` | downstream activities | Exclude later copying, public downloads, distribution campaigns, customer installation, user operation, subscription hosting and post-acceptance maintenance and continuing archival storage after handover. A downstream copy model may use the original dataset with an explicit reuse-population allocation, but must not charge the entire original to every download. Initial original handover is distinguished from ongoing download/network delivery. | `un-cpc-software-originals`; `un-cpc-system-downloads`; `un-cpc-application-downloads` |
| `boundary_primary` | all sites and suppliers | Collect supporting compute, storage and network activity used during creation at their real sites. Expand primary provider records into nonduplicated atomic exchanges or retain a specific service dataset with a verified delivery unit and declared boundary. Neither cloud invoices nor GB transferred establish electricity. This is a declared foreground original-creation dataset, not a complete cradle-to-gate claim; upstream utilities, equipment manufacture and acquired originals require compatible linked datasets. | `gsf-sci-1-1` |
| `boundary_actual_exchanges` | conditional utility and apparatus extensions | The listed hardware and cooling rows apply only when the stated equipment/utility exists. Add one specific row for each actual separate display, network appliance, consumable, fuel, coolant, wastewater or direct elementary exchange omitted from these cards; identify its property, protocol and provider/compartment. Direct emissions are required only with measured occurrence or an evidenced physical source. Purchased-electricity impacts belong upstream, not invented onsite CO2. Mark unmeasured material omissions as incomplete, not zero. | `gsf-sci-1-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `requirements` | Requirements and architecture | required | Declared original asset | original creation foreground | per declared reference flow |
| `implementation` | Implementation and integration | required | Declared original asset | original creation foreground | per declared reference flow |
| `verification` | Build and verification | required | Declared original asset | original creation foreground | per declared reference flow |
| `mastering` | Original acceptance and preservation | required | Declared original asset | original creation foreground | per declared reference flow |
| `infrastructure` | Attributable development infrastructure | conditional | Equipment and water are within the declared primary boundary and not already in supplier datasets | original creation foreground | per declared reference flow |

### Process: Requirements and architecture (`requirements`)

Requirements retain the actual architecture decisions; implementation includes actual integration and repeated work; verification includes the actual build and acceptance test campaigns; mastering includes frozen original files, provenance, integrity checks, preservation and one handover. Any ML training or other specialized work is included only when actually attributable to this original. No numerical default is specified.

#### Inputs

##### Product flows

###### Electricity for other actual supply locations or voltages (`requirements_electricity_site`)

Applies when the actual user-side supply location or voltage does not match either CN public identity below. Declare the actual location, voltage, supply mix and supplier boundary and directly verify the appropriate identity. Partition by actual meter with the low/medium-voltage rows, without duplication; do not substitute CN electricity for another grid.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Retain actual location, voltage and infrastructure overhead coverage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Low-voltage electricity (`requirements_electricity_lv`)

Only for measured CN user-side grid supply below 1 kV. Separate meters and intervals; this is not a global/default electricity identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Medium-voltage electricity (`requirements_electricity_mv`)

Only for measured CN user-side grid supply at 1–35 kV. Do not also count the same delivery at low voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

#### Outputs

##### Product flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

### Process: Implementation and integration (`implementation`)

Requirements retain the actual architecture decisions; implementation includes actual integration and repeated work; verification includes the actual build and acceptance test campaigns; mastering includes frozen original files, provenance, integrity checks, preservation and one handover. Any ML training or other specialized work is included only when actually attributable to this original. No numerical default is specified.

#### Inputs

##### Product flows

###### Electricity for other actual supply locations or voltages (`implementation_electricity_site`)

Applies when the actual user-side supply location or voltage does not match either CN public identity below. Declare the actual location, voltage, supply mix and supplier boundary and directly verify the appropriate identity. Partition by actual meter with the low/medium-voltage rows, without duplication; do not substitute CN electricity for another grid.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Retain actual location, voltage and infrastructure overhead coverage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Low-voltage electricity (`implementation_electricity_lv`)

Only for measured CN user-side grid supply below 1 kV. Separate meters and intervals; this is not a global/default electricity identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Medium-voltage electricity (`implementation_electricity_mv`)

Only for measured CN user-side grid supply at 1–35 kV. Do not also count the same delivery at low voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Acquired original component (`prior_original_input`)

Only when an independently completed original is acquired for integration; identify exact version, functions, reuse permission and upstream attribution. Internal commits and free access alone are not new product exchanges.

- Selected flow: Previously completed software original used as a reusable component
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Collect the actual attributable original-component count through cp_components, per declared reference flow; record the upstream burden sharing separately from installation-copy counts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

#### Outputs

##### Product flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

### Process: Build and verification (`verification`)

Requirements retain the actual architecture decisions; implementation includes actual integration and repeated work; verification includes the actual build and acceptance test campaigns; mastering includes frozen original files, provenance, integrity checks, preservation and one handover. Any ML training or other specialized work is included only when actually attributable to this original. No numerical default is specified.

#### Inputs

##### Product flows

###### Electricity for other actual supply locations or voltages (`verification_electricity_site`)

Applies when the actual user-side supply location or voltage does not match either CN public identity below. Declare the actual location, voltage, supply mix and supplier boundary and directly verify the appropriate identity. Partition by actual meter with the low/medium-voltage rows, without duplication; do not substitute CN electricity for another grid.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Retain actual location, voltage and infrastructure overhead coverage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Low-voltage electricity (`verification_electricity_lv`)

Only for measured CN user-side grid supply below 1 kV. Separate meters and intervals; this is not a global/default electricity identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Medium-voltage electricity (`verification_electricity_mv`)

Only for measured CN user-side grid supply at 1–35 kV. Do not also count the same delivery at low voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Purchased test delivery (`external_test_report`)

Only when a third party delivers one bounded test campaign report on this original version; do not also inventory that supplier campaign electricity or hardware. The report is a service-delivery count, not software-original output.

- Selected flow: External executable-software test report delivery
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Record delivered and accepted test reports through cp_components, per declared reference flow; supplier inventory must disclose campaign coverage and count unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

#### Outputs

##### Product flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

### Process: Original acceptance and preservation (`mastering`)

Requirements retain the actual architecture decisions; implementation includes actual integration and repeated work; verification includes the actual build and acceptance test campaigns; mastering includes frozen original files, provenance, integrity checks, preservation and one handover. Any ML training or other specialized work is included only when actually attributable to this original. No numerical default is specified.

#### Inputs

##### Product flows

###### Electricity for other actual supply locations or voltages (`mastering_electricity_site`)

Applies when the actual user-side supply location or voltage does not match either CN public identity below. Declare the actual location, voltage, supply mix and supplier boundary and directly verify the appropriate identity. Partition by actual meter with the low/medium-voltage rows, without duplication; do not substitute CN electricity for another grid.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Retain actual location, voltage and infrastructure overhead coverage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `gsf-sci-1-1`

###### Low-voltage electricity (`mastering_electricity_lv`)

Only for measured CN user-side grid supply below 1 kV. Separate meters and intervals; this is not a global/default electricity identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Medium-voltage electricity (`mastering_electricity_mv`)

Only for measured CN user-side grid supply at 1–35 kV. Do not also count the same delivery at low voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable kWh × 3.6 MJ/kWh for this activity; collect through cp_energy. Disclose shared-meter attribution and provider overhead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

#### Outputs

##### Product flows

###### Completed original asset (`software_original_output`)

One accepted original with a frozen release identity, executable function and reproduction/reuse conditions; source archives and platform builds belong to this one original when the declared acceptance scope groups them. cp_original verifies the accepted original, not download events or licensed seats.

- Selected flow: Completed software original
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_original`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

### Process: Attributable development infrastructure (`infrastructure`)

Requirements retain the actual architecture decisions; implementation includes actual integration and repeated work; verification includes the actual build and acceptance test campaigns; mastering includes frozen original files, provenance, integrity checks, preservation and one handover. Any ML training or other specialized work is included only when actually attributable to this original. No numerical default is specified.

#### Inputs

##### Product flows

###### Portable development-computer manufacture share (`portable_computer_share`)

Only a real portable computer no heavier than 10 kg matching this public identity and the measured configuration; no server or desktop substitution.

- Selected flow: Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks `c4cb6070-944d-41be-a231-a0a2b9477174`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × project reserved time / evidenced installed service life × project reserved resources / total device resources; collect through cp_hardware. This is an attributable hardware input, not software mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Integrated development-computer manufacture share (`integrated_computer_share`)

Only a real same-housing computer containing CPU and input/output unit that matches this identity; separately supplied screens/peripherals require separate rows.

- Selected flow: Automatic data processing machines, comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined `3c41eabb-f2b2-4e96-b24d-3485673d505f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × project reserved time / evidenced installed service life × project reserved resources / total device resources; collect through cp_hardware. This is an attributable hardware input, not software mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Server manufacture share (`server_computer_share`)

Only for an actual configured rack-mounted build/test server; identify CPU, memory, storage, included chassis and upstream manufacture. Exclude separate network appliances and duplicate provider embodied inventory.

- Selected flow: Rack-mounted development server computer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net device kg × project reserved time / evidenced installed service life × project reserved resources / total device resources; collect through cp_hardware, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### Purchased cooling make-up water (`cooling_tap_water`)

Only for actual treated municipal tap-water input to development infrastructure cooling matching supplier quality/location; no river-water resource or unspecified freshwater substitution. Exclude supplier-contained water if already inventoried.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure delivered water mass through cp_water; if metered by volume retain measured density and state and the explicit conversion, per declared reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Waste flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

#### Outputs

##### Product flows

No exchange is prescribed in this group. Actual material exchanges require a specific additional row and evidence.

##### Waste flows

###### Cooling blowdown sent to treatment (`cooling_blowdown`)

Conditional: actual untreated cooling-tower blowdown exported to a treatment provider. Record salts, additives, contamination, measured mass and treatment destination. The exchange is a technosphere waste, not an elementary freshwater resource or assumed direct discharge. Public generic names cannot establish the actual process and untreated state; identity remains unresolved.

- Selected flow: Untreated cooling-tower blowdown sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure outgoing blowdown through cp_water, per declared reference flow; reconcile with input, evaporation and water stock changes without assuming a fixed fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### Elementary flows

No direct elementary exchange is assumed for this activity. If primary records establish an actual emission or abstraction, add its chemical identity, environmental compartment, measured amount and protocol; keep upstream electricity emissions in the electricity dataset.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | activities and original versions | Separate identifiable project/version jobs and meters before allocation. Retain failures, branches and rework causally assigned to this original. For shared platform work, use measured attributable activity and declared reuse scope, reconcile the full resource total and report residual/unassigned work. No default division by revenue, lines of code, downloads or users. | `gsf-sci-1-1` |
| `allocation_equipment` | manufacture share | Use device-specific net mass with traceable upstream manufacture and measured project reservation intervals and resource shares. The share is time reserved divided by evidenced installed service life, multiplied by resources reserved divided by total available resources. No assumed four-year life, constant utilization or generic device. Disclose uncertainty and avoid adding equipment manufacture already contained in a provider service dataset. | `gsf-sci-1-1` |
| `allocation_original` | joint and reused intellectual outputs | One original may encompass documented source archives and multiple platform builds without multiplying its count. Distinct accepted originals from one project need a foreground-supported allocation key and sensitivity disclosure; otherwise retain a joint-output dataset and an unresolved allocation. Existing originals/components enter once with their declared upstream share; sale or reuse rights do not constitute a physical mass or an avoided-burden credit. | `un-cpc-software-originals` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_original` | mastering | software_original_output | acceptance_record | asset id; version; hash; release date; functions; platforms; source/artifact manifest; component provenance; acceptance decision; reuse rights; original count | Check original acceptance against frozen repositories and artifact manifests; count one completed original, not its files or copies. Record first creation versus incremental revision scope. | item | at acceptance | entire declared creation interval | all contributing teams/sites | per declared reference flow | signed acceptance; hashes; provenance; rights record |
| `cp_energy` | requirements; implementation; verification; mastering | activity electricity | meter_record | original id; process id; job id; meter id; interval; site; voltage; kWh; reserved resources; allocation key; overhead coverage | Use calibrated submeter records or reconciled provider primary telemetry. Link design workstation, integration, build/test and acceptance/archive jobs. Measure network/storage infrastructure energy independently of traffic volumes; include provisioned idle and cooling electricity exactly once. | kWh | each meter interval/job | full creation interval including failed runs | each workstation/provider/data centre site | per declared reference flow | calibration; meter totals; job logs; provider boundary; attribution reconciliation |
| `cp_components` | implementation; verification | prior_original_input; external_test_report | supplier_record | delivery id; component/report version; original id; count; acceptance; upstream dataset; reuse population; coverage | Read actual acquisition/reuse and test-campaign deliveries with acceptance and supplier inventory boundaries; retain provider raw units and audited attribution. | item | each delivery | declared creation interval | actual suppliers and project | per declared reference flow | contract; version; accepted report; upstream inventory and no-duplication check |
| `cp_hardware` | infrastructure | portable_computer_share; integrated_computer_share; server_computer_share | device_record | device id; configuration; net device mass; weighing record; upstream manufacture; reserved interval; installed service life; resources reserved; total resources | Use calibrated device weighing or traceable supplier net-mass records for the same configuration. Retain observed installation/retirement evidence or explicitly justified projected installed life and reservation logs. Compute resource shares with consistent device capacity definitions. | kg | device/configuration and reservation change | creation interval; device service-life evidence | owned devices or independently decomposed provider devices | per declared reference flow | scale/supplier record; configuration; life basis; capacity and reservation reconciliation |
| `cp_water` | infrastructure | cooling_tap_water; cooling_blowdown | utility_record | site; system; original id; input water mass; output blowdown mass; density/state if volumetric; evaporation; stocks; salts/additives; receiving provider | Read actual cooling supply and discharge meters and supplier/density evidence. Attribute development workloads with the same reconciled cooling activity boundary; record chemistry and actual water balance, not assumed discharge or water intensity. | kg | each utility interval | full applicable creation interval | actual cooling facilities | per declared reference flow | meters; density/state evidence; supply quality; treatment destination; balance residual |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | all electricity rows | MJ = measured attributable kWh × 3.6; retain kWh and grid/voltage records. Shared-resource attribution must be independently measured/reconciled before this unit conversion. | cp_energy | MJ per declared reference flow | `gsf-sci-1-1` |
| `hardware_attribution` | portable_computer_share; integrated_computer_share; server_computer_share | Attributed hardware kg = measured net device kg × (project reserved time / evidenced installed service life) × (project reserved resource / total device resource). Use consistent time units, strictly positive evidenced service life and capacity, and reserved-time/resource shares between zero and one; reconcile shares across projects without totals exceeding available resources. Record unavailable life or resource evidence as unresolved, not a default. | cp_hardware | kg per declared reference flow | `gsf-sci-1-1` |
| `original_basis` | all inventory rows | Record the exchanges attributable to the one accepted original directly per declared reference flow. If a cohort contains distinct originals, partition the primary records with the documented allocation first; do not average unlike originals and claim equivalence. All stage counts, deliveries and intervals must refer to the same original. | cp_original; cp_energy; cp_components; cp_hardware; cp_water | declared original reference flow | `un-cpc-software-originals` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference original | Fix the asset/version, function, platform builds, completeness, acceptance tests, component origin, reuse rights and incremental versus first-original scope. There is no universal code-length, security or software lifetime threshold. | cp_original and actual test/rights evidence |
| `quality_coverage` | all stages | Cover real development sites and outsourced jobs over the full declared project interval. Retain failed runs and rework. Disclose missing data, meter granularity, shared idle allocation, provider coverage and infrastructure exclusions; data gaps are not zero. | job/campaign ledger; meters; provider inventory |
| `quality_representative` | reuse of datasets | Describe the actual software class, development model, scale, testing effort, tooling, compute hardware, geography and dates. A dataset for one version is not an industry average or evidence for all software functions. Update when functionality or resource architecture materially changes. | project/version profile and uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference output | Require exactly one completed-original reference item with version/hash, declared functions/platforms, acceptance evidence, component provenance and reproduction/reuse conditions. Reference name and software_original_output must match. Reject substitution by one licence, revenue unit, download, user-year, GB, kg or a contracted-development service. | `un-cpc-software-originals`; `nist-ssdf-1-1` |
| `validate_measurement` | every inventory row | Reconcile every exchange to the same original, period and declared reference flow; audit energy conversion and meter coverage, equipment shares and water balance. Check grid country and supply voltage against each electricity UUID; replace incompatible identities while preserving actual measured exchanges. Verify supplier boundaries to prevent duplicated electricity, hardware, originals and service inputs. | `gsf-sci-1-1` |
| `validate_completeness` | dataset release | Unresolved applicable flow identities, missing supplier inventories, unsupported shared-resource relationships and absent material stages prevent a complete dataset claim. Retain uncertainty and exclusions. Testing evidence defines the stated acceptance quality; it does not establish universal security, regulatory compliance or methodology approval. | `nist-ssdf-1-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Declared original-creation foreground dataset for one accepted software asset/version |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Reuse as an original-development input with explicit compatible function/version scope and downstream allocation; comparisons only with equivalent original function and boundary |
| excluded_use | Whole-life software service; per-download impact without copy allocation; universal industry average; contracted custom development; approval/security/compliance assertion |
| required_metadata | Reference qualifiers; actual primary sites/time interval; stage coverage; hardware and supplier datasets; allocation and reuse populations; conditional rows; omitted exchanges |
| required_quality_disclosure | Measured/modelled split; meter and provider coverage; missing data and identities; installed-life/resource-share uncertainty; exclusions and balance residuals |
| update_trigger | New accepted original/version with materially changed scope; changed development or hardware/cloud architecture; altered reuse scope; corrected supplier/measurement evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-software-originals` | official_guidance | UNSD, CPC Version 3.0, subclass 83143, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83143 | Original-asset identity and contract-development exclusion; classification is not an inventory factor |
| `un-cpc-system-downloads` | official_guidance | UNSD, CPC Version 3.0, subclass 84341, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | Distinguish downloadable system-software copies |
| `un-cpc-application-downloads` | official_guidance | UNSD, CPC Version 3.0, subclass 84342, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342 | Distinguish downloadable application-software copies |
| `gsf-sci-1-1` | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0, Energy; Embodied emissions; Software boundary. https://sci.greensoftware.foundation/ | Infrastructure discovery, measured electricity and device time/resource attribution adapted to the declared creation cycle; not an SCI score or default workload/lifetime |
| `nist-ssdf-1-1` | official_guidance | NIST SP 800-218, Secure Software Development Framework Version 1.1 (February 2022). https://doi.org/10.6028/NIST.SP.800-218 ; Table 1, PS.2/PS.3 (printed p.10, PDF p.19), PW.6/PW.8. | Release integrity/provenance and actual build/test/archival stage evidence; recommendation edition only, no NIST certification or numeric energy claim |
