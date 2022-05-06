const User = require("./../models/userModel.js");

exports.findUserByUsername = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.retrieveByUsername(username, password, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Incorrect username or password",
      });
    else {
      if (data != "Incorrect") {
        res.status(200).json([{ message: "Successful", data }]);
        
      } else {
        res.status(200).json([{ message: "User not found" }]);
      }
    }
  });
};
