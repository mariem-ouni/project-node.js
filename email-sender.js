// Import Nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using the SMTP transport protocol
let transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service (you can change to another service if needed)
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-password' // Your email password (or app-specific password if 2FA is enabled)
  }
});

// Set up email data (sender, receiver, subject, and body)
let mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'receiver-email@example.com', // List of recipients
  subject: 'Test Email from Node.js', // Subject line
  text: 'Hello! This is a test email sent using Node.js and Nodemailer.', // Plain text body
  html: '<h1>Hello!</h1><p>This is a test email sent using Node.js and <strong>Nodemailer</strong>.</p>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log('Error while sending email:', error);
  }
  console.log('Email sent successfully:', info.response);
});
