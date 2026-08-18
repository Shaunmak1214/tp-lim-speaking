import { ArrowRight, Play } from '@phosphor-icons/react'
import { EPISODES } from '../data'
import { Reveal } from './shared'

export default function Podcast() {
  return (
    <section className="bg-white px-5 pb-24 text-black lg:px-10 lg:pb-32">
      <Reveal className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="display text-4xl md:text-[40px]">The TP Lim Podcast</h2>
        <a href="#" className="group inline-flex items-center gap-2 text-[16px] font-medium text-black/80 hover:text-black">
          Explore episodes
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="grid gap-0 overflow-hidden rounded-2xl bg-shell lg:grid-cols-[440px_minmax(0,1fr)]">
          <img src="/images/podcast.jpg" alt="The TP Lim Podcast studio" className="h-full min-h-[280px] w-full object-cover" />
          <div className="p-7 md:p-12">
            <p className="max-w-lg text-lg leading-relaxed text-steel">
              Long conversations with people who changed their results, and the exact moves they made.
            </p>
            <div className="mt-8 divide-y divide-black/10 border-t border-black/10">
              {EPISODES.map((e) => (
                <a key={e.title} href="#" className="group flex items-center gap-5 py-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-white">
                    <Play size={15} weight="fill" className="ml-0.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                      {e.tag} · {e.date} · {e.length}
                    </p>
                    <h3 className="mt-1.5 truncate text-lg font-semibold tracking-tight md:text-xl">{e.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
