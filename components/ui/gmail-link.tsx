'use client';

import React, { useEffect, useState } from 'react';

interface GmailLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Asunto por defecto del correo */
  subject?: string;
  /** Cuerpo/Mensaje preescrito del correo */
  body?: string;
}

export function GmailLink({
  subject = "Solicitud de Diagnóstico - Obsidian Void",
  body = "Hola equipo de Obsidian Void,\n\nEscribo porque me gustaría obtener más información sobre sus servicios y solicitar una exploración para mi negocio.\n\n[Cuéntanos brevemente sobre tu rubro o problema actual]\n...",
  className,
  children,
  ...props
}: GmailLinkProps) {
  
  // Usamos mailto como base segura de enlace fallback para evitar que robots rastreen un link roto
  const mailtoUrl = `mailto:obsidianvoidstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si no estamos en el cliente, ignoramos
    if (typeof window === 'undefined') return;

    // Detectar si el usuario está en móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // En móviles dejamos que mailto: actúe para abrir app de Gmail nativa, no hacemos preventDefault
      return; 
    } else {
      // En computadora evitamos 'mailto' para que no abra Outlook/Windows Mail y forzamos Gmail Web
      e.preventDefault();
      const query = new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: 'obsidianvoidstudio@gmail.com',
        su: subject,
        body: body
      }).toString();
      
      window.open(`https://mail.google.com/mail/?${query}`, '_blank');
    }
  };

  return (
    <a
      href={mailtoUrl}
      onClick={handleClick}
      target={typeof window !== 'undefined' && !(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
