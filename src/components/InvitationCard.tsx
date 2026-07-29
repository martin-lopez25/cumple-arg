import { useState } from 'react';
import { MapPin, Clock, Calendar, Star, Sparkles } from 'lucide-react';
import Starfield from '@/components/Starfield';
import { LOGO_SVG as STAR_WARS_LOGO } from '@/components/OpeningCrawl';
import type { InvitationData } from '@/types/invitation';
import envelopeImage from '@/assets/invitation-envelope.jpeg';

type InvitationCardProps = {
  data: InvitationData;
};

function InvitationCard({ data }: InvitationCardProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <Starfield density={140} withDrift />

      {!opened ? (
        <div className="fade-in relative z-10 flex flex-col items-center gap-8">
          <div className="mb-2 text-center">
            <p className="mb-3 text-xs tracking-[0.3em] text-yellow-300/70 font-sci-fi sm:text-sm">
              HACE MUCHO TIEMPO EN UNA GALAXIA MUY LEJANA...
            </p>
            <p className="floating-invite-text text-xs tracking-[0.28em] text-cyan-200/80 font-sci-fi sm:text-sm">
              UNA INVITACION TE HA SIDO ENVIADA
            </p>
            <div className="sw-logo-intro-match" dangerouslySetInnerHTML={{ __html: STAR_WARS_LOGO }} />
          </div>

          <div
            className="floating-envelope"
            onClick={() => setOpened(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpened(true);
              }
            }}
            aria-label="Abrir invitacion"
          >
            <img
              src={envelopeImage}
              alt="Sobre de invitacion"
              className="floating-envelope-image"
            />
          </div>

          <p className="text-xs tracking-widest text-white/45 font-sci-fi">
            TOCA EL SOBRE PARA ABRIR LA TRANSMISION
          </p>
        </div>
      ) : (
        <div className="fade-in relative z-10 flex w-full max-w-3xl flex-col items-center gap-8">
          <div className="text-center">
            <div className="sw-logo-intro-match sw-logo-intro-match-small" dangerouslySetInnerHTML={{ __html: STAR_WARS_LOGO }} />
            <p className="text-xs tracking-[0.3em] text-yellow-300/80 font-sci-fi sm:text-sm">
              {data.episode.toUpperCase()} · {data.title.toUpperCase()}
            </p>
          </div>

          <div className="w-full rounded-xl border border-yellow-300/25 bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-sm sm:p-8">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-yellow-300" />
              <h2 className="text-lg tracking-widest text-yellow-300 font-sci-fi sm:text-xl">
                FELIZ CUMPLEAÑOS
              </h2>
              <Sparkles size={18} className="text-yellow-300" />
            </div>

            <p className="mb-1 text-center text-3xl font-bold text-white font-sci-fi sm:text-4xl">
              {data.birthdayPerson}
            </p>
            {data.age && (
              <p className="mb-6 text-center text-sm tracking-widest text-yellow-300/80 font-sci-fi">
                CUMPLE {data.age} AÑOS
              </p>
            )}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1 text-center">
                <Calendar size={20} className="mb-1 text-yellow-300/80" />
                <span className="text-xs tracking-widest text-yellow-300/70 font-sci-fi">
                  FECHA
                </span>
                <span className="text-sm text-white">{data.date}</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center sm:border-x sm:border-white/10">
                <Clock size={20} className="mb-1 text-yellow-300/80" />
                <span className="text-xs tracking-widest text-yellow-300/70 font-sci-fi">
                  HORA
                </span>
                <span className="text-sm text-white">{data.time}</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <MapPin size={20} className="mb-1 text-yellow-300/80" />
                <span className="text-xs tracking-widest text-yellow-300/70 font-sci-fi">
                  LUGAR
                </span>
                <span className="text-sm text-white">{data.location}</span>
              </div>
            </div>

            {data.message && (
              <p className="mt-6 text-center italic leading-relaxed text-white/70">
                "{data.message}"
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-300" />
            <h3 className="text-sm tracking-widest text-yellow-300 font-sci-fi">
              LA TRANSMISION HA SIDO RECIBIDA
            </h3>
            <Star size={16} className="text-yellow-300" />
          </div>

          <p className="mt-4 text-xs tracking-widest text-white/40 font-sci-fi">QUE LA FUERZA TE ACOMPAÑE</p>
        </div>
      )}
    </div>
  );
}

export default InvitationCard;
