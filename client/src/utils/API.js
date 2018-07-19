import axios from "axios";

export default {
    //Gets all memes
    getMemes: function(data) {
        console.log(`No Garland I don't dance.`);
        return axios.post("/api/memeRoutes", data);
    },

    // Uploads a meme to the database
    uploadMeme: function(data){
        console.log("adding new meme to database...");
        console.log(data);
        return axios.post("/api/memeRoutes/upload", data);
    }
};