import { useState } from 'react'
import { CaretDown, List, MagnifyingGlass, X } from '@phosphor-icons/react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-azure px-4 py-2 text-center text-[15px] text-white">
        <span className="font-bold">Join TP live in Singapore</span>
        <span className="hidden sm:inline"> : in-person tickets will sell out soon!</span>
      </div>
      <nav className="flex h-16 items-center justify-between bg-black px-5 lg:px-10">
        <a href="#" className="text-[19px] font-bold tracking-[0.22em] text-white">
          TP LIM
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="inline-flex items-center gap-1 text-[15px] font-semibold text-white/95 transition hover:text-white"
              >
                {l}
                <CaretDown size={12} weight="bold" className="text-white/70" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-7 lg:flex">
          <button aria-label="Search" className="text-white/90 transition hover:text-white">
            <MagnifyingGlass size={20} weight="bold" />
          </button>
          <a href="#" className="text-[15px] font-semibold text-white/95 hover:text-white">
            Log in
          </a>
          <a
            href="#coaching"
            className="rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition hover:bg-white/85"
          >
            Start now
          </a>
        </div>

        <button aria-label="Menu" className="text-white lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-full border-t border-white/10 bg-black px-5 pb-8 pt-4 transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transform-none lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg font-semibold text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#coaching" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black">
          Start now
        </a>
      </div>
    </header>
  )
}
