'use client';

import { Briefcase, Scissors, Shield, Shirt, Star, Stethoscope } from 'lucide-react';
import { googleAvaliacoes, processo, reparos, servicos, site } from '@/config/site.config';
import { useParallax } from '@/lib/useParallax';
import { SectionDivider, SuitSilhouette } from './Brand';
import { Foto } from './Foto';
import { Reveal } from './Reveal';

const ICONES = {
  suit: Shirt,
  briefcase: Briefcase,
  shirt: Shirt,
  scissors: Scissors,
  shield: Shield,
  stethoscope: Stethoscope,
} as const;

/**
 * Cabeçalho padrão de seção.
 * `tom` troca as cores de texto conforme a seção seja clara ou escura —
 * a página alterna entre as duas famílias de fundo.
 */
function TituloSecao({
  etiqueta,
  titulo,
  descricao,
  centro = false,
  tom = 'claro',
}: {
  etiqueta: string;
  titulo: string;
  descricao?: string;
  centro?: boolean;
  tom?: 'claro' | 'escuro';
}) {
  const claro = tom === 'claro';
  return (
    <div className={centro ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`brand-caps text-[10px] ${claro ? 'text-platinumDeep' : 'text-platinum'}`}>
        {etiqueta}
      </p>
      <h2
        className={`mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.08] ${
          claro ? 'text-cocoa' : 'text-bone'
        }`}
      >
        {titulo}
      </h2>
      {descricao && (
        <p
          className={`mt-6 max-w-prose text-[17px] leading-relaxed ${
            claro ? 'text-cocoaSoft' : 'text-silver'
          } ${centro ? 'mx-auto' : ''}`}
        >
          {descricao}
        </p>
      )}
    </div>
  );
}

