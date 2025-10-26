import React from 'react'

export default function Hero(){
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1>Falcão Tecnologia</h1>
            <p className="lead">Projetos Elétricos • Energia Solar • Segurança Eletrônica — para residências, comércios e indústrias</p>
            <p>Mais de 15 anos entregando soluções confiáveis, eficientes e sustentáveis. Trabalhamos com projetos personalizados, instalação e manutenção com equipe especializada.</p>
            <div className="cta-row">
              <a className="btn primary" href="#contato">Solicitar orçamento</a>
              <a className="btn ghost" href="#servicos">Nossos serviços</a>
            </div>
          </div>
          <div className="hero-media">
            <img className="hero-image" src="/assets/images/page-1.png" alt="Portfólio Falcão Tecnologia - capa" />
            <div className="card">
              <h3>Atendimento especializado</h3>
              <p>Projetos sob medida para comércios, indústrias e residências — desde o orçamento até a entrega.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
