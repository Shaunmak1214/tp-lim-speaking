// Content per PLAN.md. Discussion transcript supersedes the docx brief.
// TODO(assets): swap placeholder imagery for TP's real era photos before launch.

export const SCHEDULE_URL = '#enquire' // TODO: replace with Calendly (or chosen scheduler) link
export const WHATSAPP_URL = 'https://wa.me/60000000000' // TODO: TP's real WhatsApp number
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tplim789/'

export const NAV_LINKS = [
  { label: 'About', href: '#story' },
  { label: 'Speaking', href: '#keynotes' },
  { label: 'Proof', href: '#proof' },
  { label: 'Projects', href: '#projects' },
]

export const CREDS = [
  { stat: '25+', label: 'years holding live stages' },
  { stat: '13', label: 'years as an Astro TV host' },
  { stat: '100+', label: 'characters played for top brands' },
  { stat: '3', label: 'languages, full keynotes in each' },
]

export const CRED_BADGES = ['Executive Producer · HOWL', 'ICF Associate Certified Coach', 'HRD Corp Accredited Trainer', 'Barrister-at-Law · Lincoln’s Inn']

// Approved quote: must be used exactly (sitewide content rules).
export const STORY_QUOTE =
  'People rarely change because they are given more information. They change when a story enables them to see differently.'

export const TIMELINE = [
  {
    year: '1999',
    title: 'The break',
    text: 'Wins the Astro Talent Quest Best Talent Award, judged by Wang Leehom, and steps into thirteen years of live television.',
    img: '/images/event-arena.jpg', // TODO: real Astro-era photo
  },
  {
    year: 'The 2000s',
    title: 'The MC years',
    text: 'The emcee Malaysia’s biggest brands book by name: Panasonic eight years running, Great Eastern, the banks, the telcos. Over a hundred characters, three languages, five to fifteen gigs a month.',
    img: '/images/featured.jpg', // TODO: real MC/character photo
  },
  {
    year: 'The foundation',
    title: 'The barrister',
    text: 'Underneath it all: a law degree from Bristol and a Barrister-at-Law call from Lincoln’s Inn. He never practised, but the courtroom craft of persuasion never left.',
    img: '/images/pillar-business.jpg', // TODO: real law-era photo
  },
  {
    year: '11 years',
    title: 'The film chapter',
    text: 'Managing Director of the Kuala Lumpur operations of a Hong Kong entertainment company founded by Andy Lau: production, talent, marketing, fundraising, distribution.',
    img: '/images/event-summit.jpg', // TODO: real film-era photo (verify Andy Lau imagery rights)
  },
  {
    year: '17 years',
    title: 'The living world',
    text: 'Seventeen years alongside Dr Jane Goodall through Roots & Shoots. Executive Producer of HOWL. Co-producing The Vanishing Song with Oscar-winning filmmaker Ruby Yang.',
    img: '/images/pillar-mindset.jpg', // TODO: real conservation photo (verify Dr Jane imagery licence)
  },
  {
    year: 'Today',
    title: 'All of it, on stage',
    text: 'The barrister’s precision, the host’s energy, the filmmaker’s story craft, the conservationist’s sense of what matters. One speaker, many lives.',
    img: '/images/portrait.jpg', // TODO: real current portrait
  },
]

export const ARENAS = [
  { name: 'The Courtroom', line: 'Law taught him that an argument is a story with stakes, and precision is a kindness to the listener.' },
  { name: 'The Stage', line: 'Thirteen years of live TV and a hundred characters taught him energy, timing, and how to read any room.' },
  { name: 'The Screen', line: 'Eleven years in film taught him that a story lands hardest when it is built, shot by shot, on purpose.' },
  { name: 'The Wild', line: 'Seventeen years beside Dr Jane Goodall taught him that the stories worth telling change what people protect.' },
]

// Keynote copy is the approved V1 wording from the build brief.
export const KEYNOTES = [
  {
    flagship: true,
    title: 'Beyond Speed',
    sub: 'What Nature Teaches Us About Leadership in the Age of AI',
    q: 'How can leaders make wiser decisions, protect what is human and redesign work as AI becomes more capable?',
  },
  {
    flagship: false,
    title: 'Beyond Compliance',
    sub: 'Making Sustainability Meaningful to People',
    q: 'How do organisations move sustainability beyond reporting and turn it into something people understand, care about and act on?',
  },
  {
    flagship: false,
    title: 'Nature-Inspired Leadership',
    sub: 'What Living Systems Teach Us About Resilience, Adaptation and Long-Term Performance',
    q: 'What can nature teach us about building organisations that are more adaptive, resilient and capable of thriving through change?',
  },
]

export const FORMATS = [
  '10-minute convention opener',
  '30-45 minute keynote',
  '45-60 minute keynote',
  'Keynote + Q&A',
  'Keynote + facilitated conversation',
  'Keynote + workshop',
]

// TODO(permissions): every logo/wordmark below must be classified (client / host / programme)
// and permission-checked before launch. Text wordmarks are placeholders.
export const BRANDS = ['Panasonic', 'Great Eastern', 'Astro', 'Watsons', 'Nestlé', 'Digi']

// Testimonial: supplied wording, used faithfully. Attributed to the Roots & Shoots
// session per the publication gate (no TP-specific attribution without permission).
export const TESTIMONIAL = {
  quote:
    'The Healthy Soil, Healthy Life session was highly engaging and made complex environmental topics both relatable and actionable. It sparked genuine curiosity and meaningful conversations about sustainability, creating an emotional connection that motivated employees to reflect on how their individual actions can contribute to a greater impact.',
  name: 'Yee Yin Sinn',
  role: 'ESG Club President, British American Tobacco Malaysia',
  context: 'On a Roots & Shoots sustainability session facilitated with TP',
}

export const PROJECTS = [
  {
    name: 'HOWL',
    credit: 'Executive Producer',
    text: 'A live-action feature film executive produced by a group that includes Leonardo DiCaprio and the late Dr Jane Goodall. Told through the eyes of an abandoned family dog and a young wolf.',
    img: '/images/pillar-happiness.jpg', // TODO: approved HOWL artwork (verify rights + credit wording)
  },
  {
    name: 'The Vanishing Song',
    credit: 'Co-Producer',
    text: 'A nature documentary centred on the gibbon, co-produced with Oscar-winning filmmaker Ruby Yang. Story as a way of giving a voice to what we risk losing.',
    img: '/images/event-retreat.jpg', // TODO: approved project still (verify title styling + credits)
  },
]

export const RETRO_CLIPS = [
  { label: 'Jack Sparrow, but for fridges', meta: 'Panasonic annual convention' },
  { label: 'Three languages, one gala night', meta: 'Chinese New Year, live' },
  { label: 'Live TV. No retakes.', meta: 'Astro, 13 seasons' },
]

export const BEYOND = [
  { name: 'Workshops', line: 'Interactive sessions on leadership, storytelling and change.' },
  { name: 'Executive coaching', line: 'One-to-one coaching for clarity and direction (ICF ACC).' },
  { name: 'Leadership retreats', line: 'Space to step out of urgency and think properly.' },
  { name: 'Sustainability conversations', line: 'Engagements that make sustainability human and actionable.' },
]

export const ENQUIRY_INTERESTS = [
  'Keynote speaking',
  'Convention opener',
  'Emcee / hosting',
  'Workshop or retreat',
  'Executive coaching',
  'Something else',
]

export const FOOTER_NAV = ['About', 'Speaking', 'Proof', 'Projects', 'Enquire']
