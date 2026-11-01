import type { Metadata } from 'next';

/**
 * Aviso temporário de suspensão. A home original (Header, Hero, Oficio,
 * Servicos, Reparos, Galeria, Processo, Avaliacoes, Contato, Footer,
 * BarraContatoMobile, BotaoWhatsAppFlutuante) continua intacta em
 * src/components — para restaurar o site, basta reverter este arquivo.
 *
 * noindex evita que os buscadores troquem o resultado indexado por este
 * aviso enquanto o site estiver fora do ar.
 */
export const metadata: Metadata = {
  title: 'Site temporariamente suspenso',
  description: 'Este site encontra-se temporariamente suspenso.',
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <main
      id="content"
      className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-neutral-800"
    >
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
          Site temporariamente suspenso
        </h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          Este site está fora do ar em razão de pendência financeira referente ao contrato de
          desenvolvimento e manutenção firmado com o prestador do serviço.
        </p>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          O acesso será restabelecido assim que a situação for regularizada.
        </p>
      </div>
    </main>
  );
}
