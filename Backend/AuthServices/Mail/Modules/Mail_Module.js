const mail = require('nodemailer');
const welcome_mail_templte = require("../Templates/Welcome");
let mailOptions;
let responseCode = 200;
let responseBody = "";

var transporter = mail.createTransport({
    service: 'gmail',
    auth: {
      user: 'naganathan1555@gmail.com',
      pass: 'gppz lowj bijg rzer'
    }
});


const mailServices = {
    Welcome_Mail : async (user_mail, Name, Password) => {
        mailOptions = {
            from: 'naganathan1555@gmail.com',
            to: user_mail,
            subject: 'Welcome to Learn Sync, where Knowledge meets Synchronisation',
            html: welcome_mail_templte(user_mail, Name, Password)
        };

        try {
            transporter.sendMail(mailOptions);
            responseBody = "Mail Sent Successfully";
        } catch (error) {
            console.log(error);
            responseCode = 100;
            responseBody = error;
        }

        const response = {
            responseCode,
            responseBody
        };
        return response;
    }
}

module.exports = mailServices;