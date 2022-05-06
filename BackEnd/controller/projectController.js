const User = require("./../models/projectModel.js");

exports.findProject = (req, res) => {
  const projectID = req.params.projectID;

  User.retrieveProject(username, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.status(200).json(data);
  });
};
