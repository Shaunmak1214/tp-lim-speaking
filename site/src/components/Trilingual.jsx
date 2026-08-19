import { Reveal } from './shared'

const LANGS = [
  { lang: 'English', line: 'Boardroom-sharp, convention-ready.' },
  { lang: '中文', line: 'Full keynotes in Mandarin, not just greetings.' },
  { lang: '粤语', line: 'Cantonese that lands with the whole room.' },
]

export default function Trilingual() {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <Reveal className="text-center">
        <h2 className="display mx-auto max-w-3xl text-4xl text-white md:text-6xl">
          One speaker. Three languages.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
          For the price of one, your event gets a speaker who can carry the
          message across English, Mandarin and Cantonese, and switch mid-room
          when the audience needs it.
        </p>
      </Reveal>
      <Reveal stagger className="mt-12">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {LANGS.map((l, i) => (
            <div key={l.lang} style={{ '--stagger-i': i }} className="stagger-item rounded-2xl border border-line p-8 text-center">
              <p className="display text-4xl text-ember">{l.lang}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{l.line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
