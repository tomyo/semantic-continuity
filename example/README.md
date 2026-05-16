# Web Progressive Materialization - Example

This directory contains a minimal, build-less demonstration of the core WPM principles.

## 1. HTML First & Materialized Documents
The `index.html` file represents a **materialized document**. It is fully valid, portable, and meaningful HTML. It requires no JavaScript framework to render, meaning it is functional immediately upon load and accessible to all search engines and LLMs.

## 2. Stateless DOM Transformers (Event Delegation)
Take a look at `components/site-header/enhance.js`. Instead of binding specific event listeners to specific elements, it attaches a single listener using event delegation. 

It also does not maintain an internal `isExpanded` variable. Instead, the UI state is pushed strictly to the DOM (`aria-expanded="..."`). The CSS (`site-header.css`) relies entirely on this HTML state to drive layout changes using modern selectors like `:has()`.

## 3. Explicit Composition Boundaries (Slots)
In `index.html`, notice how `<article-preview>` uses a `<slot name="body">`. Composition and nesting should happen through explicit structural insertion points (Slots), rather than arbitrary strings or opaque JavaScript children hierarchies.

## 4. URL & Resource Semantics
In `index.html` and `about.html`, resources are referenced via relative paths (e.g., `<link href="./components/... " />` and `import { ... } from "./components/..."`). 

- **During Authoring:** Components refer to their dependencies using file-system relative paths (preserving provenance and locality).
- **During Materialization:** The materializer normalizes these URLs against the final document (preventing the need for global `<base>` overrides or broken fragmented paths). 
- **In this example:** `index.html` already acts as the finalized document, demonstrating coherent, standardized URL semantics.

## 5. Script Naming Conventions
To keep intent clear across component types, we enforce the following naming convention:

- **`[component-name]/enhance.js` (Enhanced Components):** These scripts export a function designed to run against pre-materialized HTML. They provide event delegation and state changes without registering a custom element lifecycle. (See: `site-header` and `site-footer`).
- **`[component-name]/[component-name].js` (Autonomous Components):** When a script perfectly matches the component name, it signifies the definition of a formal Custom Element (`customElements.define`). These components own their internal runtime UI. (See: `live-chat`).
