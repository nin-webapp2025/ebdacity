import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyEBDA from './components/WhyEBDA'
import BuiltForPurpose from './components/BuiltForPurpose'
import DevelopmentStatus from './components/DevelopmentStatus'
import LatestPhotos from './components/LatestPhotos'
import ExperienceVision from './components/ExperienceVision'
import InfiniteCatalog from './components/InfiniteCatalog'
import InvestForm from './components/InvestForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyEBDA />
        <BuiltForPurpose />
        <DevelopmentStatus />
        <LatestPhotos />
        <ExperienceVision />
        <InfiniteCatalog />
        <InvestForm />
      </main>
      <Footer />
    </>
  )
}
