
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
                <p>Soluções tecnológicas integradas e personalizadas para residências, comércios e indústrias com excelência e inovação.</p>
              </div>
              <div className="main-service-card">
                <h3>Projetos Elétricos</h3>
                <p>Projetos elétricos completos com cálculos precisos, memorial descritivo e documentação técnica detalhada para garantir segurança e eficiência.</p>
              </div>
              <div className="main-service-card">
                <h3>Energia Solar</h3>
                <p>Soluções sustentáveis em energia solar fotovoltaica: análise detalhada de viabilidade, projeto personalizado, instalação profissional e manutenção preventiva.</p>
              </div>
              <div className="main-service-card">
                <h3>Segurança Eletrônica</h3>
                <p>Sistemas avançados de CFTV, controle de acesso inteligente, alarmes de última geração e monitoramento 24h, totalmente integrados e acessíveis remotamente.</p>
              </div>
              <div className="main-service-card">
                <h3>Automação Residencial</h3>
                <p>Transforme sua casa em um ambiente inteligente com soluções de automação que proporcionam conforto, economia e praticidade no seu dia a dia.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services"><Services /></section>
        <section id="about">
          <div className="container">
              <h2 className="section-title">Sobre a Falcão Tecnologia</h2>
              <p style={{textAlign:'center',marginBottom:'32px'}}>A Falcão Tecnologia é especializada em Projetos Elétricos, Energia Solar, Segurança Eletrônica e Automação Residencial, oferecendo soluções tecnológicas integradas e personalizadas para residências, comércios e indústrias. Com mais de 10 anos de experiência no mercado, nossa equipe de profissionais qualificados está comprometida em entregar projetos de alta qualidade que atendam às necessidades específicas de cada cliente.</p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Anos de experiência</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projetos concluídos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Clientes satisfeitos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Suporte técnico</span>
                </div>
              </div>
              
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
        
        {/* Seção de FAQ */}
        <section id="faq">
          <div className="container">
            <FAQ />
          </div>
        </section>
        
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
              <p>Projetos Elétricos • Energia Solar • Segurança Eletrônica • Automação Residencial</p>
              <p>Endereço: Recife - PE</p>
              <p>Email: contato@falcaotecnologia.com</p>
              <div className="credit">© {new Date().getFullYear()} Falcão Tecnologia — Todos os direitos reservados</div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <ThemeToggle />
    </div>
  )
}
