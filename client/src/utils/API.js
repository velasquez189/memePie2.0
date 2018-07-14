import axios from "axios";

export default {
    //Gets all memes
    getMemes: function() {
        console.log(`No darling I don't dance.`);
        return axios.get("/api/memeRoutes");
    },

    uploadMeme: function(data){
        console.log("new meme added to database");
        console.log(data);
        return axios.post("/api/memeRoutes", data);
    }
};