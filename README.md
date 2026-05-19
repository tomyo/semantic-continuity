# Semantic Continuity for Legible Systems

> A research direction and systems philosophy for building software that remains understandable, recoverable, and collaboratively evolvable after the cost collapse of creation.

## The Foundation

We are entering a new phase of software development where generation is cheap, but **understanding is expensive**. This repository explores what happens when we intentionally optimize systems to minimize the cost of comprehension rather than the cost of production.

- **Start Here:** Read the foundational essay, [Software After the Cost Collapse of Creation](./philosophy/software-after-the-cost-collapse.md)
- **The Theory:** Understand the core mechanism in [The Legibility Hypothesis](./philosophy/the-legibility-hypothesis.md)
- **The Application:** See how this shapes engineering decisions in [Heuristics & Architectural Examples](./philosophy/heuristics-and-examples.md)

---

## The Operational Repository

This repository serves as the operational hub for exploring, testing, and measuring Semantic Continuity in practice. While the philosophy applies universally (from organizational structures to AI-agent networks), **The Web** serves as a proving ground due to its native continuity-preserving properties.

### What's Inside

| Directory       | Purpose                                                                        |
| --------------- | ------------------------------------------------------------------------------ |
| `/philosophy`   | The core essays, theses, and conceptual frameworks.                            |
| `/patterns`     | Architectural patterns, examples, and the "Material Web" implementation guide. |
| `/analysis`     | Operational tooling, including the Pi AI `semantic-evaluator` skill.           |
| `/case-studies` | Concrete examples of continuity preserved vs. continuity collapsed.            |
| `/experiments`  | Exploratory prototypes and proof-of-concept implementations.                   |

---

## Semantic Tooling: Measuring Reasoning Scope

A philosophy is only useful if it is falsifiable. We do not evaluate architectures based on aesthetic preference; we measure **Reasoning Scope**: _How much context must an agent (human or AI) acquire to safely reason about a behavior or transformation?_

Instead of focusing on syntax or bundle size, our operational tooling evaluates structural health across dimensions like:

- **Behavioral Locality:** Does behavior stay near the structure it affects?
- **Semantic Recoverability:** Do generated artifacts preserve enough meaning to recover intent?
- **Progressive Materialization:** Does the system gain capability without losing coherence?

*To see this in action, explore the [Semantic Evaluator](./skills/semantic-evaluator/SKILL.md) skill located in the analysis tooling. (You can copy and paste the contents of this file into the custom instructions of Cursor, Copilot, or ChatGPT to instantly turn any AI into a Semantic Architecture Critic).*

---

_The goal is not to impose doctrine, but to develop practical approaches for building systems that remain understandable as they grow in capability and complexity._
