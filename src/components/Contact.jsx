import React, { useState } from 'react'

export default function Contact(){
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Fale conosco</h2>
        <p>Solicite um orçamento sem compromisso. Atendemos residências, comércios e indústrias.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-card">
              <label>Nome</label>
              <input type="text" placeholder="Seu nome completo" required />
            </div>
            <div className="input-card">
              <label>E-mail</label>
              <input type="email" placeholder="Seu e-mail" required />
            </div>
          </div>
          <div className="form-row">
            <div className="input-card">
              <label>Telefone/WhatsApp</label>
              <input type="text" placeholder="(99) 99999-9999" />
            </div>
            <div className="input-card">
              <label>Tipo de projeto</label>
              <select>
                <option>Residência</option>
                <option>Comércio</option>
                <option>Indústria</option>
              </select>
            </div>
          </div>
          <div className="input-card">
            <label>Descreva seu projeto</label>
            <textarea placeholder="Detalhe suas necessidades" rows={4}></textarea>
          </div>
          <div className="form-actions">
            <a className="btn email" href="mailto:contato@falcaotecnologia.com">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight:8,verticalAlign:'middle'}} xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="4" fill="#e6f4ea"/>
                <path d="M5 7.5V13a1 1 0 001 1h8a1 1 0 001-1V7.5l-5 3.5-5-3.5z" fill="#0ea5a4"/>
                <path d="M15 6a1 1 0 00-1-1H6a1 1 0 00-1 1v.5l5 3.5 5-3.5V6z" fill="#0ea5a4"/>
              </svg>
              Enviar por e-mail
            </a>
          </div>
          {sent && <div className="form-success">Formulário enviado com sucesso! Entraremos em contato em breve.</div>}
        </form>
      </div>
    </section>
  )
}
