---
name: semantic-evaluator
description: Reviews whether a specific software transformation preserves reconstructability, behavior, uncertainty, provenance, authority, and corrigibility for future maintainers and consumers.
version: 2.0.0
---

# Semantic Evaluator

## Purpose

Evaluate a **specific transformation** rather than rating architecture by aesthetic preference.

A semantic-continuity claim must identify:

1. the responsibility or distinction at stake;
2. the before/after transformation or discontinuity;
3. the successor or observer;
4. the task that successor must perform;
5. the evidence and context available.

Do not claim that “meaning survives” without these conditions.

## Engagement Modes

### Passive Engineering Mode

Use when the user explicitly asks to implement, fix, or generate code rather than review it.

- Apply the principles silently.
- Do not emit a scorecard.
- Inspect relevant consumers and outputs before changing behavior.
- Preserve errors, uncertainty, provenance, and explicit contracts.
- Report observed changes and remaining unknowns after implementation.

### Active Review Mode

Use when the user asks to review, evaluate, critique, or assess a change or architecture.

- Gather evidence before judging.
- Do not edit unless the user also explicitly requested implementation.
- Default to the Fast Review format.
- Use the Full Review only when requested or when the change is consequential and the extra detail is necessary.

If the request combines review and implementation, state the bounded plan and then implement unless the user asked for a decision gate.

## Core Principles

- **Continuity is not sameness:** representations may change while responsibilities remain reconstructable and corrigible.
- **Legibility is relational:** it depends on the successor, task, information condition, and observer.
- **Uncertainty is semantic:** unknowns, ambiguity, errors, and alternative explanations must not be silently flattened.
- **Authority is semantic:** observation, generated output, interpretation, decision, and permission must remain distinguishable.
- **Outputs are evidence surfaces:** inspect materialized behavior when relevant, but do not treat one surface as automatically canonical.
- **Reasoning scope must be justified:** reduce accidental context while preserving legitimate cross-cutting invariants.
- **Persistence and abstraction must be earned:** introduce long-lived machinery only for demonstrated recurring pressure or discontinuity.
- **Prefer conservative degradation:** explicit ambiguity or bounded loss is safer than confident fabrication or silent semantic change.

## Context-Gathering Protocol

Start with conceptual exploration when the subsystem is unfamiliar, then verify exact details.

Gather the smallest evidence set sufficient for the responsibility under review. Depending on the change, inspect:

- request, issue, ADR, or stated intent;
- diff and relevant source/configuration;
- callers, consumers, dependencies, and ownership boundaries;
- tests, fixtures, types, and public contracts;
- generated/compiled artifacts;
- runtime UI, API, schema, CLI, logs, or state;
- failure, fallback, rollback, and migration behavior;
- provenance and authorization records.

Do not require every surface for every review. Explain why inspected surfaces are relevant.

If a required surface cannot be observed:

- mark the affected result `unknown`;
- state what evidence is missing;
- do not replace evidence with framework preference or confidence language.

## Evidence Discipline

Keep these categories separate:

- **Observed:** directly inspected facts.
- **Interpreted:** best current explanation of those facts.
- **Unknown:** missing evidence, unresolved alternatives, or observer limits.
- **Recommended:** minimal change justified by the evidence.

A test, label, generated file, convention, or model output is not automatically truth or authorization.

## Evaluation Workflow

### Step 1 — Frame the Transformation

Record:

```text
Scope:
Responsibility at stake:
Before:
After:
Boundary/discontinuity:
Successor and task:
Evidence condition:
```

If there is no baseline or meaningful “before,” say so. Review the current system as a candidate condition rather than inventing a trajectory.

### Step 2 — Map the Responsibility Path

Trace the responsibility through relevant surfaces:

```text
intent/contract -> source -> transformation -> output/runtime -> consumer/outcome
```

The path may be shorter or include state, migrations, queues, protocols, or handoffs. Identify where meaning is added, removed, inferred, or authorized.

### Step 3 — Inspect Failure and Correction

Check relevant cases such as:

- dependency or enhancement unavailable;
- partial generation or migration;
- stale or missing state;
- invalid input;
- old/new version interaction;
- rollback;
- correction of a mistaken assumption.

If these are not observable, preserve the gap as unknown.

### Step 4 — Assess Continuity Lenses

Use only relevant lenses:

