import { Clock, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const schedule = [
  { day: 'Segunda', hours: '06h — 21h', highlight: false },
  { day: 'Terça', hours: '06h — 21h', highlight: false },
  { day: 'Quarta', hours: '06h — 21h', highlight: false },
  { day: 'Quinta', hours: '06h — 21h', highlight: false },
  { day: 'Sexta', hours: '06h — 21h', highlight: false },
  { day: 'Sábado', hours: '09h — 12h', highlight: false },
  { day: 'Domingo', hours: 'Fechado', highlight: false },
];

export function Schedule() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="horarios"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-orange-500">
              Horários
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
            Funcionamento <span className="gradient-text">semanal</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Main card - Segunda a Sexta */}
          <div className="glow-card relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30">
                  <Calendar className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white uppercase">Segunda à Sexta</h3>
                  <p className="font-heading text-xs uppercase tracking-wider text-zinc-500">Horário estendido</p>
                </div>
              </div>

              <div className="flex items-end gap-2 mb-2">
                <span className="font-display text-6xl text-orange-500 neon-text">06h</span>
                <span className="font-display text-3xl text-zinc-600 pb-2">—</span>
                <span className="font-display text-6xl text-orange-500 neon-text">21h</span>
              </div>
              <p className="font-heading text-sm text-zinc-400 mt-3">
                Janela completa para o seu treino, do amanhecer à noite.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Seg', 'Ter', 'Qua', 'Qui', 'Sex'].map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-heading uppercase tracking-wide text-zinc-400"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sábado card */}
          <div className="glow-card relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white uppercase">Sábado</h3>
                  <p className="font-heading text-xs uppercase tracking-wider text-zinc-500">Manhã de treino</p>
                </div>
              </div>

              <div className="flex items-end gap-2 mb-2">
                <span className="font-display text-6xl text-orange-500 neon-text">09h</span>
                <span className="font-display text-3xl text-zinc-600 pb-2">—</span>
                <span className="font-display text-6xl text-orange-500 neon-text">12h</span>
              </div>
              <p className="font-heading text-sm text-zinc-400 mt-3">
                Comece o fim de semana no ritmo certo.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-xs font-heading uppercase tracking-wide text-orange-400">
                  Sábado
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-800 text-xs font-heading uppercase tracking-wide text-zinc-600">
                  Domingo: Fechado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full week table */}
        <div className="mt-8 glow-card relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-black/80 p-6 sm:p-8 overflow-hidden border border-zinc-800">
          <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-zinc-500 mb-5">
            Quadro Completo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between rounded-lg bg-zinc-900/60 border border-zinc-800 px-4 py-3 transition-all hover:border-orange-500/30"
              >
                <span className="font-heading text-sm uppercase tracking-wide text-zinc-300">
                  {item.day}
                </span>
                <span
                  className={`font-display text-sm ${
                    item.hours === 'Fechado' ? 'text-zinc-600' : 'text-orange-500'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
