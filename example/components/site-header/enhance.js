/**
 * Enhancement: site-header
 * Category: Enhanced Component
 * Uses Semantic Parts for DOM querying and Event Delegation.
 */

export function enhanceSiteHeader(element) {
  const toggleBtn = element.querySelector('[part="mobile-menu-toggle"]');
  if (toggleBtn) {
    toggleBtn.removeAttribute('hidden');
  }

  // Stateless DOM Transformer: Event delegation on the root element
  element.addEventListener('click', (event) => {
    const toggleTarget = event.target.closest('[part="mobile-menu-toggle"]');
    if (!toggleTarget) return;

    // Use HTML state as the single source of truth
    const isExpanded = toggleTarget.getAttribute('aria-expanded') === 'true';
    toggleTarget.setAttribute('aria-expanded', !isExpanded);
    
    // CSS should ideally handle the layout shifts based on aria-expanded,
    // but here we toggle the state natively.
  });

}
