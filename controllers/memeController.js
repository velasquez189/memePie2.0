const db = require("../models");

module.exports = {
    findFresh: function (req, res) {
        console.log("fresh");
        console.log(req.body.query);
        db.Meme
            .find({})
            // .skip(req.body.query)
            .limit(req.body.query)
            .sort({ time: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findDank: function (req, res) {
        console.log('dank');
        db.Meme
            .find({})
            .limit(req.body.query)
            .sort({ totalVote: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByTag: function (req, res) {
        console.log('searching for');
        console.log(req.body.keywords)
        db.Meme
            .find({ tags: req.body.keywords })
            .limit(req.body.query)
            .sort({ time: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUser: function (req, res) {
        console.log('searching for');
        console.log(req.body.username)
        db.Meme
            .find({ uploadedBy: req.body.username })
            .limit(req.body.query)
            .sort({ time: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log('new meme loading');
        db.Meme
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    toggleLike: function (req, res) {
        console.log('changed the like');
        console.log(req.body.id, req.body.username)
        db.Meme
            .findOneAndUpdate({ _id: req.body.id },
                                { $inc: { totalVote: 1 },
                                 $push: { likedBy: req.body.username } },
            )
            // }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    delete: function(req, res){
        console.log(`banishing ${req} to hell`);
        console.log("andreaaaa");
        db.Meme
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
    }
};