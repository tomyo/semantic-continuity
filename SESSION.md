# Session Memory: Web Progressive Materialization (WPM)

## Project Overview
**Web Progressive Materialization (WPM)** is a build-optional architecture for the native web, optimized for humans, LLMs, browsers, and search engines. It acts as a mental model and a set of web-native primitives rather than a framework.

**Tagline:** *Toward a simpler, saner, more joyful web.*

## Core Philosophy & Key Decisions
1. **HTML is the Primary Artifact:** The source of truth for a component is its `.html` file, not a JS runtime object or a templating string.
2. **Build-Optional:** The website must work *before* the build step. Build steps are optimizations (concatenation, minification, SSR), not mandatory compilers.
3. **Strict Symmetry:** Components are organized into self-contained directories with matching file names (e.g., `site-header.html`, `site-header.css`, `site-header.js`).
4. **Component Categories:**
   * **Structural:** Pure HTML. No JS required (e.g., `<article-preview>`). Expresses domain and intent.
   * **Enhanced:** HTML-first + optional behavior. JS is an enhancement layer (e.g., `<site-header>`).
   * **Autonomous:** Runtime-owned UI for heavy client interaction.
5. **Semantic Parts (Structural Rendering Targets):** We use the `part="..."` attribute instead of opaque CSS classes or template DSL variables.
   * **CSS:** Styled via `[part="..."]` (Light DOM) or `::part(...)` (Shadow DOM).
   * **JS/DOM:** Targeted via `querySelector('[part="..."]')`.
   * **Renderers:** Inject content into these explicit, standard semantic boundaries.

## Current State
* Initialized the repository folder: `web-progressive-materialization`.
* Created the foundational manifesto in `README.md`.
* Created an example symmetric structure (`example/components/site-header`, `example/components/site-footer`) using `part` attributes.
* Created an entry point (`example/index.html`) demonstrating native browser materialization without a build step.

## Next Steps / Open Threads
* **Tooling & Scaffolding:** Create a template system to kickstart new projects dependency-free.
* **Rendering Engine:** Implement the minimal rendering function (client-side or build-step) that maps data to `part` attributes without string interpolation.
* **Formalize SSR / Build Step:** Show how a simple script can read the `.html` artifacts and construct the final output for production.
