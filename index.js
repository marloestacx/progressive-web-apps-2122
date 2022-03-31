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
  const apiURL = `https://www.rijksmuseum.nl/api/nl/collection/`;
  let url = apiURL + `${req.params.pathname}?key=${apiKey}`;
  fetch(url).then(async (response) => {
    let data = await response.json();
    res.render("detail", { data: data.artObjects });
  });
});

app.get("/search", (req, res) => {
  let url =
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}` +
    `&q=${req.query.q}${artAmount}`;

  fetch(url)
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

app.get("/offline", (req, res) => {
  res.render("offline", {
    pageTitle: "offline",
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
