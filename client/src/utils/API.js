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

    getDank: function (data) {
        console.log(`Getting the dankest memes on the whole flat earth`);
        return axios.post("/api/memeRoutes/dank", data);
    },

    searchUser: function (data) {
        console.log(`Searching for memes by ${data.username}`);
        return axios.post("/api/memeRoutes/user", data);
    },

    // Uploads a meme to the database
    uploadMeme: function (data) {
        console.log("adding new meme to database...");
        console.log(data);
        return axios.post("/api/memeRoutes/upload", data);
    },
    upVote: function (data) {
        console.log("updating like for" + data);
        return axios.put("/api/memeRoutes/like", data);
    },
    unDank: function (data) {
        console.log("unliking that shit");
        return axios.put('/api/memeRoutes/unDank', data);
    },
    downVote: function (data) {
        console.log("This meme ain't for you")
        return axios.put("/api/memeRoutes/down", data);
    },
    unStank: function (data) {
        console.log("i changed my mind");
        return axios.put('/api/memeRoutes/unStank', data);
    },
    // addLike: function (data) {
    //     console.log(`adding a vote to the total`);
    //     return axios.put('/api/memeRoutes/add', data);
    // }
    deleteMeme: function (id) {
        console.log(`API deleting ${id}`);
        return axios.delete("/api/memeRoutes/" + id);
    }
};