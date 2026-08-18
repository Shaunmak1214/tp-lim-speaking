import { Pill, Reveal } from './shared'

export default function StartNow() {
  return (
    <section className="relative overflow-hidden">
      <img src="/images/coaching.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <Reveal className="relative mx-auto flex min-h-[640px] max-w-3xl flex-col items-center justify-center px-5 py-28 text-center">
        <h2 className="display text-4xl text-white md:text-6xl">Master every part of your life.</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
          Close the gap between where you are and where you want to be with a system built to survive real weeks.
        </p>
        <Pill href="#coaching" className="mt-10">
          Start now
        </Pill>
      </Reveal>
    </section>
  )
}
