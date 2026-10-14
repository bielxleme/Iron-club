import { Check, Flame, Dumbbell, Monitor, Star, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const plans = [
  {
    icon: Dumbbell,
    name: 'Plano Presencial',
    tagline: 'Treino na unidade Iron Club',
    description: 'Acesso completo à estrutura, equipamentos e acompanhamento presencial.',
    features: [
      'Acesso total à academia',
      'Musculação sem restrição de horário',
      'Acompanhamento de equipe',
      'Avaliação física inicial',
      'Ambiente motivador',
    ],
    ctaLabel: 'Garantir Matrícula',
    ctaHref: 'https://wa.me/5516997259432?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Plano%20Presencial%20da%20Academia%20Iron%20Club.',
    featured: false,
  },
  {
    icon: Star,
    name: 'Programa Personal',
    tagline: '@laertepresotto_personal',
    description: 'Direção técnica exclusiva com planejamento individualizado e foco em resultado.',
    features: [
      'Plano de treino individualizado',
      'Acompanhamento direto do personal',
      'Periodização e evolução mensurável',
      'Suporte e ajustes contínuos',
      'Foco total no seu objetivo',
    ],
    ctaLabel: 'Falar com o Personal',
    ctaHref: 'https://wa.me/5516997259432?text=Ol%C3%A1%20Laerte!%20Quero%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.',
    featured: true,
  },
  {
    icon: Monitor,
    name: 'Treino Online',
    tagline: 'Programas digitais oficiais',
    description: 'Treine de onde estiver com os programas de treinamento oficiais da Iron Club.',
    features: [
      'Programas de treino digitais',
      'Acesso remoto e flexível',
      'Conteúdo oficial Iron Club',
      'Plataforma de checkout segura',
      'Comece imediatamente',
    ],
    ctaLabel: 'Ver Programas Online',
    ctaHref: 'https://wa.me/5516997259432?text=Ol%C3%A1!%20Quero%20conhecer%20os%20programas%20de%20treino%20online%20da%20Iron%20Club.',
    featured: false,
  },
];

export function Plans() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="planos"
      className="relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-orange-500">
              Planos & Programas
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight max-w-3xl mx-auto">
            Escolha seu <span className="gradient-text">caminho</span> de evolução
          </h2>
          <p className="font-heading text-lg text-zinc-400 mt-4 max-w-2xl mx-auto font-light">
            Modalidades presencial e online, com a direção técnica que faz a diferença.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`glow-card relative rounded-2xl p-8 overflow-hidden transition-all duration-500 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-orange-600/15 via-zinc-900 to-zinc-950 border-2 border-orange-500/40 md:scale-105'
                    : 'bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {plan.featured && (
                  <>
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-bl-xl">
                      <span className="font-heading text-[10px] uppercase tracking-widest text-white font-bold">
                        Destaque
                      </span>
                    </div>
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/20 blur-3xl rounded-full" />
                  </>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${
                      plan.featured
                        ? 'bg-orange-500/20 border border-orange-500/40'
                        : 'bg-zinc-800/80 border border-zinc-700'
                    }`}
                  >
                    <PlanIcon
                      className={`w-7 h-7 ${plan.featured ? 'text-orange-500' : 'text-zinc-400'}`}
                    />
                  </div>

                  {/* Name & tagline */}
                  <h3 className="font-display text-2xl text-white uppercase mb-1">{plan.name}</h3>
                  <p className="font-heading text-xs uppercase tracking-wider text-orange-500/80 mb-4">
                    {plan.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-heading text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            plan.featured ? 'text-orange-500' : 'text-zinc-500'
                          }`}
                        />
                        <span className="font-heading text-sm text-zinc-300 font-light">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:shadow-[0_0_30px_rgba(255,59,0,0.5)]'
                        : 'bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-orange-500/40 hover:text-white'
                    }`}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3">
            <Flame className="w-4 h-4 text-orange-500" />
            <p className="font-heading text-sm text-zinc-400">
              Links oficiais de checkout e inscrição disponíveis via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
