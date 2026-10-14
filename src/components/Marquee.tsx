const marqueeItems = [
  'FORJA',
  'FOCO',
  'DISCIPLINA',
  'FORÇA',
  'EVOLUÇÃO',
  'INTENSIDADE',
  'RESULTADO',
  'SUPERAÇÃO',
];

export function Marquee() {
  return (
    <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-4 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="font-display text-xl sm:text-2xl uppercase tracking-wider text-black/80 mx-6 flex items-center gap-6"
          >
            {item}
            <span className="text-black/40 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
