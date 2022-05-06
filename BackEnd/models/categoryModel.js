var con = require("./../db.js");

var Category = function (category) {
  this.categoryID = category.categoryID;
  this.categoryName = category.categoryName;
  this.projectID = category.projectID;
};

Category.retrieveCategory = (projectID, result) => {
  con.query(
    "SELECT * FROM category WHERE projectID = ?",
    [projectID],
    (err, res) => {
      if (err) {
        console.log("Error Message: ", err);
        result(err, null);
        return;
      } else {
        result(null, {res});
      }
    }
  );
};

module.exports = Category;
