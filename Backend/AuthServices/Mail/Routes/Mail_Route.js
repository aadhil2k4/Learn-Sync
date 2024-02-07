const express = require('express');
const Mail_Controller = require('../Controllers/Mail_Controller');
const router = express.Router();

router.post("/welcome", (req, res) => {
    Mail_Controller.Welcome_Controller(req, res);
})

router.post("/SignUpOTP", (req, res) => {
    Mail_Controller.SignUp_OTP_Controller(req, res);
})

router.post("/PassResetOTP", (req, res) => {
    Mail_Controller.Pass_Reset_OTP_Controller(req, res);
})

router.post("/groupjoin", (req, res) => {
    Mail_Controller.Sucessfull_Group_Join_Controller(req, res);
})

module.exports = router;