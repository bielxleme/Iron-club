import { Flame, MessageCircle, ChevronDown } from 'lucide-react';
import { GlowButton } from './GlowButton';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/896058/pexels-photo-896058.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Academia Iron Club"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg z-[1] opacity-60" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 diagonal-lines z-[1] opacity-50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <span className="font-heading text-xs uppercase tracking-widest text-orange-400">
              Borborema · SP
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95] mb-6">
            Forje sua<br />
            <span className="gradient-text neon-text">melhor versão</span><br />
            na Iron Club.
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-lg sm:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed font-light">
            Musculação de alto nível, acompanhamento profissional e a estrutura
            completa que você precisa para alcançar seus objetivos em Borborema.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <GlowButton href="#planos" variant="primary" className="pulse-glow">
              <Flame className="w-4 h-4 text-orange-500" />
              Garantir Minha Matrícula
            </GlowButton>
            <GlowButton
              href="https://wa.me/5516997259432"
              variant="secondary"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com o Personal
            </GlowButton>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {[
              { value: '06h—21h', label: 'Funcionamento' },
              { value: '100%', label: 'Foco em você' },
              { value: 'Pro', label: 'Direção técnica' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-display text-2xl sm:text-3xl text-orange-500 mb-1">
                  {stat.value}
                </div>
                <div className="font-heading text-xs uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-zinc-600 animate-bounce" />
      </div>
    </section>
  );
}
