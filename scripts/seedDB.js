const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/memePie"
);

const memeSeed = [
    {
        uploadedBy: "Mike",
        time: 1531183991687,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F077C6A95-E6F8-4501-868C-EF71BFF64E48.jpeg",
        tags:["dank", "family", "dog"],
        totalVote: 0
    },
    {
        uploadedBy: "Matt",
        time: 1531183994677,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F18328CE2-4886-42FA-84F4-3E21E0CE35F7.jpeg",
        tags:["lego", "breakfast"],
        totalVote: 0
    },
    {
        uploadedBy: "Andrea",
        time: 1531183996514,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F30393CDE-1558-489F-8B97-69445E6FE682.png",
        tags:["dank", "fleek", "dog"],
        totalVote: 0
    },
    {
        uploadedBy: "Matt",
        time: 1531183999444,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2FC15D9E06-0AC1-4606-8B36-0093DF6EE1B1.jpeg",
        tags:["arkansas", "coke"],
        totalVote: 0
    },
    {
        uploadedBy: "Mike",
        time: 1531184000156,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F438DBB8C-5EA3-4DE3-B861-C45ECB7C17FB.jpeg",
        tags:["dank", "family", "hamster"],
        totalVote: 0
    },
    {
        uploadedBy: "Andrea",
        time: 1531184137684,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F4BCA3BF1-F6CA-42AD-9D09-B3EADD566673.jpeg",
        tags:["family", "dog", "cold"],
        totalVote: 0
    },
    {
        uploadedBy: "Matt",
        time: 1531184198050,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F5FDC047D-8FAB-4011-829F-893FA5F7489D.png",
        tags:["green", "political", "hard"],
        totalVote: 0
    },
    {
        uploadedBy: "Mike",
        time: 1531184233853,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F7221DE78-8865-4F5D-9224-8CBC52DF02EE.png",
        tags:["dank", "young", "time"],
        totalVote: 0
    },
    {
        uploadedBy: "Andrea",
        time: 1531184239828,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2FA33R_0BZZ-qMNicC-ooctwHmc4UBvY8SQDauJ0dsTXk.png",
        tags:["sports", "pets", "school"],
        totalVote: 0
    },
    {
        uploadedBy: "Matt",
        time: 1531184246453,
        imgFilePath:"https://s3.us-east-2.amazonaws.com/memepieimages/memes%2F%2F6D77EFB4-0D05-4941-AB33-B3328F7EC26F.jpeg",
        tags:["project", "tv"],
        totalVote: 0
    }
]