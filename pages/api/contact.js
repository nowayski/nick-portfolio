export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const password = process.env.password;
  const dummyEmail = process.env.dummyEmail;
  const realEmail = process.env.realEmail;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: dummyEmail,
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: dummyEmail,
    to: realEmail,
    subject: `${req.body.subject} from ${req.body.fullname} with email address ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.status(200);
}
