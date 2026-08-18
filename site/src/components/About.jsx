import { Play } from '@phosphor-icons/react'
import { PRESS } from '../data'
import { Pill, Reveal } from './shared'

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-24 text-black lg:px-10 lg:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/portrait.jpg"
              alt="Portrait of TP Lim"
              className="aspect-[16/10] w-full object-cover object-[50%_18%]"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[19px] leading-relaxed text-black">
            We believe momentum beats motivation. For over twenty years, TP Lim
            has coached founders, athletes and leaders across Asia and beyond,
            with more than 400,000 people through his rooms. His method is
            simple to say and hard to escape: decide, commit, measure, repeat.
          </p>
          <Pill href="#" variant="cloud" className="mt-8">
            Meet TP Lim
          </Pill>
        </Reveal>
      </div>

      <div className="mt-16 grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_452px] lg:gap-20">
        <div>
          <p className="text-lg text-steel">Featured in:</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-14 gap-y-5">
            {PRESS.map((p) => (
              <span key={p} className="text-[22px] font-bold tracking-tight text-black/35">
                {p}
              </span>
            ))}
          </div>
        </div>
        <button className="group relative overflow-hidden rounded-2xl text-left">
          <img
            src="/images/event-workshop.jpg"
            alt="Inside a TP Lim leadership workshop"
            className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-black/40 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition group-hover:bg-black/55">
              <Play size={14} weight="fill" /> Watch video
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}
