import { ARENAS, STORY_QUOTE } from '../data'
import { Reveal } from './shared'

export default function Delivery() {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <h2 className="display max-w-3xl text-4xl text-white md:text-5xl">
          Four arenas. One craft: delivery.
        </h2>
      </Reveal>
      <Reveal stagger className="mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ARENAS.map((a, i) => (
            <div key={a.name} style={{ '--stagger-i': i }} className="stagger-item rounded-2xl border border-line bg-panel p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">0{i + 1}</p>
              <h3 className="display mt-4 text-2xl text-white">{a.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{a.line}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-16">
        <blockquote className="display max-w-4xl text-2xl text-white/90 md:text-[34px]">
          &ldquo;{STORY_QUOTE}&rdquo;
        </blockquote>
        <p className="mt-4 text-sm font-semibold text-fog">TP Lim</p>
      </Reveal>
    </section>
  )
}
