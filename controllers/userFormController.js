const db = require("../models");

// Defining methods for the userFormController
module.exports = {
  findAll: function (req, res) {
    db.UserForm
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.UserForm
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.UserForm
      .create(req.body)
      .then(dbModel => {
        db.User
          .findById(req.body._user, function (err, user) {
            console.log("DB_MODEL: %s", dbModel);
            user.userForms.push(dbModel);
            user.save(err => res.json(dbModel));
          })
        
      }
      )
      .catch(err => res.status(422).json(err));


  },
  update: function (req, res) {
    db.UserForm
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserForm
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};