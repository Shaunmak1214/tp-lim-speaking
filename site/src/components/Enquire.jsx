import { useState } from 'react'
import { PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react'
import { ENQUIRY_INTERESTS, WHATSAPP_URL } from '../data'
import { Pill, Reveal } from './shared'

const inputCls =
  'w-full rounded-xl border border-line bg-panel px-5 py-4 text-[15px] text-white placeholder:text-fog focus:border-ember focus:outline-none'

export default function Enquire() {
  const [form, setForm] = useState({ name: '', org: '', contact: '', interest: ENQUIRY_INTERESTS[0], date: '', audience: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // Keeps the funnel simple per the discussion: the form composes a WhatsApp
  // message. TODO: point WHATSAPP_URL at TP's real number, or wire a backend.
  const submit = (e) => {
    e.preventDefault()
    const msg = [
      `Hi TP, I'm ${form.name || '...'} from ${form.org || '...'}.`,
      `We're exploring: ${form.interest}.`,
      form.date && `Event date: ${form.date}.`,
      form.audience && `Audience: ${form.audience}.`,
      form.contact && `Reach me at: ${form.contact}.`,
    ]
      .filter(Boolean)
      .join(' ')
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer')
  }

  return (
    <section id="enquire" className="relative overflow-hidden border-t border-line">
      <img src="/images/coaching.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="relative grid gap-14 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="display max-w-xl text-4xl text-white md:text-6xl">
            What change are you hoping to create?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            Tell TP a little about your event and your audience. No date locked
            in yet? That is fine, that is what the call is for.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Pill href="#" as="a">
              Schedule a Call
            </Pill>
            {/* TODO: point the pill above at the real scheduling link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-[15px] text-[15px] font-semibold text-white transition hover:border-ember hover:text-ember"
            >
              <WhatsappLogo size={18} weight="fill" /> WhatsApp TP
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
              <input value={form.org} onChange={set('org')} placeholder="Organisation" className={inputCls} />
            </div>
            <input value={form.contact} onChange={set('contact')} placeholder="Email or phone" className={inputCls} />
            <div className="grid gap-4 sm:grid-cols-2">
              <select value={form.interest} onChange={set('interest')} className={inputCls}>
                {ENQUIRY_INTERESTS.map((o) => (
                  <option key={o} value={o} className="bg-panel">
                    {o}
                  </option>
                ))}
              </select>
              <input value={form.date} onChange={set('date')} placeholder="Event date (if known)" className={inputCls} />
            </div>
            <textarea
              value={form.audience}
              onChange={set('audience')}
              rows={3}
              placeholder="Who is in the room, and what should they feel differently afterwards?"
              className={inputCls}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ember px-7 py-[15px] text-[15px] font-semibold text-black transition hover:bg-[#e0b264] active:scale-[0.98]"
            >
              <PaperPlaneTilt size={17} weight="fill" /> Send via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
