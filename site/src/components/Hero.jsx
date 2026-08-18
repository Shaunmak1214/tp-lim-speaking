import { Play } from '@phosphor-icons/react'
import { Eyebrow, Pill } from './shared'

export default function Hero() {
  return (
    <section className="bg-black px-5 pt-[104px]">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="/images/hero.jpg"
          alt="TP Lim on stage in front of an arena crowd"
          className="h-[calc(100dvh-124px)] min-h-[560px] w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-10 p-6 md:p-11 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h1 className="display text-5xl text-white md:text-6xl lg:text-[74px]">
              The life you want is one decision away.
            </h1>
            <Pill href="#events" className="mt-9">
              Get Tickets Now
            </Pill>
          </div>

          <a href="#events" className="group hidden w-[340px] shrink-0 lg:block">
            <Eyebrow light className="mb-2.5">
              Next event
            </Eyebrow>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/featured.jpg"
                alt="Breakthrough Live, Singapore"
                className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-3 left-4 text-white">
                <p className="text-lg font-semibold leading-tight">Breakthrough Live</p>
                <p className="text-sm text-white/80">Singapore Expo</p>
              </div>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/45 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur">
                <Play size={13} weight="fill" /> Watch
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
