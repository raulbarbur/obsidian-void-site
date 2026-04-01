import React from 'react';

interface GmailLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Asunto por defecto del correo */
  subject?: string;
  /** Cuerpo/Mensaje preescrito del correo */
  body?: string;
}

export function GmailLink({
  subject = "Solicitud de Diagnóstico - Obsidian Void",
  body = "Hola equipo de Obsidian Void,\n\nEscribo porque me gustaría obtener más información sobre sus servicios de ingeniería y solicitar una exploración para mi negocio.\n\n[Cuéntanos brevemente sobre tu rubro o problema actual]\n...",
  className,
  children,
  ...props
}: GmailLinkProps) {
  // Construimos dinámicamente el enlace de Gmail
  const query = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: 'obsidianvoidstudio@gmail.com',
    su: subject,
    body: body
  }).toString();

  const href = `https://mail.google.com/mail/?${query}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
