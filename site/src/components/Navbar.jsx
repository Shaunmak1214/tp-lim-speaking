import { useState } from 'react'
import { List, WhatsappLogo, X } from '@phosphor-icons/react'
import { NAV_LINKS, SCHEDULE_URL, WHATSAPP_URL } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-5 lg:px-10">
        <a href="#" className="text-[19px] font-bold tracking-[0.22em] text-white">
          TP LIM
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[15px] font-semibold text-white/95 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp TP"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-ember hover:text-ember"
          >
            <WhatsappLogo size={20} weight="fill" />
          </a>
          <a
            href={SCHEDULE_URL}
            className="rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition hover:bg-white/85"
          >
            Schedule a Call
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
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-lg font-semibold text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <a href={SCHEDULE_URL} onClick={() => setOpen(false)} className="rounded-full bg-white px-6 py-3 font-semibold text-black">
            Schedule a Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp TP"
            className="grid size-12 place-items-center rounded-full border border-white/20 text-white"
          >
            <WhatsappLogo size={22} weight="fill" />
          </a>
        </div>
      </div>
    </header>
  )
}
