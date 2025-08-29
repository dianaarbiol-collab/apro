export const getAssociationEmailTemplate = (data: {
  nombre: string
  apellidos: string
  email: string
  telefono: string
  fechaNacimiento: string
  direccion: string
  codigoPostal: string
  ciudad: string
  provincia: string
  pais: string
  profesion: string
  experiencia: string
  motivacion: string
  contribucion: string
  habilidades: string
  disponibilidad: string
  referencias: string
  comentarios: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #8B4B6B; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #8B4B6B; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nueva Solicitud de Asociación - APROSEX</h1>
      </div>
      <div class="content">
        <h2>Datos Personales</h2>
        <div class="field"><span class="label">Nombre:</span> ${data.nombre}</div>
        <div class="field"><span class="label">Apellidos:</span> ${data.apellidos}</div>
        <div class="field"><span class="label">Email:</span> ${data.email}</div>
        <div class="field"><span class="label">Teléfono:</span> ${data.telefono}</div>
        <div class="field"><span class="label">Fecha de Nacimiento:</span> ${data.fechaNacimiento}</div>
        
        <h2>Dirección</h2>
        <div class="field"><span class="label">Dirección:</span> ${data.direccion}</div>
        <div class="field"><span class="label">Código Postal:</span> ${data.codigoPostal}</div>
        <div class="field"><span class="label">Ciudad:</span> ${data.ciudad}</div>
        <div class="field"><span class="label">Provincia:</span> ${data.provincia}</div>
        <div class="field"><span class="label">País:</span> ${data.pais}</div>
        
        <h2>Información Profesional</h2>
        <div class="field"><span class="label">Profesión:</span> ${data.profesion}</div>
        <div class="field"><span class="label">Experiencia:</span> ${data.experiencia}</div>
        
        <h2>Motivación y Contribución</h2>
        <div class="field"><span class="label">Motivación:</span> ${data.motivacion}</div>
        <div class="field"><span class="label">Contribución:</span> ${data.contribucion}</div>
        <div class="field"><span class="label">Habilidades:</span> ${data.habilidades}</div>
        <div class="field"><span class="label">Disponibilidad:</span> ${data.disponibilidad}</div>
        <div class="field"><span class="label">Referencias:</span> ${data.referencias}</div>
        
        ${data.comentarios ? `<h2>Comentarios Adicionales</h2><div class="field">${data.comentarios}</div>` : ""}
      </div>
      <div class="footer">
        <p>Este email fue enviado automáticamente desde el formulario de asociación de APROSEX</p>
        <p>Fecha: ${new Date().toLocaleDateString("es-ES")}</p>
      </div>
    </body>
    </html>
  `
}

export const getAssociationConfirmationTemplate = (nombre: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #8B4B6B; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; }
        .button { background-color: #8B4B6B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>¡Gracias por tu solicitud de asociación!</h1>
      </div>
      <div class="content">
        <p>Hola ${nombre},</p>
        
        <p>Hemos recibido tu solicitud de asociación a APROSEX. Nos alegra mucho tu interés en formar parte de nuestra organización.</p>
        
        <p><strong>¿Qué sigue ahora?</strong></p>
        <ul>
          <li>Revisaremos tu solicitud en los próximos 5-7 días laborables</li>
          <li>Te contactaremos para una breve entrevista (puede ser virtual)</li>
          <li>Te informaremos sobre el proceso de integración</li>
        </ul>
        
        <p>Mientras tanto, te invitamos a:</p>
        <ul>
          <li>Seguirnos en nuestras redes sociales</li>
          <li>Asistir a nuestros eventos públicos</li>
          <li>Leer nuestros recursos en la web</li>
        </ul>
        
        <p>Si tienes alguna pregunta, no dudes en contactarnos respondiendo a este email.</p>
        
        <p>¡Gracias por querer ser parte del cambio!</p>
        
        <p><strong>Equipo APROSEX</strong></p>
        
        <a href="https://aprosex.org" class="button">Visitar nuestra web</a>
      </div>
      <div class="footer">
        <p>APROSEX - Asociación de Profesionales del Sexo</p>
        <p>info@aprosex.org | Barcelona, España</p>
      </div>
    </body>
    </html>
  `
}

export const getContactEmailTemplate = (data: {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #8B4B6B; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #8B4B6B; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nuevo Mensaje de Contacto - APROSEX</h1>
      </div>
      <div class="content">
        <div class="field"><span class="label">Nombre:</span> ${data.nombre}</div>
        <div class="field"><span class="label">Email:</span> ${data.email}</div>
        <div class="field"><span class="label">Asunto:</span> ${data.asunto}</div>
        
        <h2>Mensaje:</h2>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8B4B6B;">
          ${data.mensaje.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div class="footer">
        <p>Este email fue enviado desde el formulario de contacto de APROSEX</p>
        <p>Fecha: ${new Date().toLocaleDateString("es-ES")}</p>
      </div>
    </body>
    </html>
  `
}

export const getNewsletterWelcomeTemplate = (email: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #8B4B6B; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; }
        .button { background-color: #8B4B6B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>¡Bienvenide a nuestro Newsletter!</h1>
      </div>
      <div class="content">
        <p>¡Hola!</p>
        
        <p>Gracias por suscribirte al newsletter de APROSEX. Ahora recibirás información sobre:</p>
        
        <ul>
          <li>Nuestros próximos eventos y talleres</li>
          <li>Recursos y guías útiles</li>
          <li>Noticias y actualidad del movimiento</li>
          <li>Oportunidades de participación</li>
        </ul>
        
        <p>Nos comprometemos a enviarte contenido valioso y respetar tu privacidad. Puedes darte de baja en cualquier momento.</p>
        
        <p>¡Gracias por ser parte de nuestra comunidad!</p>
        
        <p><strong>Equipo APROSEX</strong></p>
        
        <a href="https://aprosex.org" class="button">Explorar nuestra web</a>
      </div>
      <div class="footer">
        <p>APROSEX - Asociación de Profesionales del Sexo</p>
        <p>info@aprosex.org | Barcelona, España</p>
        <p>Te has suscrito con: ${email}</p>
      </div>
    </body>
    </html>
  `
}
