import { Pill, Reveal } from './shared'

export default function Hunger() {
  return (
    <section className="bg-white px-5 py-24 text-black lg:px-10 lg:py-32">
      <Reveal>
        <h2 className="display max-w-5xl text-5xl md:text-[72px]">
          Stop waiting for the right moment. Build it.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-steel">
          Every result you admire started as a decision someone refused to postpone.
        </p>
        <Pill href="#coaching" variant="cloud" className="mt-10">
          Start now
        </Pill>
      </Reveal>
    </section>
  )
}
