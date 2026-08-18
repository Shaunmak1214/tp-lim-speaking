import { Play } from '@phosphor-icons/react'
import { Reveal } from './shared'

export default function Coaching() {
  return (
    <section id="coaching" className="bg-black px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-4 lg:grid-cols-[440px_minmax(0,1fr)]">
        <Reveal>
          <div className="flex min-h-[230px] items-center justify-center rounded-2xl bg-ember p-10">
            <div className="text-center text-black">
              <p className="font-mono text-[12px] uppercase tracking-[0.3em]">TP Lim</p>
              <p className="display mt-1 text-5xl uppercase italic">Coaching</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="flex items-center rounded-2xl bg-coal p-10 lg:px-14">
          <h2 className="display text-4xl text-white md:text-[56px]">Expert guidance for your path</h2>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[440px_minmax(0,1fr)]">
        <Reveal className="rounded-2xl bg-coal p-10">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="display text-5xl text-mist">78%</p>
              <p className="mt-2 text-[15px] leading-snug text-mist">reach their 12-month goal early</p>
            </div>
            <div>
              <p className="display text-5xl text-mist">64%</p>
              <p className="mt-2 text-[15px] leading-snug text-mist">report stronger relationships</p>
            </div>
          </div>
          <p className="mt-8 text-[16px] leading-relaxed text-white/85">
            Events light the fire. Coaching keeps it burning. Work one-on-one
            with a coach trained in the same method TP uses on stage.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a href="#" className="rounded-full bg-panel px-6 py-4 text-center text-[15px] font-semibold text-white transition hover:bg-[#2c2c2c]">
              Results coaching
            </a>
            <a href="#" className="rounded-full bg-panel px-6 py-4 text-center text-[15px] font-semibold text-white transition hover:bg-[#2c2c2c]">
              Business coaching
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <button className="group relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl text-left">
            <img
              src="/images/pillar-leadership.jpg"
              alt="A results coach working with a group"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-ember/70 via-ember/15 to-transparent" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-black/40 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition group-hover:bg-black/55">
                <Play size={14} weight="fill" /> Watch
              </span>
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
