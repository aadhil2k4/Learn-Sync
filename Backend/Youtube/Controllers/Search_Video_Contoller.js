const search_video = require('../Modules/Search_Video_Module');

const Search_Video = async(req, res) => {
    const { Search_Term } = req.body;
    const Search_Video_response = await search_video(Search_Term);
    if(Search_Video_response.responseCode == 200){
        res.status(200).json(Search_Video_response.responseBody.data.items);
    }
    else{
        res.status(404).json({message: "Could not fetch data from API"});
    }
}

module.exports = Search_Video;