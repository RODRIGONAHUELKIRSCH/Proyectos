
// Función para enviar el correo electrónico
export const sendRecoveryEmail = async (email: string, userName: string, resetLink: string) => {
  const mailOptions = {
    from: '"Grupo Abbruzzese - Tecnologia Medica" <hechoamano.luky@gmail.com>', // Remitente
    to: email, // El destinatario
    subject: 'Grupo Abbruzzese - Recuperar contraseña', // Asunto del correo
    html: `
      <p>¡Hola ${userName}!</p>
      <br />
      <p>Su contraseña es: <strong>${resetLink}</strong></p>
      <br/>
      <p>Atentamente: <strong>Grupo Abbruzzese - Tecnologia Medica</strong></p>
    `,
  };


};

