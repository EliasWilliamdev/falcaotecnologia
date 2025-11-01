import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Falcão Tecnologia</h3>
            <p>Projetos Elétricos • Energia Solar • Segurança Eletrônica</p>
          </div>
          <div>
            <p>Endereço: Recife - PE</p>
            <p>Email: contato@falcaotecnologia.com</p>
          </div>
        </div>
        <div className="credit">
          © {new Date().getFullYear()} Falcão Tecnologia — Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}
