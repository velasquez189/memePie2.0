const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var memeScheme = new Schema({
    uploadedBy: {
        type: String,
        trim: false,
        required: "Must be logged-in"
    },
    time: {
        type: Date,
        default: Date.now
    },
    imgFilePath: {
        type: String,
    },
    tags: {
        type: Array,
        trim: false,
    },
    totalVote: {
        type: Number,
        default: 0
    }
})


// us-east-2:75d82260-76ff-4222-8eee-9eabe61c1e91
// params = {AccessToken: "eyJraWQiOiJEcE5ITVRLUkt4ak5YckdWUWRuYVgwWU5DQzdyaX…olR1xkFE7Bz5IPAWvGZg_vGaF8Pf2z0OsnfEz2jEPsbBthdaw"}

// us-east-2:26929d87-e362-492c-a5ca-8994be7a95a9
// params = {ClientId: "7gi6ch1u4kfd9ibnmbsn67hmgb", Username: "testUser", Password: "testUser1", UserAttributes: Array(2), ValidationData: null}
// %7B%22arn%22%3A%22arn%3Aaws%3Aiam%3A%3A691063051205%3Aroot%22%2C%22alias%22%3A%22%22%2C%22username%22%3A%22MLMcCloskey%22%2C%22keybase%22%3A%22R1DKzdGgPxP65kjJBB9hRFTNNFR0CfiHW0rXjevf1D4%5Cu003d%22%2C%22issuer%22%3A%22http%3A%2F%2Fsignin.aws.amazon.com%2Fsignin%22%7D


const Scheme = mongoose.model("Scheme", memeScheme);

module.exports = Scheme;