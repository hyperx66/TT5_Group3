const Category = require("./../models/CategoryModel.js");

exports.findCategory = (req, res) => {
  const projectID = req.params.projectID;
  
  User.retrieveCategory(projectID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.status(200).json(data);
  });
};
