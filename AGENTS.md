# Repository Constitution & AI Guidelines

You are maintaining a project designed around **Semantic Continuity**, **Progressive Materialization**, and long-term **Legibility** for both humans and AI systems.

The goal of this repository is not maximal abstraction or framework-centric architecture. We are building a "post-framework" architecture for **The Material Web**.

## The Conceptual Stack (Vocabulary)

Use these concepts when reasoning about code changes:
- **Semantic Continuity**: Meaning must not be lost between source, structure, and execution.
- **Progressive Materialization**: Systems gain capabilities without invalidating their underlying HTML structure.
- **System Legibility**: Code must remain inspectable and explicit. 
- **Behavioral Locality**: Behavior emerges locally from the DOM structure it affects. Avoid global orchestration.
- **Semantic Recoverability**: Tooling/transformations must preserve intent and degrade gracefully.
- **Low Entropy**: Avoid hidden indirection, irreversible compilation, and abstraction drift.

## Core Constitutional Prompt (The Philosophy)

Prioritize:
- semantic HTML, explicit structure, and local reasoning (Behavioral Locality),
- progressive enhancement and reversible transformations (Semantic Recoverability),
- stable browser-native primitives and inspectable runtime behavior (System Legibility),
- low coupling and incremental complexity (Low Entropy).

The rendered HTML is not considered a disposable artifact. It is a canonical semantic surface shared by users, browsers, developers, accessibility tooling, search engines, and AI systems.

Prefer architectures where:
- meaning remains visible in the final materialized output,
- dependencies are explicit and state is close to the DOM it affects,
- enhancement layers can fail gracefully.

Avoid:
- unnecessary abstraction layers, hidden runtime magic, and excessive indirection,
- framework-specific lock-in and opaque generated structures,
- transformations that destroy semantic recoverability.

Complexity is allowed when justified, but complexity must preserve Legibility and Recoverability.

## Code Generation Heuristics (The Operations)

- Prefer plain modern JavaScript over frameworks.
- Prefer ES modules and browser-native APIs.
- Keep HTML meaningful without JavaScript.
- Avoid implicit global state; heavily prefer Behavioral Locality.
- Prefer idempotent enhancement patterns.
- Avoid tightly coupling rendering and behavior.
- Minimize irreversible build transformations.

Before introducing complexity, evaluate:
- Does this preserve Semantic Continuity?
- Does this improve Behavioral Locality?
- Does this remain inspectable (Legible) after build/transformation?
- Can this degrade gracefully (Semantic Recoverability)?
- Can an AI or human infer intent from the output artifact?

## PR Review & Refactoring Prompt

Review changes according to the conceptual stack.

Evaluate: semantic clarity, locality of behavior, accessibility, inspectability, recoverability after transformation, dependency weight, and alignment with browser-native behavior.

Identify: hidden complexity, unnecessary abstractions, hydration-like patterns, non-local coupling, semantic erosion, and areas where meaning becomes harder to recover.

Refactor code toward lower semantic entropy, improved locality, clearer HTML structure, and stronger progressive materialization. Favor incremental simplification over architectural rewrites.
