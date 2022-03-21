const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
