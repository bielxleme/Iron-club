import { Dumbbell, Instagram, MessageCircle, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/30 blur-lg" />
                <Dumbbell className="relative w-7 h-7 text-orange-500" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl text-white tracking-wider">
                  IRON<span className="text-orange-500">CLUB</span>
                </span>
                <span className="text-[9px] font-heading uppercase tracking-[0.3em] text-zinc-500">
                  Borborema · SP
                </span>
              </div>
            </div>
            <p className="font-heading text-sm text-zinc-500 leading-relaxed font-light max-w-xs">
              Forje sua melhor versão. Musculação de alto nível, acompanhamento
              profissional e estrutura completa em Borborema.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-orange-500 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Estrutura', href: '#estrutura' },
                { label: 'Horários', href: '#horarios' },
                { label: 'Planos', href: '#planos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-heading text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.3em] text-orange-500 mb-5">
              Redes & Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/academia_ironclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-heading text-sm text-zinc-400 hover:text-orange-500 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-zinc-500 group-hover:text-orange-500" />
                @academia_ironclub
              </a>
              <a
                href="https://www.instagram.com/laertepresotto_personal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-heading text-sm text-zinc-400 hover:text-orange-500 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-zinc-500 group-hover:text-orange-500" />
                @laertepresotto_personal
              </a>
              <a
                href="https://wa.me/5516997259432"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-heading text-sm text-zinc-400 hover:text-orange-500 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-zinc-500 group-hover:text-orange-500" />
                (16) 99725-9432
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xs text-zinc-600 text-center sm:text-left">
            © {new Date().getFullYear()} Academia Iron Club · Borborema — SP.
            Todos os direitos reservados.
          </p>

          {/* Excellence seal */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2">
            <Award className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-heading text-[10px] uppercase tracking-widest text-zinc-500">
              Selo de Excelência Digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
