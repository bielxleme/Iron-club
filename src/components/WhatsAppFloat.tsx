import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5516997259432"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(255,59,0,0.4)] transition-all duration-500 hover:scale-105 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
