import { KEYNOTES, SCHEDULE_URL } from '../data'
import { Eyebrow, Pill, Reveal } from './shared'

export default function Keynotes() {
  return (
    <section id="keynotes" className="border-y border-line bg-ink-soft px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <Eyebrow light>Signature keynotes</Eyebrow>
        <h2 className="display mt-6 max-w-3xl text-4xl text-white md:text-5xl">
          Three talks. One promise: your room leaves different.
        </h2>
      </Reveal>
      <Reveal stagger className="mt-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {KEYNOTES.map((k, i) => (
            <article
              key={k.title}
              style={{ '--stagger-i': i }}
              className={`stagger-item flex flex-col justify-between rounded-2xl border p-9 ${
                k.flagship ? 'border-ember/50 bg-panel' : 'border-line bg-panel'
              }`}
            >
              <div>
                {k.flagship && (
                  <p className="mb-4 inline-block rounded-full bg-ember px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black">
                    Flagship
                  </p>
                )}
                <h3 className="display text-3xl text-white">{k.title}</h3>
                <p className="mt-2 text-[15px] font-semibold text-ember">{k.sub}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-mist">{k.q}</p>
              </div>
              <a href={SCHEDULE_URL} className="mt-9 text-sm font-semibold text-white underline-offset-4 hover:underline">
                Bring this keynote to your event
              </a>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-10 text-center">
        <Pill href={SCHEDULE_URL}>Schedule a Call</Pill>
      </Reveal>
    </section>
  )
}
