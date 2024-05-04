const TEMPLATE_Group = (group_name, userName) => {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Learn-Sync Successful Group Join</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        </style>
    </head>

    <body>
        <p>Dear ${userName},</p>
        <br />
        <p>Congratulations on joining group ${group_name}</p>
        <p>Collaborate, learn, and grow together. We're excited to have you on board!</p>
        <br>
        <p>Regards,</p>
        <p>Learn-Sync</p>
    </body>

    </html>`;
}

module.exports = TEMPLATE_Group;