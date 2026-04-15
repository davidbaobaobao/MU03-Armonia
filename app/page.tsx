// ISR — Testimonios y Recitales se refrescan cada 60 segundos
export const revalidate = 60

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CursosDestacados from '@/components/CursosDestacados'
import SobreEscuela from '@/components/SobreEscuela'
import CitaCentral from '@/components/CitaCentral'
import Testimonios from '@/components/Testimonios'
import Recitales from '@/components/Recitales'
import ContactoRapido from '@/components/ContactoRapido'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <CursosDestacados />
        <SobreEscuela />
        <CitaCentral />
        <Testimonios />
        <Recitales />
        <ContactoRapido />
      </main>
      <Footer />
    </>
  )
}
