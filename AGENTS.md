# Repository Guidance for Coding Agents

This repository develops **Semantic Continuity** as an evidence-bound engineering practice for legible systems.

The goal is not maximal abstraction, minimal line count, or automatic preference for locality. The goal is to keep the responsibilities and distinctions that matter reconstructable, auditable, usable, and corrigible across transformations and handoffs.

## Working Definition

A continuity claim is always relative to:

1. a **responsibility or distinction at stake**;
2. a **transformation or discontinuity**;
3. a **successor or observer**;
4. a **task the successor must perform**;
5. the **evidence and context available**.

Do not claim that “meaning was preserved” without naming these conditions.

## Operational Commitments

Prioritize:

- direct inspection before architectural interpretation;
- explicit contracts, provenance, state transitions, and failure behavior;
- preserved uncertainty and visible errors;
- separation among observation, interpretation, decision, and authorization;
- reasoning scope proportional to the responsibility being changed;
- minimal changes that address demonstrated pressure;
- outputs that remain inspectable and traceable to their sources when practical.

Continuity is not sameness. Representations may change substantially while responsibilities remain recoverable. Conversely, identical files may preserve a mistaken framing or stale authority.

## Conditional Strategies

Treat the following as strategies to evaluate, not rules to enforce:

- **Behavioral locality:** useful when behavior belongs to one structural boundary; insufficient when a cross-cutting invariant legitimately spans boundaries.
- **Progressive materialization:** useful when a coherent baseline can exist before enhancement; not a universal requirement for every system.
- **Platform alignment:** useful when native primitives express the needed contract; not a reason to reject justified domain abstractions.
- **Materialized-output inspection:** required when output or runtime behavior is relevant, but no single surface is automatically canonical.
- **Reversibility:** desirable where feasible; otherwise require provenance, migration paths, and explicit loss boundaries.

## Before Changing Code or Theory

1. State the requested transformation.
2. Identify the responsibility, contract, or distinction that could be lost.
3. Inspect relevant source, consumers, tests, generated output, runtime behavior, and failure paths.
4. Record important unknowns and observer limitations.
5. Prefer the smallest change supported by the observed problem.

For exploratory architectural work, use semantic search to build a conceptual map before exact symbol search.

## Review Questions

- What changed, and across which boundary?
- Which behavior or responsibility must a successor recover?
- What direct evidence supports the interpretation?
- Which uncertainty, error, or alternative explanation might be erased?
- Did authority silently move from an explicit contract to a tool, convention, generated artifact, or global coordinator?
- How much context is actually required for this task, and why?
- What happens when enhancement, compilation, a dependency, or recovery step fails?
- Can the change be corrected without reconstructing hidden history?

## Failure Modes

Watch for:

- **Semantic erasure:** errors, provenance, uncertainty, or distinctions are discarded.
- **Premature closure:** an unresolved design question becomes an implementation assumption.
- **Authority collapse:** generated output, workflow labels, tests, or conventions silently become truth or permission.
- **Observer blindness:** conclusions are drawn without the output, consumer, runtime, or information needed to observe the behavior.
- **Unconstrained indirection:** the context needed for a local change grows without a demonstrated cross-cutting responsibility.
- **Unearned persistence:** new registries, schemas, state, or protocols are introduced before a recurring discontinuity requires them.
- **Empty-shell dependence:** the basic responsibility exists only after a large runtime successfully reconstructs it.
- **Localism:** colocating behavior hides or duplicates a real system-wide invariant.

## Change Reporting

Separate:

- **Observed:** directly inspected facts.
- **Interpreted:** the best current explanation.
- **Unknown:** missing evidence or unresolved alternatives.
- **Recommended:** the smallest justified next change.

Do not use numeric certainty or architectural scorecards unless a calibrated rubric and comparable baseline exist.
