import React from "react";

const items = [
  {
    title: "Projeto Solar Industrial",
    desc: "Redução de custo energético em 40% para indústria têxtil.",
    img: "/assets/images/page-3.png",
  },
  {
    title: "Rede Estruturada Comercial",
    desc: "Infraestrutura de rede para shopping local.",
    img: "/assets/images/page-5.png",
  },
  {
    title: "Segurança Residencial",
    desc: "Instalação de CFTV e alarme para condomínio.",
    img: "/assets/images/page-7.png",
  },
  {
    title: "Outro Case",
    desc: "Detalhes técnicos e resultados",
    img: "/assets/images/page-4.png",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Cases & Portfólio</h2>
        <div className="portfolio-grid">
          {items.map((i) => (
            <div className="case" key={i.title}>
              <img src={i.img} alt={i.title} />
              <h4>{i.title}</h4>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
