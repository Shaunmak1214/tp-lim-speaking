import { useState } from 'react'
import { ArrowRight, CaretRight } from '@phosphor-icons/react'
import { PRODUCTS, SHOP_FILTERS } from '../data'
import { Eyebrow, Reveal } from './shared'

export default function Shop() {
  const [filter, setFilter] = useState('All')
  const shown = PRODUCTS.filter((p) => filter === 'All' || p.category === filter)
  return (
    <section id="shop" className="bg-white px-5 py-24 text-black lg:px-10 lg:py-32">
      <Reveal className="text-center">
        <Eyebrow dot="#000">Shop</Eyebrow>
        <h2 className="display mx-auto mt-6 max-w-3xl text-5xl md:text-[64px]">Tools for the work between events</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-steel">
          Turn any hour of the day into a working session with books, journals and fuel built around the method.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-wrap gap-2.5">
          {SHOP_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition ${
                f === filter ? 'bg-cloud text-black' : 'border border-black/15 text-black hover:border-black/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <a href="#" className="group inline-flex items-center gap-2 text-[16px] font-medium text-black/80 hover:text-black">
          Shop all
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {shown.map((p) => (
          <a key={p.name} href="#" className="group flex flex-col rounded-xl bg-shell p-4 transition hover:bg-cloud">
            <div className="overflow-hidden rounded-lg">
              <img src={p.img} alt={p.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            </div>
            <div className="flex items-end justify-between gap-3 px-1 pb-2 pt-6">
              <div>
                <h3 className="text-[19px] font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-[15px] text-steel">{p.price}</p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
                <CaretRight size={16} weight="bold" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
