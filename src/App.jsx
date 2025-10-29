
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

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        {/* Grid de serviços principais */}
        <section id="main-services">
          <div className="container">
            <div className="main-services-grid">
              <div className="main-service-card">
                <h3>Nossos Serviços</h3>
                <p>Soluções completas para residências, comércios e indústrias.</p>
              </div>
              <div className="main-service-card">
                <h3>Projetos Elétricos</h3>
                <p>Projetos elétricos residenciais, comerciais e industriais com cálculo, memorial e documentação técnica.</p>
              </div>
              <div className="main-service-card">
                <h3>Energia Solar</h3>
                <p>Soluções em energia solar fotovoltaica: estudo de viabilidade, projeto, instalação e manutenção.</p>
              </div>
              <div className="main-service-card">
                <h3>Segurança Eletrônica</h3>
                <p>Sistemas de CFTV, controle de acesso, alarmes e monitoramento, integrados e gerenciáveis remotamente.</p>
              </div>

            </div>
          </div>
        </section>
        <section id="services"><Services /></section>
        <section id="about">
          <div className="container">
              <p style={{textAlign:'center',marginBottom:'32px'}}>A Falcão Tecnologia é especializada em Projetos Elétricos, Energia Solar e Segurança Eletrônica, oferecendo soluções completas para residências e empresas.</p>
              <div className="purposes-group">
                <Purposes 
                  title = 'Missão'
                  paragraph = {'Transformar tecnologia em confiança e tranquilidade, oferecendo soluções inteligentes, seguras e sustentáveis que realmente impactam a vida dos nossos clientes.'}
                />
                <Purposes 
                  title = 'Visão'
                  paragraph = {'Ser referência regional em segurança eletrônica, redes e energia renovável, impulsionando inovação, excelência e crescimento contínuo, sempre à frente das necessidades do mercado.'}
                />
                <Purposes 
                  title = 'Valores'
                  paragraph = {'Agimos com ética, qualidade e responsabilidade, unindo inovação para entregar segurança, conexão e energia com eficiência e sustentabilidade.'}
                />
              </div>
          </div>
        </section>
        {/* Removido bloco 'Por que escolher' daqui */}
        <section id="portfolio"><Portfolio /></section>
        {/* Novo bloco final da página: grid moderno */}
        <section id="final-block">
          <div className="container">
            <div className="final-grid-3" style={{marginTop:'24px'}}>
              <div className="final-col">
                <Testimonials />
              </div>
              <div className="final-col">
                <Why />
              </div>
              <div className="final-col">
                <Contact />
              </div>
            </div>
            <div className="final-footer-card" style={{marginTop:'32px'}}>
              <h3>Falcão Tecnologia</h3>
              <p>Projetos Elétricos • Energia Solar • Segurança Eletrônica</p>
              <p>Endereço: Recife - PE</p>
              <p>Email: contato@falcaotecnologia.com</p>
              <div className="credit">© {new Date().getFullYear()} Falcão Tecnologia — Todos os direitos reservados</div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  )
}
