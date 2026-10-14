import { Dumbbell, UserCog, TrendingUp, Clock, Users, Award } from 'lucide-react';
import { useReveal, useSpotlight } from '@/hooks/useReveal';

const features = [
  {
    icon: Dumbbell,
    title: 'Musculação Completa',
    description:
      'Equipamentos modernos e variedade de aparelhos para treinar cada grupo muscular com eficiência máxima.',
    span: 'lg:col-span-2 lg:row-span-2',
    image: 'https://images.pexels.com/photos/6389886/pexels-photo-6389886.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: UserCog,
    title: 'Direção Técnica Pro',
    description:
      'Acompanhamento de @laertepresotto_personal — planejamento, execução e evolução com método.',
    span: 'lg:col-span-1',
    image: 'https://images.pexels.com/photos/4854256/pexels-photo-4854256.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Reais',
    description:
      'Ambiente motivador focado em performance e progresso mensurável a cada ciclo de treino.',
    span: 'lg:col-span-1',
  },
  {
    icon: Clock,
    title: 'Horário Estendido',
    description:
      'Segunda a sábado, com janela de 06h às 21h para você treinar no seu ritmo e na sua agenda.',
    span: 'lg:col-span-1',
  },
  {
    icon: Users,
    title: 'Comunidade Iron',
    description:
      'Faça parte de um grupo que leva a sério. Energia, disciplina e parceria em cada treino.',
    span: 'lg:col-span-1',
  },
  {
    icon: Award,
    title: 'Excellence Seal',
    description:
      'Compromisso com qualidade, segurança e atendimento de excelência em Borborema e região.',
    span: 'lg:col-span-2',
  },
];

export function Structure() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const spotlightRef = useSpotlight();

  return (
    <section
      id="estrutura"
      className="relative py-20 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Section header */}
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-orange-500" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-orange-500">
            Nossa Estrutura
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight max-w-3xl">
          Diferenciais que <span className="gradient-text">elevam</span> seu treino
        </h2>
      </div>

      {/* Bento Grid */}
      <div
        ref={spotlightRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glow-card spotlight group relative rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 flex flex-col justify-between overflow-hidden ${feature.span}`}
                style={{ transitionDelay: `${i * 50}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                {/* Background image for featured cards */}
                {feature.image && (
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/30 mb-4 group-hover:bg-orange-500/20 transition-all duration-300">
                    <FeatureIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-heading text-sm text-zinc-400 leading-relaxed font-light max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/10 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
