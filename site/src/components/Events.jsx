import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { EVENTS } from '../data'
import { useCarousel, CarouselArrows, Dots, Eyebrow, Pill, Reveal } from './shared'

export default function Events() {
  const { trackRef, canPrev, canNext, scrollBy } = useCarousel()
  const [page, setPage] = useState(0)

  const onScroll = (e) => {
    const el = e.currentTarget
    setPage(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <section id="events" className="bg-white py-24 text-black lg:py-32">
      <div className="px-5 lg:px-10">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <h2 className="display text-4xl md:text-[40px]">Upcoming events</h2>
            <a href="#" className="group inline-flex items-center gap-2 text-[16px] font-medium text-black/80 hover:text-black">
              Explore all events
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <CarouselArrows light canPrev={canPrev} canNext={canNext} onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory overflow-x-auto"
      >
        {EVENTS.map((e) => (
          <article key={e.name} className="w-full shrink-0 snap-center px-5 lg:px-10">
            <div className="relative min-h-[620px] overflow-hidden rounded-2xl lg:min-h-[700px]">
              <img src={e.img} alt={e.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

              <div className="relative flex min-h-[620px] flex-col justify-end p-7 md:p-12 lg:min-h-[700px]">
                <Eyebrow light dot="#fff" className="mb-5">
                  In-person &amp; virtual
                </Eyebrow>
                <h3 className="display max-w-2xl text-4xl text-white md:text-[58px]">{e.tagline}</h3>
                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/90">{e.blurb}</p>
                <div className="mt-8">
                  <Pill href="#">Learn More</Pill>
                </div>

                <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
                  <dl className="flex flex-wrap gap-x-14 gap-y-4">
                    {[
                      ['Date', e.date],
                      ['Place', e.place],
                      ['Timezone', e.timezone],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/65">{k}</dt>
                        <dd className="mt-1.5 text-lg font-semibold text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="hidden rounded-lg bg-black/70 px-6 py-4 backdrop-blur md:block">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">TP Lim</p>
                    <p className="display mt-1 text-xl uppercase text-white">{e.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Dots light count={EVENTS.length} active={page} />
      </div>
    </section>
  )
}
