# Pattern 01: Behavioral Locality

**Goal:** Shrink the *Reasoning Scope* by keeping behavior, state, and structure structurally colocated.

## The Concept

**Behavioral Locality** is the principle that the behavior of a system should emerge locally from the structure it affects, rather than being managed by a distant, global orchestrator. 

When behavior is local, the **Reasoning Scope** is small: a developer or AI agent only needs to read a single file or a localized block of code to understand, debug, or modify a feature. When behavior is non-local, the reasoning scope expands to encompass the entire system, concentrating dependency and accelerating systemic entropy.

To demonstrate this, let's look at a universally understood feature: **A Modal Dialog**.

---

## ❌ High-Entropy Architecture: The Global Orchestrator

In modern application development, a common pattern is to abstract UI state into a global orchestrator. This optimizes for "developer velocity" (you can trigger a modal from anywhere) but destroys legibility.

### The Code

```javascript
// 1. The Global Store (store.js)
// State is lifted out of the DOM into a parallel, hidden runtime object.
const modalState = { 
    isOpen: false, 
    modalType: null, 
    modalData: null 
};

// 2. The Trigger (UserProfile.jsx)
// A button dispatches an opaque event. The structural result is invisible here.
function UserProfile({ userId }) {
    return (
        <button onClick={() => dispatch(openModal('DELETE_USER', { id: userId }))}>
            Delete User
        </button>
    );
}

// 3. The Orchestrator (App.jsx - Root of the App)
// A heavy switch-statement that listens to global state to render the actual structure.
function GlobalModalRoot() {
    const { isOpen, modalType, modalData } = useSelector(state => state.modal);
    
    if (!isOpen) return null;
    
    switch (modalType) {
        case 'DELETE_USER':
            return <DeleteUserModal userId={modalData.id} />;
        // ... 50 other modal types
    }
}
```

### Why this fails the Legibility Hypothesis:
* **Expanded Reasoning Scope (Spooky Action at a Distance):** If an AI or junior developer wants to change what happens when "Delete User" is clicked, they cannot just look at `UserProfile.jsx`. They must track the string `'DELETE_USER'` through the `dispatch`, into the global `store`, up to the `GlobalModalRoot`, and finally into `DeleteUserModal`. 
* **Semantic Erasure:** The `UserProfile` component has no semantic relationship with its modal. Looking at the materialized output, the button and the modal will be rendered in completely different parts of the DOM.
* **Concentrated Dependency:** You cannot safely test or modify `UserProfile` without also mocking or importing the global modal orchestrator. 

---

## ✅ Legible Architecture: Semantic Continuity & Colocation

If we optimize for **System Legibility**, we use Progressive Materialization. We keep the trigger and the resulting structure colocated, using platform-native semantic boundaries.

### The Code

```html
<!-- UserProfile.html (or equivalent component file) -->
<!-- The materialized structure IS the source of truth -->

<div class="user-profile" data-user-id="42">
    <!-- 1. The Trigger -->
    <!-- Semantically linked directly to the structure it controls -->
    <button aria-controls="delete-modal-42" class="modal-trigger">
        Delete User
    </button>

    <!-- 2. The Structure -->
    <!-- Native platform primitive, colocated with its trigger -->
    <dialog id="delete-modal-42" class="local-modal">
        <form method="dialog">
            <h2>Delete User?</h2>
            <p>This action cannot be undone.</p>
            <button value="cancel">Cancel</button>
            <button value="confirm" class="danger">Yes, Delete</button>
        </form>
    </dialog>
</div>
```

```javascript
// UserProfile.js
// Behavior emerges locally from the structure it affects.
const profile = document.querySelector('.user-profile[data-user-id="42"]');
const trigger = profile.querySelector('.modal-trigger');
const dialog = profile.querySelector('dialog');

// Localized state: The DOM naturally handles open/close states.
trigger.addEventListener('click', () => dialog.showModal());

dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
        // Execute local deletion logic
        fetch(`/api/users/42`, { method: 'DELETE' });
    }
});
```

### Why this succeeds:
* **Shrunk Reasoning Scope:** If an AI or human needs to modify the delete flow, **100% of the context exists in one place**. You do not need to understand the rest of the application to change this feature.
* **Distributed Agency:** This component can be copy-pasted, moved, or deleted safely without breaking a global orchestrator. Anyone can modify it safely.
* **Platform Alignment:** By using `<dialog>` and `<form method="dialog">`, the state (`isOpen`) is handled natively by the browser. There is no parallel, hidden JavaScript state tree to maintain.
* **Progressive Materialization:** Even before the JavaScript loads, the structure of the modal is present and semantic in the DOM, ready to be inspected or progressively enhanced.

---

## The Shift

| Dimension | Illegible Architecture | Legible Architecture |
|---|---|---|
| **State Location** | Lifted into a global, hidden runtime orchestrator. | Colocated natively on the target structure (`<dialog>`). |
| **Reasoning Scope** | Global (must understand dispatch, store, and root). | Local (everything is adjacent). |
| **AI Modification Risk**| High. The AI might break the global orchestrator. | Low. Changes are completely isolated. |
| **Materialized Output** | Disconnected. Trigger and Modal are far apart in DOM. | Continuous. Trigger and Modal are grouped meaningfully. |