const Save_Notes_Module = require('../Modules/Save_Notes_Module');

const Save_Notes = async(req, res) => {
    const { Notes_Id, Content } = req.body;
    const Save_Notes_response = await Save_Notes_Module(Notes_Id, Content);
    if(Save_Notes_response.responseCode == 200){
        res.status(200).json({message: "Successfully Saved Notes"});
    }
    else{
        res.status(100).json({message: "Error in Saving Notes"});
    }
}

module.exports = Save_Notes;