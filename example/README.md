# Web Progressive Materialization Example

This directory is a build-less, web-specific example of several continuity-preserving strategies. It is not the general Semantic Continuity architecture.

## What It Demonstrates

### Inspectable Baseline Structure

`index.html` contains meaningful document structure before optional JavaScript enhancement. A browser, reviewer, or tool can inspect the header, article, navigation, and footer directly.

This is a domain advantage of HTML, not proof that every system can or should provide a static baseline.

### Visible UI State

`components/site-header/enhance.js` uses `aria-expanded` as inspectable UI state rather than maintaining a second private boolean. CSS and JavaScript can refer to the same state marker.

The example does not demonstrate a complete responsive menu: it is intentionally small and should not be treated as production accessibility evidence.

### Local Enhancement Boundaries

Header and footer enhancement functions receive the element they affect. This keeps their interaction behavior near the rendered structure.

The `delete`, authorization, transaction, and other cross-cutting examples discussed elsewhere would require explicit non-local contracts; locality is not automatic correctness.

### Explicit Composition Markers

The example uses `slot` and `part` attributes as visible composition and styling markers. In ordinary light DOM, these attributes are conventions unless a materializer or custom-element boundary gives them additional behavior.

### Relative Resource Provenance

Local relative imports keep authoring dependencies discoverable. A real materialization pipeline would need to demonstrate how it resolves URLs and preserves source-to-output provenance; this repository does not currently include that pipeline.

## Component Naming Convention

- `[component]/enhance.js`: exports optional behavior for existing structure.
- `[component]/[component].js`: defines an autonomous custom element that owns runtime-created UI.

This convention is local project guidance, not a universal web standard.

## Evaluation Boundary

The example is useful for inspecting source and basic browser behavior. It does not yet provide automated accessibility tests, failure-mode tests, generated-output provenance, or comparative evidence against another architecture.
