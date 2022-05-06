var con = require("./../db.js");

var User = function (user) {
  this.userName = user.userName;
};

User.retrieveByUsername = (username, password, result) => {
  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, res) => {
      if (err) {
        console.log("Error Message: ", err);
        result(err, null);
        return;
      } else {
        if (res[0] != null) {
          result(null, res);
        } else {
          result(null, "Incorrect");
        }
      }
    }
  );
};

module.exports = User;
