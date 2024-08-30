const nodemailer = require('nodemailer');
const createError = require('http-errors');

// Configure the email transport using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send personalized email alerts
exports.sendEmailAlert = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    });
  } catch (error) {
    throw createError(500, 'Error sending email: ' + error.message);
  }
};
