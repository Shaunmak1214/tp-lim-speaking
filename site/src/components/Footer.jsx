import { CaretDown, CaretRight, InstagramLogo, YoutubeLogo, XLogo, LinkedinLogo, TiktokLogo, SpotifyLogo } from '@phosphor-icons/react'
import { FOOTER_LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-10 lg:px-10">
      <div className="border-t border-white/15 pt-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
            {FOOTER_LINKS.map((col, i) => (
              <ul key={i} className="space-y-5">
                {col.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[17px] font-medium text-white transition hover:text-white/70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="space-y-12">
            <div>
              <a href="#" className="group inline-flex items-center gap-1.5 text-[17px] font-semibold text-white">
                Customer Support
                <CaretRight size={14} weight="bold" className="transition group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-[15px] leading-relaxed text-fog">
                Contact customer support for questions on your products, coaching, or events.
              </p>
            </div>
            <div>
              <a href="#" className="group inline-flex items-center gap-1.5 text-[17px] font-semibold text-white">
                Media Inquiries
                <CaretRight size={14} weight="bold" className="transition group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-[15px] leading-relaxed text-fog">
                TP Lim Group has a dedicated media department. Members of the press are welcome to contact us.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white">
            English <CaretDown size={13} weight="bold" />
          </button>
          <div className="text-[14px] text-fog">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <span>© 2026. All rights reserved.</span>
            </div>
            <p className="mt-2">TP Lim Group, 1 Fusionopolis Way, Singapore 138632</p>
          </div>
          <div className="flex gap-5 text-white">
            {[InstagramLogo, YoutubeLogo, XLogo, TiktokLogo, SpotifyLogo, LinkedinLogo].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="transition hover:text-white/60">
                <Icon size={20} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
