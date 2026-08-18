import { PILLARS } from '../data'
import { Eyebrow, Reveal } from './shared'

export default function Pillars() {
  return (
    <section id="explore" className="bg-white px-5 py-24 text-black lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_46%]">
        <div>
          <Eyebrow dot="#000">Pillars for an extraordinary life</Eyebrow>
          <Reveal className="mt-8">
            <ul>
              {PILLARS.map((p) => (
                <li key={p}>
                  <a
                    href="#coaching"
                    className="display block text-[52px] text-black transition hover:text-fog md:text-[68px]"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-32 overflow-hidden rounded-2xl">
            <img src="/images/event-arena.jpg" alt="TP Lim on stage before a full arena" className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
