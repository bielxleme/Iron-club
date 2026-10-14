import { MapPin, Phone, MessageCircle, Instagram, Navigation } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { GlowButton } from './GlowButton';

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="contato"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-orange-500">
              Localização & Contato
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
            Venha treinar <span className="gradient-text">conosco</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="glow-card relative rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                    Endereço
                  </h3>
                  <p className="font-heading text-base text-white leading-relaxed">
                    R. Gabriel Maria da Veiga, 225
                  </p>
                  <p className="font-heading text-base text-zinc-400">
                    Jardim Alvorada, Borborema — SP
                  </p>
                  <p className="font-heading text-sm text-zinc-500 mt-1">CEP: 14955-108</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-orange-500/20 via-zinc-800 to-transparent" />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href="tel:+5516997259432"
                    className="font-heading text-lg text-white hover:text-orange-500 transition-colors"
                  >
                    (16) 99725-9432
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-orange-500/20 via-zinc-800 to-transparent" />

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex-shrink-0">
                  <Instagram className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                    Instagram Oficial
                  </h3>
                  <a
                    href="https://www.instagram.com/academia_ironclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-base text-white hover:text-orange-500 transition-colors"
                  >
                    @academia_ironclub
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <GlowButton
                  href="https://wa.me/5516997259432"
                  variant="primary"
                  className="flex-1"
                >
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  WhatsApp
                </GlowButton>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Gabriel+Maria+da+Veiga,+225,+Jardim+Alvorada,+Borborema+-+SP,+14955-108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-zinc-300 hover:text-white hover:border-orange-500/40 transition-all duration-300 flex-1"
                >
                  <Navigation className="w-4 h-4" />
                  Traçar Rota
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glow-card relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full">
            <iframe
              title="Localização Academia Iron Club"
              src="https://www.google.com/maps?q=R.+Gabriel+Maria+da+Veiga,+225,+Jardim+Alvorada,+Borborema+-+SP,+14955-108&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.1)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay accent */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-lg bg-black/80 backdrop-blur-sm border border-orange-500/30 px-4 py-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="font-heading text-xs uppercase tracking-wider text-white">
                  Iron Club · Borborema
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
