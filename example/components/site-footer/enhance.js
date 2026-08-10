/**
 * Enhancement: site-footer
 * Category: Enhanced Component
 * Uses Stateless DOM Transformers (Event Delegation)
 */

export function enhanceSiteFooter(element) {
  const backToTopBtn = element.querySelector('[part="back-to-top"]');
  if (backToTopBtn) {
    backToTopBtn.removeAttribute('hidden');
  }

  // Stateless event delegation
  element.addEventListener('click', (event) => {
    const target = event.target.closest('[part="back-to-top"]');
    if (!target) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

}
