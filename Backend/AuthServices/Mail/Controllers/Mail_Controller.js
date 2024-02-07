const mail_services = require("../Modules/Mail_Module");
const Generate_OTP = require('../../../OTP/OTP_Generator');

const mail_controller = {
    Welcome_Controller : async(req, res) => {
        const {email, name, pwd} = req.body;
        const welcome_mail_response = await mail_services.Welcome_Mail(email, name, pwd);
        if(welcome_mail_response.responseCode == 200){
            res.status(200).json({message: welcome_mail_response.responseBody});
        }
        else{
            res.status(404).json({message: "Server Error in Sending Email !!"});
        }
    },

    SignUp_OTP_Controller : async(req, res) => {
        const { User_Mail, User_Name } = req.body;
        const otp = Generate_OTP(User_Name, User_Mail)
        if(otp == "Account Blocked. Try after Some Time !!"){
            res.status(100).json({message: "Account Blocked. Try after Some Time !!"});
        }
        else if(otp == "Minimum 1 Minute Gap Required Between OTP Requests"){
            res.status(100).json({message: "Minimum 1 Minute Gap Required Between OTP Requests"});
        }
        else{
            const SignUp_OTP_Mail_response = await mail_services.SingUp_OTP_Mail(otp, User_Mail, User_Name)
            if(SignUp_OTP_Mail_response.responseCode == 200){
                res.status(200).json({message: "Sign Up OTP Mail Sent Successfully"});
            }
            else{
                res.status(404).json({message: "Email ID Invalid"});
            }
        }
    },

    Pass_Reset_OTP_Controller : async (req, res) => {
        const { User_Mail, User_Name } = req.body;
        const otp = Generate_OTP(User_Name, User_Mail);
        if(otp == "Account Blocked. Try after Some Time !!"){
            res.status(100).json({message: "Account Blocked. Try after Some Time !!"});
        }
        else if(otp == "Minimum 1 Minute Gap Required Between OTP Requests"){
            res.status(100).json({message: "Minimum 1 Minute Gap Required Between OTP Requests"});
        }
        else{
            const Pass_Reset_OTP_Mail_response = await mail_services.Pass_Reset_OTP_Mail(otp, User_Mail, User_Name)
            if(Pass_Reset_OTP_Mail_response.responseCode == 200){
                res.status(200).json({message: "Password Reset OTP Mail Sent Successfully"});
            }
            else{
                res.status(404).json({message: "Email ID Invalid"});
            }
        }
    }
}

module.exports = mail_controller;