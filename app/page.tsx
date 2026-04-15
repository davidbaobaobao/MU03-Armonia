// ISR — Testimonios y Recitales se refrescan cada 60 segundos
export const revalidate = 60

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Reveal from '@/components/Reveal'
import CursosDestacados from '@/components/CursosDestacados'
import MetodoHome from '@/components/MetodoHome'
import ProfesoresHome from '@/components/ProfesoresHome'
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
        {/* Hero — sticky scroll blur (200vh wrapper inside) */}
        <Hero />

        {/* Sections below — each fades up as it enters the viewport */}
        <Reveal><CursosDestacados /></Reveal>
        <Reveal><MetodoHome /></Reveal>
        <Reveal><ProfesoresHome /></Reveal>
        <Reveal><SobreEscuela /></Reveal>
        <Reveal><CitaCentral /></Reveal>
        <Reveal><Testimonios /></Reveal>
        <Reveal><Recitales /></Reveal>
        <Reveal><ContactoRapido /></Reveal>
      </main>
      <Footer />
    </>
  )
}