/** Seção 2 — CLARA. A história do ofício, com fotos da Figueiredo trabalhando. */
export function Oficio() {
  const marca = useParallax<HTMLDivElement>(0.12);

  return (
    <section id="oficio" className="relative overflow-hidden bg-sand py-28 text-cocoa sm:py-36">
      {/* Marca d'água da silhueta da fachada, movendo devagar ao fundo. */}
      <div
        ref={marca.ref}
        className="pointer-events-none absolute -right-24 top-0 hidden opacity-[0.06] will-change-transform lg:block"
        style={{ transform: `translate3d(0, ${marca.offset}px, 0)` }}
        aria-hidden="true"
      >
        <SuitSilhouette className="h-[42rem] w-auto text-cocoa" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <TituloSecao
              etiqueta="O ofício"
              titulo="Cada peça começa numa conversa."
              descricao="Alfaiataria não é medir e entregar. É entender como você se move, onde vai usar a peça e o que ela precisa dizer por você. Só depois vêm a fita métrica, o giz e a tesoura."
            />
            <div className="mt-10 space-y-6 border-l-2 border-platinum/50 pl-7">
              <p className="max-w-prose leading-relaxed text-cocoaSoft">
                Em Pineville, {site.nome} mantém o ofício de alfaiataria do jeito que ele foi
                ensinado: medida tirada à mão, corte exclusivo e provas até o caimento ficar exato.
              </p>
              <p className="max-w-prose leading-relaxed text-cocoaSoft">
                É um trabalho lento por escolha. O resultado é uma peça que acompanha você por anos,
                em vez de uma que serve mais ou menos por uma temporada.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* Lado a lado, ambas em 2:3. Fotos importadas do site da
                Figueiredo — servem de exemplo até termos fotos próprias. */}
            <div className="grid grid-cols-2 gap-4">
              <Foto
                // FOTO 2 — tirada de medidas
                src="/fotos/oficio-1.png"
                guia="Equipe da Figueiredo tirando medidas de um cliente."
                alt="Alfaiate da Figueiredo tirando medidas de um cliente com fita métrica, no ateliê"
                aspect="alto"
                tom="claro"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="mt-10"
              />
              <Foto
                // FOTO 3 — interior da loja
                src="/fotos/oficio-2.jpg"
                guia="Interior da loja: corredor com peças penduradas e provador ao fundo."
                alt="Interior da Alfaiataria Figueiredo, corredor com roupas penduradas e provador ao fundo"
                aspect="alto"
                tom="claro"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Seção 3 — CLARA. Serviços. */
export function Servicos() {
  return (
    <section id="servicos" className="border-t border-sandLine bg-sand py-28 text-cocoa sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <TituloSecao etiqueta="Serviços" titulo="O que sai da alfaiataria." centro />
        </Reveal>

        <div className="mt-16 grid gap-px border border-sandLine bg-sandLine sm:grid-cols-2">
          {servicos.map((servico, i) => {
            const Icone = ICONES[servico.icone];
            return (
              <Reveal key={servico.titulo} delay={i * 80}>
                <article className="group h-full bg-sand p-9 transition-colors duration-300 hover:bg-sandDeep sm:p-11">
                  <Icone
                    className="h-6 w-6 text-platinumDeep"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 font-display text-2xl text-cocoa">{servico.titulo}</h3>
                  <p className="mt-4 max-w-prose leading-relaxed text-cocoaSoft">
                    {servico.descricao}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Seção 4 — CLARA. Especialidade: reparo e ajuste (fardas, jalecos, ternos). */
export function Reparos() {
  return (
    <section id="reparos" className="border-t border-sandLine bg-sand py-28 text-cocoa sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            {/* Foto à esquerda aqui — em Oficio ela vai à direita. Alterna o
                ritmo entre as seções claras da página. */}
            <Foto
              // FOTO 10 — mesa de reparo
              src="/fotos/reparos.jpg"
              guia="Foto ilustrativa do reparo: uma farda militar, de bombeiro ou um jaleco sobre a mesa de trabalho, com agulha, linha e tesoura ao lado. Pode ser um close das mãos costurando a peça — o foco é mostrar reparo, não confecção."
              alt="Farda sobre a mesa de trabalho da alfaiataria, em processo de reparo"
              aspect="alto"
              tom="claro"
              sizes="(max-width: 1024px) 64vw, 40vw"
              className="max-w-[80%] rounded-2xl shadow-[0_28px_56px_-20px_rgba(18,16,14,0.4)]"
            />
          </Reveal>

          <Reveal delay={120}>
            <TituloSecao
              etiqueta="Reparo e ajuste"
              titulo="Não precisa ser novo. Precisa vestir certo."
              descricao="Farda militar, farda de bombeiro, jaleco hospitalar ou terno do dia a dia: o reparo é feito aqui, com a mesma atenção de uma peça sob medida."
            />

            <div className="mt-10 space-y-7">
              {reparos.map((item) => {
                const Icone = ICONES[item.icone];
                return (
                  <div key={item.titulo} className="flex gap-5">
                    <Icone
                      className="mt-1 h-5 w-5 shrink-0 text-platinumDeep"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-lg text-cocoa">{item.titulo}</h3>
                      <p className="mt-1.5 max-w-prose leading-relaxed text-cocoaSoft">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 max-w-prose text-sm italic leading-relaxed text-cocoaSoft/80">
              Não confeccionamos essas peças — cuidamos para que continuem vestindo bem.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Seção 5 — ESCURA. Galeria: o fundo escuro faz as fotos saltarem. */
export function Galeria() {
  return (
    <section id="galeria" className="bg-ink py-28 text-bone sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <TituloSecao
            etiqueta="Trabalhos"
            titulo="Peças que saíram daqui."
            descricao="Uma seleção do que já foi feito aqui: uniformes de equipe, blazers sob medida e o ateliê no dia a dia."
            tom="escuro"
          />
        </Reveal>

        {/* Grade assimétrica: mais interessante que uma grade uniforme.
            2 linhas só (mesma altura de antes) — destaque vertical + 4 quadros. */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <Foto
              // FOTO 4 — destaque
              src="/fotos/galeria/galeria-3.jpeg"
              guia="DESTAQUE vertical: peça completa, corpo inteiro, em pé. A melhor foto que você tiver."
              alt="Alfaiate da Figueiredo tirando medidas de um cliente já vestindo o terno, no ateliê"
              aspect="alto"
              className="h-full"
            />
          </Reveal>
          <Reveal delay={80}>
            <Foto
              // FOTO 5
              src="/fotos/galeria/galeria-5.jpg"
              guia="Detalhe de blazer ou jaqueta."
              alt="Blazer social sob medida em tecido listrado, na Alfaiataria Figueiredo"
              aspect="quadrado"
            />
          </Reveal>
          <Reveal delay={160}>
            <Foto
              // FOTO 6
              src="/fotos/galeria/galeria-6.jpg"
              guia="Detalhe de blazer feminino."
              alt="Blazer feminino sob medida em verde-oliva, na Alfaiataria Figueiredo"
              aspect="quadrado"
            />
          </Reveal>
          <Reveal delay={240}>
            <Foto
              // FOTO 7
              src="/fotos/galeria/galeria-1.jpg"
              guia="Uniforme em uso, ou o ateliê no dia a dia."
              alt="Jaqueta de uniforme personalizada para a Pontual Calhas, no corredor da Alfaiataria Figueiredo"
              aspect="paisagem"
            />
          </Reveal>
          <Reveal delay={320}>
            <Foto
              // FOTO 8
              src="/fotos/galeria/galeria-4.jpg"
              guia="Detalhe de moletom ou uniforme de equipe."
              alt="Moletom personalizado bordado para a equipe Vida e Saúde, feito pela Alfaiataria Figueiredo"
              aspect="paisagem"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Seção 6 — faixa de foto ESCURA, depois processo CLARO. */
export function Processo() {
  const faixa = useParallax<HTMLDivElement>(0.22);

  return (
    <section id="processo">
      {/* Faixa de foto em parallax: transição entre o escuro e o claro. */}
      <div className="relative h-[45vh] overflow-hidden bg-ink sm:h-[60vh]">
        <div
          ref={faixa.ref}
          className="absolute inset-0 scale-125 will-change-transform"
          style={{ transform: `translate3d(0, ${faixa.offset}px, 0) scale(1.25)` }}
        >
          <Foto
            // FOTO 9 — faixa parallax
            src="/fotos/faixa-loja.png"
            guia="Foto larga e atmosférica: interior da alfaiataria, arara de ternos, ou a mesa de corte. Serve de respiro entre seções."
            alt="Interior da Alfaiataria Figueiredo, corredor com roupas penduradas"
            aspect="paisagem"
            sizes="100vw"
            className="!aspect-auto h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
      </div>

      <div className="bg-sand text-cocoa">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <Reveal>
            <TituloSecao
              etiqueta="Processo"
              titulo="Do tecido à entrega."
              descricao="Quatro etapas, sem pressa em nenhuma delas. Um trabalho artesanal, conduzido com a eficiência e a excelência de quem tem anos de experiência no ofício."
              centro
            />
          </Reveal>

          <ol className="mt-16 grid gap-px border border-sandLine bg-sandLine md:grid-cols-2 lg:grid-cols-4">
            {processo.map((etapa, i) => (
              <Reveal key={etapa.numero} delay={i * 80}>
                <li className="h-full bg-sand p-9">
                  <span className="font-display text-5xl text-platinum/60" aria-hidden="true">
                    {etapa.numero}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-cocoa">{etapa.titulo}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-cocoaSoft">
                    {etapa.descricao}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Seção 7 — CLARA. Avaliações do Google. */
export function Avaliacoes() {
  const nota = googleAvaliacoes.nota.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
  });

  return (
    <section className="border-t border-sandLine bg-sand py-28 text-cocoa sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <TituloSecao
            etiqueta="Clientes"
            titulo={`Nota ${nota} no Google.`}
            descricao={`${googleAvaliacoes.total} avaliações de quem já vestiu Alfaiataria Figueiredo.`}
            centro
          />
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-8">
            <div className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-platinum text-platinum" strokeWidth={1.5} />
              ))}
            </div>
            <a
              href={googleAvaliacoes.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-caps inline-flex min-h-12 items-center justify-center gap-2.5 border border-sandLine px-7 text-[13px] text-cocoa transition-all duration-200 ease-smooth hover:border-platinumDeep hover:bg-sandDeep active:scale-[0.98]"
            >
              Ver avaliações no Google
            </a>
          </div>
        </Reveal>

        <Reveal>
          <SectionDivider className="mt-20" tom="claro" />
        </Reveal>
      </div>
    </section>
  );
}
