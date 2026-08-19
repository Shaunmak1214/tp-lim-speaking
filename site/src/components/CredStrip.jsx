import { CREDS, CRED_BADGES } from '../data'
import { Reveal } from './shared'

export default function CredStrip() {
  return (
    <section className="border-b border-line bg-ink-soft py-14">
      <div className="px-5 lg:px-10">
        <Reveal stagger>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {CREDS.map((c, i) => (
              <div key={c.label} className="stagger-item" style={{ '--stagger-i': i }}>
                <p className="display text-5xl text-ember md:text-6xl">{c.stat}</p>
                <p className="mt-2 max-w-[22ch] text-[15px] leading-snug text-mist">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6">
          {CRED_BADGES.map((b) => (
            <span key={b} className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
