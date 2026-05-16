/**
 * Autonomous Component: live-chat
 * 
 * Naming Convention Rule: 
 * Because this file is named exactly after its directory (`live-chat/live-chat.js`), 
 * it signals that it defines a formal Web Component (Custom Element).
 * 
 * If it were an enhancement script for pre-materialized HTML, 
 * it would be named `enhance.js` or `behavior.js`.
 */

export class LiveChat extends HTMLElement {
  connectedCallback() {
    // Render runtime-owned UI (Autonomous Component)
    // We only render if it hasn't been pre-materialized
    if (!this.querySelector('[part="chat-window"]')) {
      this.innerHTML = `
        <button part="toggle-btn" aria-expanded="false">Chat with us</button>
        <div part="chat-window" hidden>
          <div part="messages">
            <p><strong>Agent:</strong> Hello! How can I help you?</p>
          </div>
          <input type="text" part="input" placeholder="Type a message..." />
        </div>
      `;
    }

    // Stateless event delegation
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const toggleBtn = event.target.closest('[part="toggle-btn"]');
    if (!toggleBtn) return;

    // Use HTML State as the source of truth
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    
    const chatWindow = this.querySelector('[part="chat-window"]');
    if (chatWindow) {
      if (isExpanded) {
        chatWindow.setAttribute('hidden', '');
      } else {
        chatWindow.removeAttribute('hidden');
      }
    }
  }
}

// Formally register the component
customElements.define('live-chat', LiveChat);
