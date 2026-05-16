# Repository Constitution & AI Guidelines

You are maintaining a project designed around **Semantic Continuity**, **Legible Systems**, and **Progressive Materialization** for both humans and AI systems.

The goal of this repository is not maximal abstraction or framework-centric architecture. We are building systems capable of continuous evolution without semantic collapse, with **The Material Web** acting as our primary proving ground.

## The Conceptual Stack (Vocabulary)

Use these concepts when reasoning about code changes:
- **Semantic Continuity**: Meaning must not be lost between source, structure, interaction, and execution.
- **Legible Systems**: Code must remain inspectable, locally inferable, and structurally understandable.
- **Progressive Materialization**: Systems gain capabilities without invalidating their underlying coherence.
- **Behavioral Locality**: Behavior emerges locally from the structure it affects. Avoid global orchestration.
- **Semantic Recoverability**: Tooling/transformations must preserve intent and degrade gracefully.
- **Systemic Entropy**: Avoid hidden indirection, irreversible compilation, and abstraction drift.

## Core Constitutional Prompt (The Philosophy)

Prioritize:
- structural legibility, explicit semantics, and local reasoning (Behavioral Locality),
- progressive enhancement and reversible transformations (Semantic Recoverability),
- stable platform-native primitives and inspectable runtime behavior (Legible Systems),
- low coupling and incremental complexity (Systemic Entropy).

The materialized output (whether HTML DOM, public API, or expanded macro) is not considered a disposable artifact. It is a canonical semantic surface shared by users, execution environments, other systems, and AI.

Prefer architectures where:
- meaning remains visible in the final materialized output,
- dependencies are explicit and state is close to the structure it affects,
- enhancement layers can fail gracefully.

Avoid:
- unnecessary abstraction layers, hidden runtime magic, and excessive indirection,
- framework-specific lock-in and opaque generated structures,
- transformations that destroy semantic recoverability.

Complexity is allowed when justified, but complexity must preserve Legibility and Recoverability.

## Code Generation Heuristics (The Operations)

- Prefer stable platform/language capabilities over heavy third-party abstractions.
- Keep structural boundaries meaningful before logic is applied.
- Avoid implicit global state; heavily prefer Behavioral Locality.
- Prefer idempotent enhancement patterns.
- Avoid tightly coupling rendering/logic to hidden parallel state trees.
- Minimize irreversible build transformations.

Before introducing complexity, evaluate:
- Does this preserve Semantic Continuity?
- Does this improve Behavioral Locality?
- Does this remain inspectable (Legible) after build/transformation?
- Can this degrade gracefully (Semantic Recoverability)?
- Can an AI or human infer intent directly from the materialized artifact?

## PR Review & Refactoring Prompt

Review changes according to the conceptual stack.

Evaluate: semantic clarity, locality of behavior, structural inspectability, recoverability after transformation, dependency weight, and alignment with platform-native behavior.

Identify: hidden complexity, unnecessary abstractions, empty shell patterns, non-local coupling, semantic erosion, and areas where meaning becomes harder to recover.

Refactor code toward lower systemic entropy, improved locality, clearer structure, and stronger progressive materialization. Favor incremental simplification over architectural rewrites.
