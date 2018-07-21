import axios from "axios";

export default {
    //Gets all memes
    getMemes: function (data) {
        console.log(`No Garland I don't dance.`);
        return axios.post("/api/memeRoutes", data);
    },

    // Searches for a meme based on the query provided in the bar
    searchMemes: function (data) {
        console.log(`Searching for memes related to ${data.keywords}`);
        return axios.post("/api/memeRoutes/search", data);
    },
    // Uploads a meme to the database
    uploadMeme: function (data) {
        console.log("adding new meme to database...");
        console.log(data);
        return axios.post("/api/memeRoutes/upload", data);
    },
    toggleLike: function (data) {
        console.log("updating like for" + data);
        return axios.put("/api/memeRoutes/like", data);
    }
};