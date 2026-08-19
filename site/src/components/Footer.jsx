import { LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import { FOOTER_NAV, LINKEDIN_URL, WHATSAPP_URL } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black px-5 pb-10 pt-16 lg:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-[19px] font-bold tracking-[0.22em] text-white">TP LIM</p>
          <p className="mt-2 text-[15px] text-fog">Motivational Speaker · Master Storyteller</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">English · Mandarin · Cantonese</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_NAV.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase() === 'speaking' ? 'keynotes' : l.toLowerCase() === 'about' ? 'story' : l.toLowerCase()}`} className="text-[15px] font-medium text-white/85 hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="TP Lim on LinkedIn" className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/50 hover:text-white">
            <LinkedinLogo size={20} weight="fill" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp TP" className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/50 hover:text-white">
            <WhatsappLogo size={20} weight="fill" />
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-7 text-sm text-fog md:flex-row">
        <p>© 2026 TP Lim. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          {/* TODO: real privacy policy before launch */}
        </div>
      </div>
    </footer>
  )
}
