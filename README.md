# Semantic Continuity for Legible Systems

> A research-informed engineering practice for keeping software understandable, auditable, and safely evolvable across transformations and handoffs.

## Why This Exists

Software generation is becoming cheap. Reconstructing what a system means, why it behaves as it does, and how to change it safely remains expensive.

This project studies **semantic continuity**: whether the responsibilities and distinctions that matter remain recoverable and corrigible when software crosses transformations such as:

- source -> build output -> runtime behavior;
- request -> implementation -> public contract;
- one module, team, tool, or agent -> another;
- working system -> partial failure -> recovery;
- current version -> future modification.

Continuity does not require representations to remain identical. A successful transformation may reorganize or replace them. The question is whether an appropriately situated successor can still recover what matters, inspect its grounding and uncertainty, use it correctly, and revise it without hidden authority or unbounded context.

## Start Here

1. [Software After the Cost Collapse of Creation](./philosophy/software-after-the-cost-collapse.md) — the economic motivation.
2. [The Legibility Hypothesis](./philosophy/the-legibility-hypothesis.md) — the revised theory and its limits.
3. [Heuristics and Architectural Examples](./philosophy/heuristics-and-examples.md) — an operational engineering workflow.
4. [Semantic Evaluator](./skills/semantic-evaluator/SKILL.md) — an evidence-bound review skill for coding agents.

## Core Commitments

- **Transformation-specific review:** Name the before/after transformation and the responsibility at stake.
- **Evidence before interpretation:** Inspect source, consumers, tests, generated artifacts, runtime behavior, and failure modes as applicable.
- **Uncertainty continuity:** Preserve ambiguity, errors, and unsupported assumptions instead of forcing confident closure.
- **Authority continuity:** Keep observations, interpretations, decisions, and action permissions distinguishable.
- **Bounded reasoning:** Reduce unnecessary context while preserving legitimate cross-cutting invariants.
- **Corrigibility:** A continuity-preserving system must permit later correction; permanence alone is not continuity.

## Engineering Strategies, Not Universal Laws

Behavioral locality, explicit contracts, inspectable outputs, platform-native primitives, progressive enhancement, and reversible transformations often improve continuity. They are conditional strategies, not an ontology or a universal architecture.

For example, local behavior can reduce reasoning scope, but security policy, transactions, and shared invariants may require deliberate centralization. A materialized output can be a crucial evidence surface without being the only or canonical account of intent. Every recommendation must be justified against the actual responsibility and failure boundary.

## Epistemic Status

This revision incorporates accumulated Continuity Lab knowledge while preserving its boundaries:

- structured uncertainty can change successor behavior;
- lossy settled summaries can induce premature implementation posture;
- observations can degrade toward ambiguity rather than confident inversion when uncertainty remains first-class;
- observer information and rubric boundaries can change classifications;
- an output difference does not, by itself, identify the mechanism that produced it;
- persistence and abstraction should be earned by recurring discontinuities and pressure.

These findings motivate review discipline. They do not prove a universal continuity metric, a canonical representation, or an Epistemic Machine architecture.

## Repository Map

| Path | Responsibility |
| --- | --- |
| `/philosophy` | Theory, hypotheses, status boundaries, and engineering heuristics |
| `/skills` | Portable agent review practices |
| `/patterns` | Conditional architectural patterns and counterexamples |
| `/example` | A web-specific progressive-enhancement example, not the general theory |
| `/analysis`, `/case-studies`, `/experiments` | Reserved for future evidence and bounded investigations |

The directory labels organize the repository. They are not claims about a cognitive or software ontology.
