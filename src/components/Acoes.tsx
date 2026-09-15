'use client';

import { Phone } from 'lucide-react';
import { site, whatsappUrl } from '@/config/site.config';
import { trackWhatsAppClick } from '@/lib/analytics';

/**
 * Botões de contato. Todos com altura mínima de 48px (min-h-12) para atender
 * ao alvo de toque de 44pt exigido em mobile.
 */

const BASE =
  'inline-flex min-h-12 items-center justify-center gap-2.5 px-7 text-[13px] brand-caps transition-all duration-200 ease-smooth cursor-pointer';

/** Glifo oficial do WhatsApp (lucide-react não tem ícones de marca). */
function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** CTA principal. Dourado sobre escuro (6.1:1) e sobre bege — funciona nos dois. */
export function BotaoWhatsApp({ className }: { className?: string }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('botao_principal')}
      className={`${BASE} bg-platinum text-ink hover:bg-platinumDeep hover:text-bone active:scale-[0.98] ${className ?? ''}`}
    >
      <IconeWhatsApp className="h-4 w-4" />
      Falar no WhatsApp
    </a>
  );
}

/** Botão secundário. `tom` adapta a borda e o texto ao fundo da seção. */
export function BotaoTelefone({
  className,
  tom = 'escuro',
}: {
  className?: string;
  tom?: 'claro' | 'escuro';
}) {
  const cores =
    tom === 'claro'
      ? 'border-sandLine text-cocoa hover:border-platinumDeep hover:bg-sandDeep'
      : 'border-line text-bone hover:border-platinum hover:bg-elevated';
  return (
    <a
      href={`tel:${site.telefoneLink}`}
      className={`${BASE} border ${cores} active:scale-[0.98] ${className ?? ''}`}
    >
      <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      {site.telefone}
    </a>
  );
}

/**
 * Botão flutuante de WhatsApp, fixo no canto inferior direito.
 * Só em telas md+ — no mobile o contato já fica na barra fixa abaixo.
 */
export function BotaoWhatsAppFlutuante() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackWhatsAppClick('botao_flutuante')}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 ease-smooth hover:bg-[#20BD5A] hover:scale-105 active:scale-95 md:flex"
    >
      <IconeWhatsApp className="h-6 w-6" />
    </a>
  );
}

/**
 * Barra fixa de contato no rodapé, só em mobile.
 * O padding-bottom do body reserva o espaço para ela não cobrir conteúdo.
 */
export function BarraContatoMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur-sm md:hidden">
      <div
        className="flex gap-2 p-3"
        // Respeita a área do gesto de home nos iPhones.
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('barra_mobile')}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 bg-platinum text-[12px] brand-caps text-ink active:scale-[0.98]"
        >
          <IconeWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`tel:${site.telefoneLink}`}
          aria-label={`Ligar para ${site.telefone}`}
          className="grid min-h-12 w-14 place-items-center border border-line text-bone active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
