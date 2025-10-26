import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about">{
          /* Quem Somos placeholder */
        }
          <div className="container">
            <h2>Quem Somos</h2>
            <p>A Falcão Tecnologia é especializada em Projetos Elétricos, Energia Solar e Segurança Eletrônica, oferecendo soluções completas para residências e empresas.</p>
          </div>
        </section>
        <section id="why"><Why /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
