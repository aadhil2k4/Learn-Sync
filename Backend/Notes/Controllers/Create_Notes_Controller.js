const Create_Notes_Module = require('../Modules/Create_Notes_Module');

const Create_Notes = async(req, res) => {
    const { Notes_Id, User_Id, Notes_Name } = req.body;
    const Create_Notes_response = await Create_Notes_Module(Notes_Id, User_Id, Notes_Name);
    if(Create_Notes_response.responseCode == 200){
        res.status(200).json({message: Create_Notes_response.responseBody});
    }
    else{
        res.status(404).json({message: "Error in Creating Notes"});
    }
}

module.exports = Create_Notes;