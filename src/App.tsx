import { Header } from "./components/Header"
import { CallToAction } from "./components/CallToAction"
import { DestinosPopulares } from "./components/DestinosPopulares"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import OfertasEspeciales from "./components/OfertasEspeciales"

function App() {
  

  return (
    <>
      <Header/>
      <Hero />
      <DestinosPopulares/>
      <OfertasEspeciales />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
