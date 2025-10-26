import React from 'react'

export default function Contact(){
  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Fale conosco</h2>
        <p>Solicite um orçamento sem compromisso. Atendemos residências, comércios e indústrias.</p>
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Formulário enviado (exemplo)')}}>
          <div className="form-row">
            <input placeholder="Nome" required />
            <input placeholder="E-mail" type="email" required />
          </div>
          <div className="form-row">
            <input placeholder="Telefone/WhatsApp" />
            <select>
              <option>Residência</option>
              <option>Comércio</option>
              <option>Indústria</option>
            </select>
          </div>
          <textarea placeholder="Descreva seu projeto / necessidades" rows={4}></textarea>
          <div className="form-actions">
            <button className="btn primary" type="submit">Enviar</button>
            <a className="btn ghost" href="mailto:contato@falcaotecnologia.com">Enviar por e-mail</a>
          </div>
        </form>
      </div>
    </section>
  )
}
