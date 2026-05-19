# Repository Constitution & AI Guidelines

You are maintaining a project designed around **Semantic Continuity** and **Legible Systems** after the cost collapse of creation.

The goal of this repository is not maximal abstraction or feature velocity. We are building systems capable of continuous evolution without semantic collapse. We optimize to minimize **Reasoning Scope**: *How much context must an agent (human or AI) acquire to safely reason about a behavior or transformation?*

## The Conceptual Stack (Vocabulary)

Use these concepts when reasoning about code changes:
- **Legible Systems (The Goal)**: Systems where meaning remains recoverable, structure inspectable, and behavior locally inferable.
- **Semantic Continuity (The Mechanism)**: Meaning must not be lost between source, structure, interaction, and execution.
- **Progressive Materialization**: Systems gain capabilities without invalidating their underlying coherence.
- **Behavioral Locality**: Behavior emerges locally from the structure it affects. Avoid global orchestration.
- **Semantic Recoverability**: Tooling/transformations must preserve intent and degrade gracefully.
- **Systemic Entropy**: The gradual loss of semantic clarity through indirection, irreversible compilation, and abstraction drift.

## Core Constitutional Prompt (The Philosophy)

Prioritize:
- structural legibility, explicit semantics, and local reasoning (Behavioral Locality),
- progressive enhancement and reversible transformations (Semantic Recoverability),
- stable platform-native primitives and inspectable runtime behavior (Legible Systems),
- shallow dependency graphs and minimal hidden transformations.

The materialized output (whether HTML DOM, public API, or expanded macro) is not considered a disposable artifact. It is a canonical semantic surface shared by users, execution environments, other systems, and AI.

Prefer architectures where:
- meaning remains visible in the final materialized output,
- dependencies are explicit and state is close to the structure it affects,
- enhancements degrade gracefully.

Avoid:
- Unconstrained Abstraction: introducing heavy indirection or bespoke DSLs purely for the sake of developer velocity.
- Spooky Action at a Distance: non-local coupling or implicit state changes.
- transformations that destroy semantic recoverability (Semantic Erasure).

Complexity is allowed when justified, but complexity must preserve Legibility.

## Code Generation Heuristics (The Operations)

- Prefer stable platform/language capabilities over heavy third-party abstractions.
- Keep structural boundaries meaningful before logic is applied.
- Avoid implicit global state; heavily prefer Behavioral Locality.
- Prefer idempotent enhancement patterns.
- Minimize irreversible build transformations.

Before introducing complexity, evaluate:
- **Reasoning Scope:** How much context do I need to safely modify this?
- Does this preserve Semantic Continuity?
- Does this improve Behavioral Locality?
- Does this remain inspectable (Legible) after build/transformation?
- Can an AI or human infer intent directly from the materialized artifact?

## PR Review & Refactoring Prompt

Review changes according to the conceptual stack.

Evaluate: reasoning scope, semantic clarity, locality of behavior, structural inspectability, recoverability after transformation, and alignment with platform-native behavior.

Identify: hidden complexity, unnecessary abstractions, empty shell patterns, non-local coupling, semantic erosion, and areas where meaning becomes harder to recover.

Refactor code toward lower systemic entropy, improved locality, clearer structure, and stronger progressive materialization. Favor incremental simplification over architectural rewrites.
