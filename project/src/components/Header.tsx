import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Dumbbell } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-orange-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 blur-lg group-hover:bg-orange-500/50 transition-all duration-300" />
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
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm uppercase tracking-wide text-zinc-400 hover:text-orange-500 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5516997259432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,59,0,0.5)] hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-base uppercase tracking-wide text-zinc-300 hover:text-orange-500 py-3 border-b border-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5516997259432"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white"
            >
              <MessageCircle className="w-4 h-4" />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
