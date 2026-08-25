import { BarraContatoMobile, BotaoWhatsAppFlutuante } from '@/components/Acoes';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import {
  Avaliacoes,
  Galeria,
  Oficio,
  Processo,
  Reparos,
  Servicos,
} from '@/components/Secoes';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Oficio />
        <Servicos />
        <Reparos />
        <Galeria />
        <Processo />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      {/* Espaço reservado para a barra fixa não cobrir o rodapé no mobile. */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <BarraContatoMobile />
      <BotaoWhatsAppFlutuante />
    </>
  );
}
