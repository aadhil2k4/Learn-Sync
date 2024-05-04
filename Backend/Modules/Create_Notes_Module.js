const Notes = require('../Model/Notes');

const Create_Notes = async(notes_Id, user_Id, notes_Name) => {
    let responseCode = 200;
    let responseBody = "";

    try {
        const result = await Notes.insertMany({Notes_Id: notes_Id, User_Id: user_Id, Notes_Name: notes_Name});
        responseBody = "Notes Created Successfully";
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

module.exports = Create_Notes;