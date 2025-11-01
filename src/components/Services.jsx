import React from "react";

const services = [
  {
    title: "Projetos Elétricos",
    desc: "Projetos elétricos residenciais, comerciais e industriais com cálculo, memorial e documentação técnica.",
  },
  {
    title: "Energia Solar",
    desc: "Soluções em energia solar fotovoltaica: estudo de viabilidade, projeto, instalação e manutenção.",
  },
  {
    title: "Segurança Eletrônica",
    desc: "Sistemas de CFTV, controle de acesso, alarmes e monitoramento, integrados e gerenciáveis remotamente.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="muted">
          Soluções completas para residências, comércios e indústrias.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
