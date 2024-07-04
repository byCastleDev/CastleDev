// functions/sendEmail.js
require('dotenv').config();
const axios = require('axios');

const sendEmail = async (to, subject, text) => {
  try {
    const response = await axios.post(
      'https://api.resend.com/v1/emails',
      {
        from: 'byCastleDev@gmail.com',
        to,
        subject,
        text,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Email enviado:', response.data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

module.exports = sendEmail;