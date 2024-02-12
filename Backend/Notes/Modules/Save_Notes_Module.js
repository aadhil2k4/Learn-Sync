const Notes = require('../../Model/Notes');

const Save_Notes = async(notes_Id, content) => {
    let responseCode = 200;
    let responseBody = "";

    try {
        const result = await Notes.updateOne(
            { Notes_Id: notes_Id},
            {
                $set: { Content: content}
            }
        )
        responseBody = "Successfully Saved Notes";
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

module.exports = Save_Notes;