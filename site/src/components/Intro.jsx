import { Reveal } from './shared'

export default function Intro() {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <h2 className="display max-w-4xl text-4xl text-white md:text-6xl">One speaker. Many lives.</h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
          A barrister who never wanted the bar. An ad man in London. A TV host
          for thirteen years. The emcee Malaysia&rsquo;s biggest brands kept on
          speed dial. A film executive, a conservationist, a coach.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
          Most speakers go deep on one life. TP brings the breadth of six, which
          means more stories, more angles, and a message your audience
          hasn&rsquo;t heard before.
        </p>
      </Reveal>
    </section>
  )
}
