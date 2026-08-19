import { Play } from '@phosphor-icons/react'
import { RETRO_CLIPS } from '../data'
import { Reveal } from './shared'

export default function Retro() {
  return (
    <section className="border-y border-line bg-ink-soft px-5 py-20 lg:px-10 lg:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="display max-w-xl text-3xl text-white md:text-4xl">Where I came from</h2>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-fog">
            Thirteen years of live TV and a hundred characters. The tapes are
            grainy on purpose; that is how it felt.
          </p>
        </div>
      </Reveal>
      <Reveal stagger className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {RETRO_CLIPS.map((c, i) => (
            <button
              key={c.label}
              style={{ '--stagger-i': i }}
              className="stagger-item group relative overflow-hidden rounded-xl border border-line bg-black p-8 text-left"
              title="Clip placeholder"
            >
              {/* TODO(asset): swap for TP's approved low-res clips, tap/hover to play */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{ background: 'repeating-linear-gradient(0deg, transparent 0 3px, rgba(255,255,255,0.06) 3px 4px)' }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">REC ● {c.meta}</p>
              <p className="display mt-14 text-2xl text-white">{c.label}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                <Play size={13} weight="fill" /> Play clip
              </span>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
