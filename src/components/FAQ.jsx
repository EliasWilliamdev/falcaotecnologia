import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quais regiões a Falcão Tecnologia atende?",
      answer: "Atendemos em todo o estado de Pernambuco, com foco principal na região metropolitana do Recife e cidades vizinhas."
    },
    {
      question: "Qual o prazo médio para instalação de um sistema de energia solar?",
      answer: "O prazo médio varia de 15 a 30 dias, dependendo da complexidade do projeto, incluindo aprovação junto à concessionária de energia."
    },
    {
      question: "Vocês oferecem garantia para os serviços?",
      answer: "Sim, oferecemos garantia de 1 ano para serviços de instalação e seguimos as garantias dos fabricantes para os equipamentos, que podem variar de 5 a 25 anos."
    },
    {
      question: "Como funciona o orçamento para projetos elétricos?",
      answer: "Realizamos uma visita técnica para avaliar as necessidades específicas do seu projeto. Com base nessa avaliação, elaboramos um orçamento detalhado sem compromisso."
    },
    {
      question: "É possível financiar os sistemas de energia solar?",
      answer: "Sim, trabalhamos com diversas linhas de financiamento específicas para energia solar, com condições especiais e parcelas que podem ser menores que sua conta de luz atual."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="section-title">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;