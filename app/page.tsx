// ISR — Testimonios y Recitales se refrescan cada 60 segundos
export const revalidate = 60

import Navigation from '@/components/Navigation'
import VideoBackground from '@/components/VideoBackground'
import Hero from '@/components/Hero'
import CursosDestacados from '@/components/CursosDestacados'
import Reveal from '@/components/Reveal'
import MetodoHome from '@/components/MetodoHome'
import ProfesoresHome from '@/components/ProfesoresHome'
import GaleriaEscuela from '@/components/GaleriaEscuela'
import CitaCentral from '@/components/CitaCentral'
import Testimonios from '@/components/Testimonios'
import Recitales from '@/components/Recitales'
import ContactoRapido from '@/components/ContactoRapido'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <VideoBackground />

      {/*
        z-index:1 wrapper sits above the fixed video.
        Hero  + CursosDestacados = transparent → video shows through.
        All sections below have opaque backgrounds → video is naturally hidden.
      */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <main id="main">
          {/* ── Video zone (transparent) ── */}
          <Hero />
          <CursosDestacados />

          {/* ── Each section + its internal elements stagger in ── */}
          <Reveal stagger><MetodoHome /></Reveal>
          <Reveal stagger><ProfesoresHome /></Reveal>
          <Reveal stagger><GaleriaEscuela /></Reveal>
          <Reveal stagger><CitaCentral /></Reveal>
          <Reveal><Testimonios /></Reveal>
          <Reveal><Recitales /></Reveal>
          <Reveal stagger><ContactoRapido /></Reveal>
        </main>
        <Footer />
      </div>
    </>
  )
}
