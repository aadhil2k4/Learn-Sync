const mail = require('nodemailer');
const welcome_mail_templte = require("../Templates/Welcome");
const SignUp_OTP_mail_template = require("../Templates/SignUp_OTP");
const Pass_Reset_OTP_mail_template = require('../Templates/Pass_Reset');
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
            responseBody = "Welcome Mail Sent Successfully";
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
    },

    SignUp_OTP_Mail : async(otp, user_mail, user_name) => {
        mailOptions = {
            from: 'naganathan1555@gmail.com',
            to: user_mail,
            subject: 'Learn-Sync :: OTP for User Verification',
            html: SignUp_OTP_mail_template(otp, user_name)
        };

        try {
            transporter.sendMail(mailOptions);
            responseBody = "OTP Mail for Sign Up sent Successfully"
        } catch (error) {
            console.log(error);
            responseCode = 100;
            responseBody = error;
        }

        const response = {
            responseCode,
            responseBody
        }
        return response;
    },

    Pass_Reset_OTP_Mail : async(otp, user_mail, user_name) => {
        mailOptions = {
            from: 'naganathan1555@gmail.com',
            to: user_mail,
            subject: 'Learn Sync :: OTP for Password Reset',
            html: Pass_Reset_OTP_mail_template(otp, user_name)
        };

        try {
            transporter.sendMail(mailOptions);
            responseBody = "OTP for Password Reset Sent Successfully"
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