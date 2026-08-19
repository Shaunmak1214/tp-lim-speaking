import { Play, WhatsappLogo } from '@phosphor-icons/react'
import { Pill } from './shared'
import { SCHEDULE_URL, WHATSAPP_URL } from '../data'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      {/* TODO(asset): replace with the 45-90s showreel <video> (muted, looped, poster) */}
      <img
        src="/images/hero.jpg"
        alt="TP Lim on stage in front of a full arena"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40" />

      <button
        className="group absolute right-6 top-24 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 md:right-10"
        title="Showreel placeholder"
      >
        <Play size={14} weight="fill" className="text-ember" />
        Watch the showreel
      </button>

      <div className="relative w-full px-5 pb-16 pt-40 lg:px-10 lg:pb-24">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-ember">
          TP Lim · Motivational speaker · Master storyteller
        </p>
        <h1 className="display mt-5 max-w-4xl text-5xl text-white md:text-6xl lg:text-[76px]">
          Stories that move people. Energy that moves rooms.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
          Twenty-five years of stages, cameras and characters, in English, Mandarin and Cantonese, at your next event.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Pill href={SCHEDULE_URL}>Schedule a Call</Pill>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-[15px] text-[15px] font-semibold text-white transition hover:border-ember hover:text-ember"
          >
            <WhatsappLogo size={18} weight="fill" /> WhatsApp TP
          </a>
        </div>
      </div>
    </section>
  )
}
