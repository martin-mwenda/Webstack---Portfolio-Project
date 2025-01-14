const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your email provider
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your_email@gmail.com', // Replace with your email
      pass: 'your_email_password', // Replace with your email password
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
