import nodemailer from 'nodemailer';

// Configuración del transportador de nodemailer para usar Gmail
const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  service: 'gmail',
  port:465,
  secure:true,
  
  auth: {
    user: 'hechoamano.luky@gmail.com', // Aquí tu correo electrónico de Gmail
    pass: 'msnonmuqybmqwopu',      // Aquí la contraseña de tu cuenta de Gmail
    
  },
});

// Función para enviar el correo electrónico
export const sendRecoveryEmail = async (email: string, userName: string, userPassword: string) => {
  const mailOptions = {
    from: '"Grupo Abbruzzese - Tecnologia Medica" <hechoamano.luky@gmail.com>', // Remitente
    to: email, // El destinatario
    subject: 'Grupo Abbruzzese - Recuperar contraseña', // Asunto del correo
    html: `
      <p>¡Hola ${userName}!</p>
      <br />
      <p>Su contraseña es: <strong>${userPassword}</strong></p>
      <br/>
      <p>Atentamente: <strong>Grupo Abbruzzese - Tecnologia Medica</strong></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

// import nodemailer from 'nodemailer';

// // Configuración del transportador de nodemailer para usar Gmail
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   service: 'gmail',
//   port: 587,
//   secure: false,
//   tls: {
//     rejectUnauthorized: false // Esto puede ser necesario dependiendo de tu configuración
//   },
//   auth: {
//     user: 'hechoamano.luky@gmail.com', // Tu correo electrónico de Gmail
//     pass: 'msnonmuqybmqwopu',           // Aquí la contraseña de tu cuenta de Gmail
//   },
// });

// // Función para enviar el correo electrónico
// export const sendRecoveryEmail = async (email: string, userName:string, userPassword:string) => {
//   const mailOptions = {
//     from: '"Grupo Abbruzzese - Tecnologia Medica" <hechoamano.luky@gmail.com>', // Remitente
//     to: email, // El destinatario
//     subject: 'Grupo Abbruzzese - Recuperar contraseña', // Asunto del correo
//     html: `
//       <p>¡Hola ${userName}!</p>
//       <br />
//       <p>Su contraseña es: <strong>${userPassword}</strong></p>
//       <br/>
//       <p>Atentamente: <strong>Grupo Abbruzzese - Tecnologia Medica</strong></p>
//     `,    headers: {
//         'Content-Type': 'text/html; charset=UTF-8', // Configurar charset UTF-8
//       },
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Correo enviado:', info.response);
//   } catch (error) {
//     console.error('Error al enviar el correo:', error);
//   }
// };
