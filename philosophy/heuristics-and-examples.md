# Heuristics and Architectural Examples

This document turns the revised theory into an engineering workflow. The heuristics are conditional: justify them against an observed transformation and responsibility rather than applying them as style doctrine.

## 1. Review the Transformation, Not the Aesthetic

Before recommending architecture, write a small transformation frame:

```text
Responsibility at stake:
Before:
After:
Boundary crossed:
Successor and task:
Evidence available:
Important unknowns:
```

A framework, global store, generated file, native element, or local module is not inherently continuous or discontinuous. Its effects must be observed.

## 2. Gather Evidence Across Relevant Surfaces

Inspect only the surfaces needed for the responsibility, but do not stop at the easiest one.

Possible surfaces:

- request, issue, or design intent;
- source and configuration;
- callers, consumers, and dependents;
- tests and contract fixtures;
- generated or compiled artifacts;
- public API, DOM, schema, CLI, logs, or runtime state;
- error, rollback, and degraded behavior;
- migration and provenance records.

Separate what was directly observed from what was inferred. If a required surface cannot be inspected, mark the conclusion `unknown` rather than filling the gap with architectural preference.

## 3. Preserve Distinctions Through the Change

Useful distinctions often include:

- unknown vs false;
- absent vs empty;
- observation vs interpretation;
- generated vs approved;
- capability vs permission;
- retryable vs terminal failure;
- local responsibility vs shared invariant;
- backward-compatible behavior vs intentional contract break.

Do not flatten these into a single boolean, untyped payload, generic exception, or settled summary unless the loss is explicit and justified.

## 4. Bound Reasoning Scope

Reasoning scope is the context required to complete a named task safely.

Estimate it concretely:

- How many modules or services must be inspected?
- Which contracts connect them?
- Which dependencies are discoverable from the changed surface?
- What undocumented knowledge is required?
- Which cross-cutting responsibilities justify non-local context?

Prefer reducing accidental scope, not eliminating all non-locality.

### Conditional Strategy: Colocation

Prefer colocation when one boundary owns the behavior and state.

Avoid duplicating policy locally when correctness depends on one shared invariant. In that case, centralize enforcement but keep the dependency, contract, and failure behavior explicit at each consumer.

## 5. Inspect Materialized Behavior Without Canonizing It

Generated and runtime artifacts matter because users and downstream systems encounter them directly. Inspect them when relevant.

Then ask what they do **not** contain:

- Can the behavior be related to source?
- Is the generation step inspectable and reproducible?
- Are rationale and authority stored elsewhere?
- Does optimization remove identifiers needed for diagnosis?
- Can failure be distinguished from absence?

Treat output as evidence, not as automatic truth.

## 6. Design for Conservative Degradation

When complete meaning cannot survive, prefer explicit uncertainty or bounded loss over confident fabrication.

Prefer:

- typed unknown and partial states;
- explicit error propagation;
- provenance on derived values;
- baseline behavior where the domain allows it;
- migration diagnostics;
- audit paths from summaries to source evidence.

Avoid:

- swallowed errors;
- silent fallback that changes semantics;
- defaults that convert missing evidence into a positive claim;
- summaries that erase unresolved alternatives;
- generated state that cannot reveal whether it is stale or incomplete.

## 7. Earn Persistence and Abstraction

Before adding a registry, schema, cache, protocol, durable object, or new abstraction, ask:

1. What recurring process discontinuity has been observed?
2. How has the current implementation proved insufficient?
3. What is the minimum content or responsibility that must cross the boundary?
4. Why is this the smallest adequate mechanism?
5. What would let the mechanism be removed later?

A plausible future need is not the same as demonstrated pressure.

## 8. Keep Authority Visible

Codebases contain many artifacts that can be mistaken for authority:

- generated files;
- snapshots;
- tests;
- comments;
- schemas;
- migration output;
- review labels;
- model-generated plans.

Make it clear which artifacts are observations, contracts, decisions, generated projections, or permissions. A file's location or format does not determine its authority.

## 9. Evaluate Failure and Correction

A continuity review is incomplete if it checks only successful initialization.

Test or inspect:

- dependency unavailable;
- partial generation;
- stale state;
- invalid input;
- migration interruption;
- old consumer/new producer combinations;
- rollback or correction of a mistaken decision;
- missing provenance or audit source.

Ask whether failure remains coherent and whether correction has a bounded blast radius.

## 10. Examples

### Local UI State

A disclosure control whose state belongs to one rendered component often benefits from semantic HTML, visible attributes, and local behavior. The trigger, controlled element, accessibility relationship, and state transition can be inspected together.

This does not imply that authentication, analytics consent, or transactional state should be independently implemented in every component. Those responsibilities may require shared enforcement with explicit local contracts.

### Generated API Client

Generation improves continuity when:

- the source schema is versioned;
- generated methods preserve domain names and types;
- output records its generator and source version;
- consumers can trace a breaking method to a schema change;
- generation failure is explicit;
- hand edits are either prohibited clearly or preserved by an extension boundary.

Readable generated code alone is insufficient if nobody can recover whether it is current or authorized.

### Data Migration

A migration preserves continuity when it makes the old/new mapping, irreversible loss, validation, rollback boundary, and consumer compatibility explicit.

Keeping the same field name while silently changing units is discontinuity. Renaming and reorganizing every field can remain continuous when the mapping and behavioral contracts are inspectable and tested.

### Handoff to a Coding Agent

A settled implementation instruction may transfer the answer while erasing uncertainty about the problem. A stronger handoff distinguishes:

- observed behavior;
- current interpretation;
- rejected or competing explanations;
- open questions;
- authorized change;
- evidence paths.

The goal is not maximal history. It is enough structured context to induce the appropriate next posture.

## 11. Review Output

Report findings with:

- **Observed** evidence;
- **Interpretation** and alternatives;
- **Status:** `preserved`, `at risk`, `broken`, `unknown`, or `not applicable`;
- **Consequence** for the named successor task;
- **Minimal recommendation**;
- **Validation** that would confirm or weaken the recommendation.

Avoid numeric scores unless a calibrated rubric and comparable baseline exist.
