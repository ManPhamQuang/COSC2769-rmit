var nodeoutlook = require("nodejs-nodemailer-outlook");

// Function to format input to ensure that it is in correct format
exports.escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

exports.sendEmail = async (email, link) => {
  const html = `
  <h2>Reset password from The Lab 🔑</h2>
  <a href="${link}">Click here to reset password</a>
  `;
  await nodeoutlook.sendEmail({
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIl_PASSWORD,
    },
    subject: "Reset Password from The Lab 🔑",
    from: process.env.EMAIL_USER,
    to: email,
    html: html,
  });
};
