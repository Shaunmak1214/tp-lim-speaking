import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import StartNow from './components/StartNow'
import Pillars from './components/Pillars'
import Testimonials from './components/Testimonials'
import Hunger from './components/Hunger'
import About from './components/About'
import Results from './components/Results'
import Events from './components/Events'
import Coaching from './components/Coaching'
import Shop from './components/Shop'
import Podcast from './components/Podcast'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <StartNow />
        <Pillars />
        <Testimonials />
        <Hunger />
        <About />
        <Results />
        <Events />
        <Coaching />
        <Shop />
        <Podcast />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
