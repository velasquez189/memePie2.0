const db = require("../models");

module.exports = {
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
};