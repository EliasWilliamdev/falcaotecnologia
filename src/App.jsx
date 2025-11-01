
import React from 'react'
import { Purposes } from './components/Purposes'
import Hero from './components/Hero'
import Services from './components/Services'
import Why from './components/Why'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="app-root flex">
      <Purposes
        title="Missão"
        paragraph={
          "Transformar  tecnologia  em\nconfiança  e  tranquilidade\noferecendo  soluções\ninteligentes,  seguras  e\nsustentáveis  que  façam  a\ndiferença na vida de nossos\nclientes."
        }
      />
      <Purposes
        title="Visão"
        paragraph={
          "Ser referência regional em\nsegurança eletrônica, redes\ne energia renovável,\nimpulsionando inovação,\nexcelência e crescimento\ncontínuo, sempre à frente\ndas necessidades do\nmercado."
        }
      />
      <Purposes
        title="Valores"
        paragraph={
          "Nos guiamos pela ética e\npela qualidade, unindo\ninovação e responsabilidade\npara entregar segurança,\nconexão e energia com\neficiência e sustentabilidade."
        }
      />
    </div>
  );
}
