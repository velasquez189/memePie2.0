const db = require("../models");

module.exports = {
<<<<<<< HEAD
  findFresh: function (req, res) {
    db.Meme
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDank: function (req, res) {
    db.Meme
      .find(req.query)
      .sort({
        totalVote: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTag: function (req, res) {
    db.Meme
      .find({
        tags: req.params.tags
      })
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
=======
    findFresh: function(req, res) {
        console.log("fresh");
        db.Meme
            .find(req.query)
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
>>>>>>> AWS
};