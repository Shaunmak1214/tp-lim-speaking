import { RESULT_CARDS } from '../data'
import { useCarousel, CarouselArrows, Pill, Reveal } from './shared'

export default function Results() {
  const { trackRef, canPrev, canNext, scrollBy } = useCarousel()
  return (
    <section className="bg-white py-24 text-black lg:py-32">
      <div className="px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal className="flex flex-col justify-between">
            <h2 className="display max-w-md text-5xl md:text-[64px]">Decisions equal results</h2>
            <div className="mt-12 hidden lg:block">
              <CarouselArrows light canPrev={canPrev} canNext={canNext} onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-[19px] leading-relaxed text-black">
              Every flagship event is tracked with independent researchers,
              because motivation that fades in a week is entertainment, not
              change. The numbers hold up long after the lights go down:
            </p>
            <div className="mt-10 grid grid-cols-2 gap-10">
              <div>
                <p className="display text-6xl text-steel md:text-7xl">2.7x</p>
                <p className="mt-3 max-w-[22ch] text-[17px] leading-snug text-steel">
                  increase in weekly progress toward a stated goal
                </p>
              </div>
              <div>
                <p className="display text-6xl text-steel md:text-7xl">94%</p>
                <p className="mt-3 max-w-[22ch] text-[17px] leading-snug text-steel">
                  still using at least one core practice six months on
                </p>
              </div>
            </div>
            <Pill href="#" variant="cloud" className="mt-10">
              Learn more
            </Pill>
          </Reveal>
        </div>
      </div>

      <div ref={trackRef} className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:px-10">
        {RESULT_CARDS.map((img, i) => (
          <div key={i} className="w-[300px] shrink-0 snap-start overflow-hidden rounded-xl md:w-[380px]">
            <img src={img} alt="A client sharing their story" className="aspect-[4/5] w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
