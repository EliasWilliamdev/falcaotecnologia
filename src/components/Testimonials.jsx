import React from "react";

const quotes = [
  { name: "Empresa X", text: "Profissionalismo e entrega dentro do prazo." },
  { name: "Residência Y", text: "Equipe atenciosa e suporte pós-instalação." },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="test-grid">
          {quotes.map((q) => (
            <blockquote key={q.name} className="quote">
              <p>“{q.text}”</p>
              <footer>- {q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
