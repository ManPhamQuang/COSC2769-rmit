const nodemailer = require("nodemailer");

// Function to format input to ensure that it is in correct format
exports.escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

exports.sendEmail = async (email, subject, text) => {
  // temporary email
  const account = await nodemailer.createTestAccount();

  // Create and send a email
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  });
};
