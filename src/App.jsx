import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyEBDA from './components/WhyEBDA'
import DevelopmentStatus from './components/DevelopmentStatus'
import LatestPhotos from './components/LatestPhotos'
import ExperienceVision from './components/ExperienceVision'
import InvestForm from './components/InvestForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyEBDA />
        <DevelopmentStatus />
        <ExperienceVision />
        <LatestPhotos />
        <InvestForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
