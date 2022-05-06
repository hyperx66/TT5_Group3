var con = require("./../db.js");

var Project = function (project) {
  this.projectID = project.projectID;
  this.projectTitle = project.projectTitle;
  this.username = project.username;
};

Project.retrieveProject = (username, result) => {
  con.query(
    "SELECT * FROM project WHERE username = ?",
    [username],
    (err, res) => {
      if (err) {
        console.log("Error Message: ", err);
        result(err, null);
        return;
      } else {
        result(null, { res});
      }
    }
  );
};

module.exports = Project;
