import React from "react";

export default function Hero() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Falcão Tecnologia</h1>
              <p className="hero-subtitle">Soluções completas em Projetos Elétricos, Energia Solar e Segurança Eletrônica</p>
              <ul className="hero-list">
                <li>Residências</li>
                <li>Comércios</li>
                <li>Indústrias</li>
              </ul>
              <p className="hero-desc">Há mais de 15 anos entregando projetos personalizados, instalação e manutenção com equipe especializada. Eficiência, confiança e sustentabilidade para o seu negócio ou lar.</p>
              <div className="cta-row">
                <a className="btn primary" href="#contato">Solicite seu orçamento</a>
                <a className="btn ghost" href="#services">Conheça nossos serviços</a>
              </div>
            </div>
            <div className="hero-media">
              <img className="hero-image" src="/assets/images/page-1.png" alt="Portfólio Falcão Tecnologia - capa" />
            </div>
          </div>
        </div>
      </header>
      <section className="specialized-service">
        <div className="container">
          <div className="specialized-card">
            <h3>Atendimento especializado</h3>
            <p>Projetos sob medida para comércios, indústrias e residências — desde o orçamento até a entrega.</p>
          </div>
        </div>
      </section>
    </>
  )
}
