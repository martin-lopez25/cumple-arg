import { useState } from 'react';
import OpeningCrawl from '@/components/OpeningCrawl';
import InvitationCard from '@/components/InvitationCard';
import type { InvitationData } from '@/types/invitation';

const defaultData: InvitationData = {
  episode: 'Episodio XXXIX',
  title: 'LA FIESTA DESPIERTA',
  crawlParagraphs: [
    'Hace mucho tiempo, en una galaxia muy, muy lejana...',
    'La Alianza Rebelde ha detectado una senal de celebracion. Las estrellas se alinean para honrar a un heroe de la galaxia que cumple un nuevo ano de vida.',
    'Todas las naves estan convocadas. La fuerza estara con ustedes, siempre. Nos vemos en la base.',
  ],
  birthdayPerson: 'Armando Skywalker',
  age: '39',
  date: 'Jueves 30 de julio',
  time: '2:30',
  location: 'Roof',
  message:
    'Que la fuerza te acompañe en este nuevo ciclo. Te esperamos para celebrar entre las estrellas!',
};

function App() {
  const [phase, setPhase] = useState<'crawl' | 'card'>('crawl');
  const [data] = useState<InvitationData>(defaultData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {phase === 'crawl' ? (
        <OpeningCrawl
          episode={data.episode}
          title={data.title}
          paragraphs={data.crawlParagraphs.filter((p) => p.trim().length > 0)}
          onComplete={() => setPhase('card')}
        />
      ) : (
        <InvitationCard data={data} />
      )}
    </div>
  );
}

export default App;
