const { google } = require('googleapis');
const responseCode = 200;
const responseBody = "";

const Search_Video = async(Search_Term) => {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const youtube = google.youtube({
            version: 'v3',
            auth: apiKey
        });

        const responseBody = await youtube.search.list({
            part: 'snippet',
            maxResults: 5,
            q: Search_Term
        });

        const response = {
            responseCode,
            responseBody
        };
        return response;
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

module.exports = Search_Video;