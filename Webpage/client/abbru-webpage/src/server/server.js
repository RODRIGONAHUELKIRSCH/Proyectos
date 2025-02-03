// import express from 'express';
// import { sendRecoveryEmail } from '../apiconnect/emailsender'; // Asegúrate de que la ruta sea correcta

// const app = express();
// app.use(express.json());

// app.post('/api/send-email', async (req, res) => {
//   const { email, userName, userPassword } = req.body;

//   try {
//     await sendRecoveryEmail(email, userName, userPassword);
//     res.status(200).send({ message: 'Correo enviado exitosamente' });
//   } catch (error) {
//     console.error('Error al enviar el correo:', error);
//     res.status(500).send({ message: 'Error al enviar el correo' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`);
// });