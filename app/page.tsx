// ISR — Testimonios y Recitales se refrescan cada 60 segundos
export const revalidate = 60

import Navigation from '@/components/Navigation'
import VideoBackground from '@/components/VideoBackground'
import Hero from '@/components/Hero'
import CursosDestacados from '@/components/CursosDestacados'
import Reveal from '@/components/Reveal'
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

      {/*
        VideoBackground: position fixed, z-index 0 — lives behind everything.
        The page wrapper is position relative, z-index 1 — sits above the video.

        Within the wrapper:
          • Hero              → background: transparent   → video shows through, clear
          • CursosDestacados  → background: rgba dark 82% → video shows through, blurred
          • All other sections → solid opaque backgrounds  → video completely hidden
      */}
      <VideoBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <main id="main">
          <Hero />
          <CursosDestacados />

          <Reveal><MetodoHome /></Reveal>
          <Reveal><ProfesoresHome /></Reveal>
          <Reveal><SobreEscuela /></Reveal>
          <Reveal><CitaCentral /></Reveal>
          <Reveal><Testimonios /></Reveal>
          <Reveal><Recitales /></Reveal>
          <Reveal><ContactoRapido /></Reveal>
        </main>
        <Footer />
      </div>
    </>
  )
}
