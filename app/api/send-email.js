// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, service, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Nouveau message de ${firstName} ${lastName}`,
            text: `Vous avez reçu un message de:
                   Nom: ${firstName} ${lastName}
                   E-mail: ${email}
                   Téléphone: ${phone}
                   Service: ${service}
                   Message: ${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Failed to send email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
