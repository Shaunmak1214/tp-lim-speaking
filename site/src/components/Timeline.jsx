import { useEffect, useRef, useState } from 'react'
import { TIMELINE } from '../data'
import { Eyebrow } from './shared'

export default function Timeline() {
  const [active, setActive] = useState(0)
  const blockRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.i))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    blockRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="story" className="border-y border-line bg-ink-soft px-5 py-24 lg:px-10 lg:py-32">
      <Eyebrow light>The story so far</Eyebrow>
      <h2 className="display mt-6 max-w-3xl text-4xl text-white md:text-5xl">
        Scroll through six lives.
      </h2>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="hidden lg:block">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-2xl">
            {TIMELINE.map((era, i) => (
              <img
                key={era.title}
                src={era.img}
                alt={era.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">{TIMELINE[active].year}</p>
            </div>
          </div>
        </div>

        <div>
          {TIMELINE.map((era, i) => (
            <div
              key={era.title}
              data-i={i}
              ref={(el) => (blockRefs.current[i] = el)}
              className={`border-l-2 py-14 pl-8 transition-colors duration-500 first:pt-0 last:pb-0 ${
                i === active ? 'border-ember' : 'border-line'
              }`}
            >
              <img src={era.img} alt={era.title} className="mb-6 aspect-video w-full rounded-xl object-cover lg:hidden" />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">{era.year}</p>
              <h3 className="display mt-3 text-3xl text-white md:text-4xl">{era.title}</h3>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-mist">{era.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
