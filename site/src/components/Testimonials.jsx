import { QUOTE } from '../data'
import { Reveal } from './shared'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <img src="/images/event-retreat.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative px-5 py-28 lg:px-10 lg:py-36">
        <Reveal className="lg:ml-auto lg:max-w-[820px]">
          <blockquote className="display text-3xl text-white md:text-[44px]">
            &ldquo;{QUOTE.text}&rdquo;
          </blockquote>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {QUOTE.people.map((p) => (
              <div key={p.name} className="flex flex-col items-start gap-3 text-white">
                <img src={p.img} alt={p.name} className="size-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-white/75">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
