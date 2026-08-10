# The Legibility Hypothesis

> Software remains safely evolvable when the responsibilities and distinctions that matter can be reconstructed, inspected, used, and corrected across the transformations the system actually undergoes.

Status: working theory informed by bounded Continuity Lab evidence; not a universal law or a complete metric.

## 1. The Problem Is Transformation

Software meaning is repeatedly transformed:

```text
intent -> source -> generated artifact -> runtime behavior -> observed outcome
current contributor -> handoff artifact -> successor action
version N -> migration -> version N+1
normal operation -> partial failure -> recovery
```

A continuity failure occurs when a responsibility or distinction needed after one of these boundaries can no longer be reliably recovered, is recovered with unjustified confidence, or survives only as unchallengeable convention.

A change can preserve syntax while breaking continuity. It can also replace every internal representation while preserving the relevant responsibility and improving corrigibility.

Therefore:

> Semantic continuity is not sameness. It is supported reconstructability and corrigibility across a named transformation.

## 2. A Continuity Claim Needs Conditions

“Meaning survived” is too vague to evaluate. A useful claim identifies:

1. **Responsibility:** What behavior, invariant, distinction, or decision matters?
2. **Transformation:** What changed, and across which boundary?
3. **Successor:** Who or what must recover the meaning?
4. **Task:** What must the successor explain, predict, use, or modify?
5. **Evidence condition:** Which source, output, history, tests, traces, or runtime observations are available?

For example:

> Given the compiled API schema and migration record, a maintainer can recover which fields are nullable, why the change was made, and how old clients degrade.

This is inspectable. “The API preserves semantic continuity” is not.

## 3. Meaning Includes More Than Behavior

The relevant semantics may include:

- **responsibility:** what the component or system is accountable for;
- **behavioral contract:** observable inputs, outputs, side effects, and failure behavior;
- **distinctions:** boundaries such as unknown vs false, observation vs interpretation, or capability vs permission;
- **uncertainty:** what remains unresolved, conditional, or weakly grounded;
- **provenance:** where a claim, artifact, or transformation came from;
- **authority:** what is merely generated or observed versus what is approved or actionable;
- **inquiry posture:** when the correct next move is investigation rather than implementation.

A transformation that preserves the happy-path value while erasing its uncertainty or authority status may be semantically discontinuous.

## 4. The Dimensions of Continuity

These dimensions are review lenses, not independent laws or calibrated scores.

### Responsibility Continuity

Can the successor identify what this part of the system is responsible for and what lies outside its boundary?

### Behavioral Continuity

Do observable contracts and failure semantics remain compatible with the intended responsibility, or are changes explicit and traceable?

### Uncertainty Continuity

Do unknowns, ambiguity, errors, and competing interpretations remain visible, or are they collapsed into false certainty?

### Provenance Continuity

Can important outputs, state, and decisions be related to the sources and transformations that produced them?

### Authority Continuity

Can a successor distinguish evidence, interpretation, decision, and permission? A generated artifact or workflow label must not silently become truth or authorization.

### Reasoning-Scope Continuity

Is the context needed for the successor's task bounded and discoverable? The goal is not absolute locality; it is to avoid context that is accidental, hidden, or disproportionate.

### Failure and Recovery Continuity

When a layer fails, does the system preserve coherent behavior, inspectable state, explicit loss, or a usable recovery path?

### Corrigibility

Can a mistaken interpretation or obsolete decision be revised without breaking unrelated responsibilities or requiring inaccessible history?

## 5. Legibility Is Relational

Legibility is not an intrinsic scalar property of a repository. It depends on:

- the task being attempted;
- the successor's prior knowledge;
- which evidence is visible;
- the fidelity of the observer and rubric;
- the transformation under review.

A reviewer with source code but no generated output may miss runtime divergence. A reviewer with only output may recover behavior but not authority or rationale. Two observers can classify the same change differently when one sees causal traces and the other sees only before/after artifacts.

An honest evaluation therefore records its information condition and unknowns. It does not turn one observer's confidence into a property of the system.

## 6. Continuity-Preserving Strategies

The following strategies often help. None is automatically correct.

### Behavioral Locality

Place behavior near the boundary it affects when that boundary owns the responsibility. This can reduce navigation and hidden coupling.

Counterpressure: security policy, transactions, observability, and other shared invariants may require explicit central enforcement. Duplicating them locally can make the system less legible.

### Inspectable Materialized Surfaces

Inspect generated output, runtime state, public APIs, database schemas, logs, and other surfaces that consumers actually encounter.

