const express = require("express");
const app = express();
const PORT = 4000;
const transporter = require("./mail");

const sendEmail = (emailSender, emailReceiver, subj, mssg) => {

    
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: emailSender, //will make this into us gmail later
      to: emailReceiver,
      subject: subj,
      text: mssg,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve({ message: "email sent" });
      }
    });
  });
};

app.get("/", (req, res) => {
  //   console.log(transporter);
//   const { email } = req.params;

  const { emailSender, emailReceiver ,message, subject } = req.query;

  sendEmail(emailSender, emailReceiver, subject, message)
    .then(() => {
      res.json({ emailSender, emailReceiver, subject, message });
    })
    .catch((err) => res.status(500).send(err.message));
});

app.listen(PORT, () => console.log("listening to port " + PORT));

// http://localhost:4000?emailSender=schadrackbotombe@gmail.com&emailReceiver=kerenbototmbe125@gmail.com&message=hello there i would like to build an app&subject=App development