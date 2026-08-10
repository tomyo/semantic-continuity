# Pattern 01: Behavioral Locality

**Intent:** Keep behavior near the boundary that owns it so a named change requires less accidental context.

**Status:** Conditional engineering pattern, not a universal architecture rule.

## Context

Use this pattern when:

- one component or module owns the relevant state and behavior;
- callers can interact through a visible contract;
- moving behavior closer does not duplicate a shared invariant;
- the materialized or runtime boundary can expose meaningful state.

Do not apply it mechanically when correctness depends on centralized authorization, transactionality, scheduling, observability, or another genuinely cross-cutting responsibility.

## Problem

A local feature can require tracing opaque events through global state, registries, dispatchers, and root coordinators. This expands reasoning scope and hides the relationship between a trigger and its effect.

The failure is not “global state exists.” It is that the non-local path is accidental, weakly typed, or undiscoverable from the local boundary.

## High-Risk Example: Opaque Global Modal Routing

```javascript
// store.js
const modalState = {
  isOpen: false,
  modalType: null,
  modalData: null,
};

// UserProfile.jsx
function UserProfile({ userId }) {
  return (
    <button onClick={() => dispatch(openModal("DELETE_USER", { id: userId }))}>
      Delete User
    </button>
  );
}

// App.jsx
function GlobalModalRoot() {
  const { isOpen, modalType, modalData } = useSelector((state) => state.modal);
  if (!isOpen) return null;

  switch (modalType) {
    case "DELETE_USER":
      return <DeleteUserModal userId={modalData.id} />;
    default:
      return null;
  }
}
```

### Continuity Risks

- The trigger does not expose which rendered structure it controls.
- The string event carries weaker semantics than an explicit contract.
- The state, rendering, and initiating context are separated by multiple transformations.
- A maintainer must discover the store and root coordinator before predicting behavior.
- An unknown modal type silently becomes no output in this example.

A global coordinator may still be justified—for example, to enforce one focus stack or render into a top-level portal. If so, preserve an explicit typed request contract, ownership boundary, and visible failure behavior rather than merely moving everything local.

## Local Alternative

```html
<section class="user-profile" data-user-id="42">
  <button type="button" aria-controls="delete-dialog-42">
    Delete user
  </button>

  <dialog id="delete-dialog-42">
    <form method="dialog">
      <h2>Delete user?</h2>
      <p>This action cannot be undone.</p>
      <button value="cancel">Cancel</button>
      <button value="confirm">Yes, delete</button>
    </form>
  </dialog>
</section>
```

```javascript
export function enhanceUserProfile(profile, { deleteUser }) {
  const trigger = profile.querySelector('[aria-controls="delete-dialog-42"]');
  const dialog = profile.querySelector("dialog");

  if (!trigger || !dialog) {
    throw new Error("User profile delete controls are incomplete");
  }

  trigger.addEventListener("click", () => dialog.showModal());

  dialog.addEventListener("close", async () => {
    if (dialog.returnValue === "confirm") {
      await deleteUser(profile.dataset.userId);
    }
  });
}
```

### What This Preserves

- The trigger-to-dialog relationship is visible through `aria-controls`.
- Dialog state uses a platform contract that tools and users can inspect.
- Missing required structure fails explicitly.
- Deletion remains an injected domain responsibility rather than being hidden in DOM code.
- A maintainer can understand the interaction locally while following one explicit dependency for the destructive operation.

## Important Limits

The local example is not complete production deletion behavior. It still needs decisions about:

- authorization and server-side enforcement;
- request failure and retry UI;
- duplicate submissions;
- stale user identity;
- focus and accessibility testing;
- whether multiple dialogs require shared coordination.

These are legitimate reasons for the reasoning scope to cross the component boundary. The pattern asks that each crossing correspond to an explicit responsibility.

## Review Checklist

- Which boundary owns the behavior?
- Which context is local, and which cross-cutting context is justified?
- Can a maintainer discover dependencies from the local surface?
- Are state and transitions inspectable?
- Are errors explicit rather than converted to absence?
- Does colocation duplicate policy or create inconsistent implementations?
- Can the component be corrected without changing unrelated consumers?

## Result

Behavioral locality improves semantic continuity when it removes accidental traversal while preserving explicit links to real shared responsibilities. It becomes localism when it hides, duplicates, or weakens those responsibilities.
