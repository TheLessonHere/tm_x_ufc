import { useReveal } from '../hooks/useReveal'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import WhyMatters from '../components/WhyMatters'
import ForChildren from '../components/ForChildren'
import Science from '../components/Science'
import VideoIntro from '../components/VideoIntro'
import YourPath from '../components/YourPath'
import Continuum from '../components/Continuum'
import FreeAccess from '../components/FreeAccess'
import ClosingCTA from '../components/ClosingCTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Mission />
      <WhyMatters />
      <ForChildren />
      <Science />
      <VideoIntro />
      <YourPath />
      <Continuum />
      <FreeAccess />
      <ClosingCTA />
      <Footer />
    </>
  )
}
