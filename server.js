import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || user;

  if (!user || !pass) {
    return res
      .status(500)
      .json({ error: 'Configuration email manquante (EMAIL_USER/EMAIL_PASS).' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const text = [
    `Nouveau message depuis le formulaire de contact Maifelec :`,
    '',
    `Nom : ${name}`,
    `Téléphone : ${phone || 'Non renseigné'}`,
    `Email : ${email}`,
    '',
    'Message :',
    message,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"Site Maifelec" <${user}>`,
      to,
      replyTo: email,
      subject: `Nouveau contact Maifelec - ${name}`,
      text,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Erreur envoi email contact:', err);
    return res.status(500).json({ error: "Impossible d'envoyer l'email." });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`);
});

