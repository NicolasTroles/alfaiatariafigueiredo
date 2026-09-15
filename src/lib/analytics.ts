declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Dispara o evento GA4 `whatsapp_click`, identificando de onde veio o clique. */
export function trackWhatsAppClick(origem: string) {
  window.gtag?.('event', 'whatsapp_click', {
    event_category: 'contato',
    event_label: origem,
  });
}
