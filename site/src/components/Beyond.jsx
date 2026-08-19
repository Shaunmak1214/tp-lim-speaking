import { BEYOND } from '../data'
import { Reveal } from './shared'

export default function Beyond() {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-28">
      <Reveal>
        <h2 className="display max-w-2xl text-3xl text-white md:text-4xl">Beyond the keynote</h2>
      </Reveal>
      <Reveal stagger className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BEYOND.map((b, i) => (
            <div key={b.name} style={{ '--stagger-i': i }} className="stagger-item rounded-2xl border border-line p-7">
              <h3 className="text-lg font-bold tracking-tight text-white">{b.name}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-mist">{b.line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
