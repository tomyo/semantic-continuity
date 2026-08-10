# Software After the Cost Collapse of Creation

Software development is entering a new phase.

For decades, producing and modifying code was expensive. Many architectural practices therefore optimized for production: reuse, abstraction, automation, encapsulation, and scalability of generation.

AI changes that cost structure. Systems can now generate components, migrations, interfaces, tests, and entire application layers in minutes.

**Understanding has not become equally cheap.**

Long-lived systems still accumulate:

- behavior whose causes are distributed across layers;
- contracts visible only through tribal knowledge;
- generated artifacts that obscure their source;
- tests that encode decisions without explaining their scope;
- errors and uncertainty flattened into apparently settled state;
- handoffs that preserve conclusions while losing why they were conditional;
- changes that work locally but silently alter distant responsibilities.

The bottleneck is increasingly the ability to reconstruct enough of a system to act safely.

AI did not create this problem. It made the imbalance visible. Generation can now increase complexity faster than humans and agents can inspect, interpret, and stabilize it.

## A Different Optimization Target

Good architecture cannot be reduced to producing capability quickly. It must also preserve the conditions under which future participants can:

- identify the responsibility at stake;
- inspect what the system actually does;
- distinguish evidence from interpretation and authority;
- recover relevant uncertainty and failure behavior;
- predict the consequences of a change;
- correct prior decisions without reconstructing hidden history.

This is the motivation for **semantic continuity**.

Semantic continuity does not mean keeping every representation unchanged or storing every historical detail. It concerns whether what matters for a future task remains recoverable across a transformation or discontinuity.

Examples include:

- source code transformed into a deployed service;
- a local module connected to a system-wide policy;
- a decision handed from one contributor or agent to another;
- a migration replacing one representation with another;
- a partially failed system attempting recovery;
- a project resuming after its original context is gone.

The relevant meaning is not only the happy-path behavior. It may include provenance, uncertainty, error semantics, authority, invariants, and the reason a boundary exists.

## Legibility Under Conditions

A system is not legible in the abstract. It is legible enough **for a particular successor, task, and evidence condition**.

A local file may be sufficient for changing copy but insufficient for changing authorization policy. A generated page may reveal user-visible behavior while hiding the decision that produced it. A test may preserve a contract while erasing whether that contract is still authorized.

This means there is no universal preference for local over global, source over output, or native primitive over abstraction. These are engineering strategies whose value depends on the responsibility being preserved.

Commonly useful strategies include:

- explicit and inspectable contracts;
- shallow, justified transformations;
- traceable generated artifacts;
- visible errors and uncertainty;
- graceful degradation;
- behavior located near its owning boundary;
- centralized enforcement for genuinely cross-cutting invariants;
- minimal persistent state introduced only when a discontinuity requires it.

The project investigates how these strategies affect safe evolution after creation becomes cheap. Its aim is not nostalgia for simpler software or rejection of frameworks. It is to keep accelerated creation from outrunning the ability to understand, contest, and correct what has been built.
