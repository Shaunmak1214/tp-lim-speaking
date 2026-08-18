import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { PROGRAMS } from '../data'
import { useCarousel, CarouselArrows, Dots, Reveal } from './shared'

export default function Programs() {
  const { trackRef, canPrev, canNext, scrollBy } = useCarousel()
  const [page, setPage] = useState(0)

  const onScroll = (e) => {
    const el = e.currentTarget
    setPage(Math.round((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 3) || 0)
  }

  return (
    <section id="programs" className="bg-black py-24 lg:py-28">
      <div className="px-5 lg:px-10">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <h2 className="display text-4xl text-white md:text-[40px]">Events that liberate</h2>
            <a href="#events" className="group inline-flex items-center gap-2 text-[16px] font-medium text-white/90 hover:text-white">
              Discover events
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <CarouselArrows canPrev={canPrev} canNext={canNext} onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
        </Reveal>
      </div>

      <Reveal stagger>
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:px-10"
        >
          {PROGRAMS.map((p, i) => (
            <a key={p.name} href="#events" style={{ '--stagger-i': i }} className="stagger-item group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl md:w-[310px]">
            <img src={p.img} alt={p.name} className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/35" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/85">TP Lim</p>
              <h3 className="display mt-2 text-[30px] uppercase leading-[1.04] text-white">{p.name}</h3>
            </div>
              <p className="absolute inset-x-6 bottom-6 text-center text-[15px] leading-snug text-white/90">{p.sub}</p>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="mt-8">
        <Dots count={4} active={page} />
      </div>
    </section>
  )
}
