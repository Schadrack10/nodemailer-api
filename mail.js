const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., "Gmail" or "Outlook"
  port:465,
  secure:false,
  logger:true,
  debug:true,
  secureConnection:false,
  auth: {
    user: "schadrackbotombe@gmail.com", //add my gmail that we using
    pass: "kpea chbv cycr ryvn", //create app password on Gmail
  },
  tls:{
    rejectUnauthorized:true
  }
});

module.exports = transporter;
