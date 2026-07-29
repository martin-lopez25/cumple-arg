import { useMemo } from 'react';

type StarfieldProps = {
  density?: number;
  withDrift?: boolean;
};

type Star = {
  top: string;
  left: string;
  size: number;
  dur: string;
  delay: string;
};

type DriftStar = {
  dx: string;
  dy: string;
  delay: string;
};

function Starfield({ density = 120, withDrift = false }: StarfieldProps) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: density }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.2 + 0.6,
      dur: `${Math.random() * 4 + 2.5}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, [density]);

  const driftStars = useMemo<DriftStar[]>(() => {
    if (!withDrift) return [];

    return Array.from({ length: 28 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 600 + 200;

      return {
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist}px`,
        delay: `${Math.random() * 6}s`,
      };
    });
  }, [withDrift]);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={`s-${i}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ['--dur' as string]: s.dur,
            ['--delay' as string]: s.delay,
          }}
        />
      ))}

      {driftStars.map((d, i) => (
        <span
          key={`d-${i}`}
          className="star-drift"
          style={{
            ['--dx' as string]: d.dx,
            ['--dy' as string]: d.dy,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
