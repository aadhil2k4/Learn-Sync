const Welcome_Template = (Email, Name, Password) => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Learn Sync - Your Gateway to Personalized Learning!</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        </style>
    </head>

    <body>
        <p>Dear ${Name},</p>
        <br />
        <p>Welcome to LearnSync, where knowledge meets synchronization! 🚀</p>
        <p>We're thrilled to have you on board and embark on this learning journey together.</p>
        <p>Whether you're a seasoned learner or just starting, LearnSync is designed to make your learning experience seamless, interactive, and tailored just for you.</p>
        <p>You have been registered to the app. Here is your credentials. Head to the login page to continue to login.</p>
        <br />
        <p>EmailID: ${Email}</p>
        <p>Password: ${Password}</p>
        <br />
        <p>Regards,</p>
        <p>Learn Sync</p>
    </body>

    </html>`;
}

module.exports = Welcome_Template;