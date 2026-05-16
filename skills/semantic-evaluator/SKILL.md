---
name: semantic-evaluator
description: Evaluates code, pull requests, and architectural proposals against Semantic Continuity and Progressive Materialization principles.
---

# Semantic Evaluator Protocol

This skill enforces the principles of The Material Web. Use this skill whenever you are asked to review a codebase, evaluate an architectural proposal, or design a new feature within this repository.

When invoked, evaluate the target code or architecture across the 4 Core Vectors of The Material Web.

## The Rubric

For each vector, critically analyze the code and assign a score from 1 (Anti-pattern) to 5 (Ideal Implementation).

### 1. System Legibility
Can you infer state and behavior purely from reading the materialized DOM/HTML?
* **Score 1:** Heavy use of obfuscated CSS classes, hidden JS memory state, and opaque identifiers.
* **Score 5:** Explicit use of semantic `data-*` attributes, standard `aria-*` markers, and human-readable HTML structures.

### 2. Behavioral Locality
Is the logic co-located with the structure it affects?
* **Score 1:** Global orchestrators (e.g., Redux) managing highly localized component states; top-down heavy re-rendering.
* **Score 5:** The component directly handles its own localized events (e.g., via event delegation) and state modifications on itself.

### 3. Semantic Recoverability
If the JavaScript fails, the network drops, or a build step processes the code, does the core intent survive?
* **Score 1:** Empty `<div>` shells that require massive JS payloads to render anything meaningful. 
* **Score 5:** A baseline functional state (like standard links, tables, or forms) that is progressively enhanced to a richer experience. Graceful degradation is built-in.

### 4. Low Entropy
Is the implementation relying on stable, native primitives or deep, fragile dependencies?
* **Score 1:** Pulling in multiple nested third-party dependencies for simple tasks (e.g., standard UI components).
* **Score 5:** Using stable browser APIs (native `<dialog>`, Web Components, standard HTML5) resulting in a shallow dependency tree.

## Required Output Format

You must output a Markdown Scorecard. Do not skip any section.

### Scorecard
| Vector | Score (1-5) | Justification |
|--------|-------------|---------------|
| System Legibility | [Score] | [1-sentence explanation] |
| Behavioral Locality | [Score] | [1-sentence explanation] |
| Semantic Recoverability | [Score] | [1-sentence explanation] |
| Low Entropy | [Score] | [1-sentence explanation] |

### Required Refactoring
Provide a prioritized, bulleted list of exact changes required to push any score below a 5 up to a 5. Be specific about attributes, tags, and architectural adjustments.
