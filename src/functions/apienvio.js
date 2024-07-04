// src/pages/api/send-email.js
import sendEmail from './functions/sendEmail';

export async function post({ request }) {
  const { to, subject, text } = await request.json();

  try {
    await sendEmail(to, subject, text);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
