import axios from "axios";

export default {
    //Gets all memes
    getMemes: function() {
        return axios.get("/api/pepeRoutes");
    }
};
