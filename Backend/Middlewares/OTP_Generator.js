const crypto = require('crypto');
const User = require('../Model/Users');

const generateOTP = async (user_name, user_mail) => {
    const OTP = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(OTP);
    try {
        const user = await User.findOne({ User_Name: user_name, User_Mail: user_mail});

        if(!user){
            user = new User({ User_Mail: user_mail, User_Name: user_name});
        }


        // Check if the User is Blocked. If so then check Block Timings and Update isBlocked  
        if(user.isBlocked){
            const currentTime = new Date();
            if(currentTime < user.Block_Until){
                return "Account Blocked. Try after Some Time !!";
            }
            else{
                user.isBlocked = false;
                user.OTP_Attempts = 0;
            }
        }


        // Check for minimum 1-minute gap between OTP requests
        const lastOTPTime = user.OTP_Created_Time;
        const currentTime = new Date();

        if(lastOTPTime && currentTime - lastOTPTime < 60000){
            return "Minimum 1 Minute Gap Required Between OTP Requests";
        }

        user.OTP = OTP;
        user.OTP_Created_Time = currentTime;
        user.OTP_Attempts += 1;

        user.save();

      } catch (err) {
        console.error(err);
      }
    return OTP;
};

module.exports = generateOTP;