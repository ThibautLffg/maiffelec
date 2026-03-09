import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, phone, email, message } = (req as any).body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Merci de remplir au minimum votre nom, votre email et votre message.' });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || user;

  if (!user || !pass) {
    return res.status(500).json({ error: 'Configuration email manquante (EMAIL_USER/EMAIL_PASS).' });
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
    console.error('Erreur envoi email (api/contact):', err);
    return res.status(500).json({ error: "Impossible d'envoyer l'email." });
  }
}

