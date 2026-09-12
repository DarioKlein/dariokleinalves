import { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
}

export function MatrixBackground() {
  const particles = useMemo(() => {
    const list: Particle[] = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        left: `${(i * 4.2 + (i % 3) * 2) % 100}%`,
        top: `${(i * 7.5) % 100}%`,
        delay: `${(i * 0.45) % 8}s`,
        duration: `${12 + ((i * 3) % 10)}s`,
        size: `${i % 3 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2.5}px`,
      });
    }
    return list;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-60 z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="digital-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-(--brand-color)/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
