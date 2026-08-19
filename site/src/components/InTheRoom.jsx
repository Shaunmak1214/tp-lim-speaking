import { CheckCircle } from '@phosphor-icons/react'
import { FORMATS } from '../data'
import { Reveal } from './shared'

export default function InTheRoom() {
  return (
    <section className="border-y border-line bg-ink-soft px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="display text-4xl text-white md:text-5xl">
            Laughter first. Then the message lands.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            TP opens conventions the way organisers dream about: the room warms
            up, the energy spikes, and the serious agenda that follows gets a
            better audience. Stories make it memorable. Questions make it stick.
          </p>
          <ul className="mt-9 grid gap-3">
            {FORMATS.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[15px] text-white/90">
                <CheckCircle size={18} weight="fill" className="shrink-0 text-ember" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-fog">
            Every engagement is customised: TP works with you on who is in the
            room, what is changing in their world, and what they should think,
            feel or do differently afterwards.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img
            src="/images/results.jpg"
            alt="An audience reacting during a live session"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          {/* TODO(asset): replace with real audience-reaction photo from a TP event */}
        </Reveal>
      </div>
    </section>
  )
}
