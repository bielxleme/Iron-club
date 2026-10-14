export function GlowButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const baseClasses = 'glow-border inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm transition-all duration-300 rounded-xl';

  if (variant === 'primary') {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} text-white ${className}`}
        style={{ ['--angle' as string]: '0deg' }}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} border border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-orange-500/50 transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
}