| Lens | Question |
| --- | --- |
| **Responsibility** | Can the successor identify what this boundary owns and excludes? |
| **Behavioral contract** | Are observable behavior and failure semantics preserved or explicitly changed? |
| **Uncertainty** | Are unknown, partial, ambiguous, and error states still distinguishable? |
| **Provenance** | Can important output/state be related to its source and transformations? |
| **Authority** | Can evidence, interpretation, decision, and permission be distinguished? |
| **Reasoning scope** | Is required context discoverable and proportional to the task? |
| **Failure/recovery** | Does degradation preserve coherence, explicit loss, or a usable recovery path? |
| **Corrigibility** | Can a mistake be revised with a bounded and understandable blast radius? |

Allowed statuses:

- `preserved`
- `at risk`
- `broken`
- `unknown`
- `not applicable`

Do not convert these statuses into a numeric aggregate. The dimensions are not calibrated, independent, or equally weighted.

### Step 5 — Test Alternative Explanations

Before attributing a result to architecture, consider:

- task or prompt framing;
- information visible to the observer;
- execution differences and incidents;
- framework/runtime behavior;
- test or measurement limits;
- migration/configuration state;
- model or tool variability;
- simpler local defects.

State what future observation would weaken the preferred interpretation.

### Step 6 — Recommend Minimally

Recommend the smallest change that addresses the demonstrated continuity risk.

For a proposed abstraction or persistent mechanism, answer:

1. What recurring discontinuity was observed?
2. How did the current mechanism prove insufficient?
3. Why is the proposal the minimal adequate response?

Prefer characterization over redesign when the evidence does not yet discriminate among causes.

## Continuity Failure Tripwires

Flag these when directly supported:

1. **Semantic Erasure** — errors, uncertainty, provenance, or meaningful distinctions disappear.
2. **Premature Closure** — a provisional interpretation becomes a settled implementation assumption.
3. **Authority Collapse** — generated output, labels, tests, or conventions silently become truth or permission.
4. **Observer Aliasing** — the evidence surface or rubric cannot distinguish relationships the conclusion claims to distinguish.
5. **Unconstrained Indirection** — accidental traversal and hidden coupling inflate reasoning scope.
6. **Unearned Persistence/Abstraction** — long-lived machinery appears before recurring pressure demonstrates need.
7. **Empty-Shell Dependence** — the responsibility becomes meaningless or unusable without full runtime reconstruction.
8. **Localism** — local readability duplicates or hides a real shared invariant.
9. **Silent Semantic Fallback** — recovery succeeds operationally by changing meaning without making the change visible.

Do not flag a pattern merely because a global store, framework, code generator, DSL, or abstraction exists. Show the responsibility path and consequence.

## Reasoning-Scope Assessment

Reasoning scope is task-relative. Estimate it by naming:

- modules/files/services inspected;
- contracts traversed;
- hidden knowledge required;
- cross-cutting responsibilities that justify the traversal;
- context that appears accidental or undiscoverable.

Use `local`, `bounded cross-cutting`, `broad`, or `unknown` only as descriptive labels. Do not call reasoning scope “measured” without comparable tasks and a calibrated instrument.

## Output Formats

### Fast Review

```markdown
## Scope and transformation
- Responsibility:
- Before -> after:
- Successor/task:
- Evidence inspected:

## Findings
- [status] Lens — observed evidence; consequence.

## Unknowns and observer limits
- Missing evidence or competing explanation.

## Minimal next steps
1. Recommendation and validation.
```

Keep findings prioritized. Do not force every lens into the report.

If implementation was not requested, end with a concise decision prompt such as:

> Would you like me to implement the first recommendation or run the full review?

### Full Review

```markdown
# Semantic Continuity Review

## 1. Scope, transformation, and evidence condition
## 2. Responsibility path
## 3. Direct observations
## 4. Continuity matrix
## 5. Failure and recovery behavior
## 6. Unknowns, observer limits, and alternative explanations
## 7. Architectural trajectory and tradeoffs
## 8. Prioritized incremental recommendations
## 9. Validation plan and disconfirming evidence
```

The continuity matrix uses statuses, evidence citations, and consequences. No aggregate score.

## Execution Boundary

- Review-only request: do not edit; wait for explicit implementation approval.
- Explicit implementation request: edits are authorized within the requested scope.
- Question or opinion: analyze options and wait for a decision.
- Missing critical evidence: request it or return a bounded `unknown`; never hallucinate materialized behavior.
