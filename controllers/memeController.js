const db = require("../models");

module.exports = {
    findFresh: function(req, res) {
        db.Meme
            .find(req.query)
            .sort({time: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findDank: function(req, res) {
        db.Meme
            .find(req.query)
            .sort({time: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByTag: function(req, res) {
        db.Meme
            .find({tags: req.params.tags})
            .sort({time: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Meme
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};