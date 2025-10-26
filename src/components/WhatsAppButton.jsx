import React from 'react'

// Número configurado para a Falcão Tecnologia (fornecido pelo usuário): 81 97102-0830 -> formato internacional sem sinais
const PHONE = '5581971020830'
const MESSAGE = encodeURIComponent('Olá, quero um orçamento')

export default function WhatsAppButton(){
  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`
  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .003 5.373.003 12 0 14.16.52 16.2 1.48 18l-1.16 4.2 4.3-1.13A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" fill="#fff"/>
        <path d="M17.2 14.1c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.7.15s-.8.97-.98 1.17c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.8-1.67-2.1-.18-.28-.02-.43.13-.58.13-.13.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2 0-.37-.05-.52-.05-.15-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53-.18-.02-.38-.02-.58-.02-.2 0-.52.07-.8.37-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.96 1.25 3.17.15.2 2.15 3.5 5.21 4.9 3.06 1.36 3.06.9 3.62.84.55-.07 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.08-.15-.28-.22-.58-.37z" fill="#25D366"/>
      </svg>
    </a>
  )
}