Counterpressure: no output is automatically canonical. Materialized behavior may omit rationale, uncertainty, provenance, or authorization.

### Progressive Materialization

Provide a coherent baseline before optional enhancement when the domain permits it.

Counterpressure: some responsibilities are inherently transactional, synchronized, or runtime-dependent. The requirement is explicit failure semantics, not a ritual static shell.

### Explicit Contracts and Transformations

Use typed interfaces, schemas, migration records, source maps, semantic identifiers, and visible state transitions where they preserve a real boundary.

Counterpressure: adding a registry, schema, or protocol before a recurring discontinuity requires it creates persistent complexity without evidence.

### Platform Alignment

Prefer stable native primitives when they express the contract adequately.

Counterpressure: a well-justified domain abstraction may preserve meaning better than forcing a poor platform primitive.

## 7. Common Continuity Failures

### Semantic Erasure

Errors, uncertainty, provenance, distinctions, or unsupported alternatives disappear during transformation.

### Confident Inversion

The successor recovers a clear but reversed or unjustified interpretation instead of degrading toward ambiguity.

### Premature Closure

A provisional interpretation or design tension is compressed into a settled instruction, inducing implementation before investigation is complete.

### Authority Collapse

A test, generated file, workflow label, convention, or model output is treated as authorized truth without an explicit decision boundary.

### Observer Aliasing

The evidence surface or rubric cannot distinguish materially different underlying relationships, but the result is reported as if it can.

### Unconstrained Indirection

A local task requires traversing distant layers whose involvement is accidental rather than demanded by a shared responsibility.

### Unearned Persistence

State, registries, schemas, or protocols are made long-lived before a recurring process discontinuity demonstrates their necessity.

### Empty-Shell Dependence

A nominal artifact carries too little meaning or behavior to remain useful when its full runtime environment is unavailable.

### Localism

A system optimizes each component for local readability while duplicating or obscuring a real cross-cutting invariant.

## 8. What Current Evidence Supports

This revision draws from sources with different epistemic status:

- **Stabilized Continuity Lab authority:** C002-C004 on durable understanding and action boundaries; C019 on uncertainty preservation and conservative degradation; C021-C022 on structured handoff effects; C023 on the difference between workflow labels and architecture.
- **Stabilized Continuity Lab methodology:** M001-M003 on earned persistence, earned stabilization, and execution comparability, plus apparatus/experiment/theory separation and abstraction discipline.
- **Bounded non-authoritative evidence:** P-004/P-006 observer-condition reviews, the 2026-08-09 Successor Transfer C014 synthesis, and the Epistemic Machine origin/Lab crosswalk.

The last category constrains claims but is not presented here as stabilized doctrine.

Accumulated Continuity Lab work motivates several bounded commitments:

- Structured handoffs that preserve observations, hypotheses, and open questions can sustain investigative behavior better than settled summaries under tested conditions.
- Preserving uncertainty throughout extraction, representation, and policy can favor recoverable ambiguity over confident inversion in tested fixtures.
- Observer information conditions can change classifications; materialized artifacts alone may not preserve causal interpretation.
- A clean output difference does not identify its mechanism when content, format, authority cue, wording, and context differ together.
- Persistence and abstraction should be introduced in response to demonstrated discontinuities and recurring pressure, not because they complete an elegant architecture.

These results do **not** establish:

- a universal continuity metric;
- a unique canonical representation;
- observer-independent reconstruction;
- event sourcing, proposals, traces, or any other object as the continuity primitive;
- an Epistemic Machine architecture;
- that every project needs a durable epistemic layer.

## 9. Falsifiability and Evaluation

The hypothesis earns practical value only through bounded comparisons. For a proposed change:

1. Name the responsibility and transformation.
2. Define a successor task.
3. Record the evidence condition.
4. Observe whether the successor can recover the relevant contract, uncertainty, provenance, and authority.
5. Test failure and correction, not only happy-path explanation.
6. Compare against a plausible alternative or prior state.
7. Report what remains unknown and which result would weaken the interpretation.

“Reasoning scope” can be estimated by listing the files, services, concepts, and hidden knowledge actually required for the task. It should not be presented as a precise measurement without a stable task, comparable executions, and a calibrated instrument.

## 10. The Revised Hypothesis

The original intuition was that meaning should survive transformation. The stronger formulation is:

> Systems are more safely evolvable when relevant responsibilities, distinctions, uncertainty, provenance, and authority remain reconstructable and corrigible for situated successors across the transformations and failures the system actually experiences, with reasoning scope bounded by explicit responsibility rather than accidental coupling.

This is a direction for engineering and research. It is not permission to impose one architecture.
