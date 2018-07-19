const db = require("../models");

module.exports = {
    findFresh: function(req, res) {
        console.log("fresh");
        console.log(req.body.query);
        db.Meme
            .find()
            .skip(req.body.query)
            .limit(12)
            .sort({time: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findDank: function(req, res) {
        console.log('dank');
        db.Meme
            .find(req.query)
            .sort({time: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByTag: function(req, res) {
        console.log('searching for');
        db.Meme
            .find({tags: req.params.tags})
            .sort({time: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log('new meme loading');
        db.Meme
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};