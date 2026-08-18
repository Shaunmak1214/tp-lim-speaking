import { Pill, Reveal } from './shared'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black">
      <img src="/images/results.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <Reveal className="relative mx-auto flex min-h-[680px] max-w-3xl flex-col items-center justify-center px-5 py-32 text-center">
        <h2 className="display text-4xl text-white md:text-6xl">Ready to close the gap?</h2>
        <p className="mt-7 text-lg leading-relaxed text-white/90">
          Now is your time.
          <br />
          Connect with us to learn more.
        </p>
        <Pill href="#events" className="mt-10">
          Learn more
        </Pill>
      </Reveal>
    </section>
  )
}
