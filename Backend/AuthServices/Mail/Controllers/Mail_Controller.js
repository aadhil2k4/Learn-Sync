const mail_services = require("../Modules/Mail_Module");

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
    }
}

module.exports = mail_controller;