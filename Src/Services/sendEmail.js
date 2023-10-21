import nodemailer from 'nodemailer';
async function  sendEmail(to,subject,html){
const transporter = nodemailer.createTransport({
service:'gmail',
  auth: {
    user: process.env.SENDEMAIL,
    pass: process.env.SENDPASSWORD,
  },
}); 

const info = await transporter.sendMail({
    from: `"Razan harashe👻" <${process.env.SENDEMAIL}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
}


export default sendEmail;
