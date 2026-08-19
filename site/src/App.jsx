import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredStrip from './components/CredStrip'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Delivery from './components/Delivery'
import Keynotes from './components/Keynotes'
import Trilingual from './components/Trilingual'
import InTheRoom from './components/InTheRoom'
import Proof from './components/Proof'
import Retro from './components/Retro'
import Beyond from './components/Beyond'
import Enquire from './components/Enquire'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredStrip />
        <Intro />
        <Timeline />
        <Delivery />
        <Keynotes />
        <Trilingual />
        <InTheRoom />
        <Proof />
        <Retro />
        <Beyond />
        <Enquire />
      </main>
      <Footer />
    </>
  )
}
