require("dotenv").config();
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const apiKey = process.env.APIKEY;
const port = process.env.PORT;
const artAmount = "&ps=100";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch(
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}${artAmount}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.render("home", {
        pageTitle: "Rijksmuseum",
        data: data.artObjects,
      });
    })
    .catch((err) => res.send(err));
});

app.get("/detail/:id", (req, res) => {
  let imgSize = 2000;
  const detailURL = `https://www.rijksmuseum.nl/api/nl/collection/`;
  let getURL = detailURL + `${req.params.pathname}?key=${apiKey}`;
  console.log(req);
  fetch(getURL).then(async (response) => {
    let data = await response.json();
    let object = data.artObject;
    res.render("detail", { object, imgSize });
  });
});

app.get("/search", (req, res) => {
  let getURL =
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}` +
    `&q=${req.query.q}${artAmount}`;

  fetch(getURL).then(async (response) => {
    let data = await response.json();
    let objects = data.artObjects;
    if (objects == 0) {
      res.render("error", {
        title: req.query.q,
      });
    } else {
      console.log(data);
      res.render("home", {
        pageTitle: "Rijksmuseum",
        data: data.artObjects,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
