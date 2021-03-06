const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Route Objects
var user = require("./routes/userRoutes");
var category = require("./routes/categoryRoutes");
var project = require("./routes/projectRoutes");
var expense = require("./routes/expensesRoutes");

//Router Configuration
app.use("/user", user);
app.use("/category", category);
app.use("/project", project);
app.use("/expenses", expense);

app.listen(port, () => {
  console.log(`Serve live at http://localhost:${port}`);
});
