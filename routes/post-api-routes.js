var db = require("../models");

module.exports = function (app) {
      // Get all examples
      //   app.get("/api/examples", function(req, res) {
      //     db.Example.findAll({}).then(function(dbExamples) {
      //       res.json(dbExamples);
      //     });
      //   });

      // Create a new post
      app.post("/api/postInfo", function (req, res) {
            console.log("req.body", req.body);
            db.Post.create(req.body).then(function (dbPost) {
                  res.json(dbPost);
            });
      });

      // Delete an example by id
      //   app.delete("/api/examples/:id", function(req, res) {
      //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      //       res.json(dbExample);
      //     });
      //   });
};
