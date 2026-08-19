import { Quotes } from '@phosphor-icons/react'
import { BRANDS, PROJECTS, TESTIMONIAL } from '../data'
import { Eyebrow, Reveal } from './shared'

export default function Proof() {
  return (
    <section id="proof" className="px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <Eyebrow light>Proof</Eyebrow>
        <h2 className="display mt-6 max-w-3xl text-4xl text-white md:text-5xl">
          Brands, rooms and projects that trusted the delivery.
        </h2>
      </Reveal>

      <Reveal className="mt-12">
        <div className="flex flex-wrap items-center gap-x-14 gap-y-5 border-y border-line py-8">
          {BRANDS.map((b) => (
            <span key={b} className="text-[22px] font-bold tracking-tight text-white/40">
              {b}
            </span>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
          Selected brands TP has hosted and spoken for · logos pending permission
        </p>
      </Reveal>

      <Reveal className="mt-16">
        <div className="rounded-2xl border border-line bg-panel p-9 md:p-14">
          <Quotes size={40} weight="fill" className="text-ember" />
          <blockquote className="mt-6 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <p className="mt-7 font-semibold text-white">{TESTIMONIAL.name}</p>
          <p className="text-sm text-fog">{TESTIMONIAL.role}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">{TESTIMONIAL.context}</p>
        </div>
      </Reveal>

      <div id="projects" className="mt-16">
        <Reveal>
          <h3 className="display max-w-2xl text-3xl text-white md:text-4xl">
            Stories that help us see nature differently
          </h3>
        </Reveal>
        <Reveal stagger className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <article key={p.name} style={{ '--stagger-i': i }} className="stagger-item group overflow-hidden rounded-2xl border border-line bg-panel">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">{p.credit}</p>
                  <h4 className="display mt-3 text-2xl text-white">{p.name}</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-mist">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
