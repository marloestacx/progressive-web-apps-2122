require("dotenv").config();
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const compression = require("compression");
const app = express();

const apiKey = process.env.APIKEY;
const port = process.env.PORT;
const artAmount = "&ps=10";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(compression());

// home page
app.get("/", (req, res) => {
  fetch(
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}${artAmount}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.render("home", {
        pageTitle: "Rijksmuseum",
        data: data.artObjects,
      });
    })
    .catch((err) => res.send(err));
});

// detail page
app.get("/detail/:id", function (req, res) {
  fetch(
    `https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${apiKey}`
  )
    .then(async (response) => {
      console.log(response);
      const artWorks = await response.json();
      res.render("detail", {
        pageTitle: "Art" + req.params.id,
        data: artWorks.artObject,
      });
    })
    .catch((err) => res.send(err));
});


// search page
app.get("/search", (req, res) => {
  let url =
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}${artAmount}` +
    `&q=${req.query.q}${artAmount}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let searchData = data.artObjects;
      if (searchData == 0) {
        res.render("error", {
          pageTitle: req.query.q,
          error: "Helaas niks gevonden, zoek opnieuw",
        });
      } else {
        res.render("home", {
          pageTitle: "Rijksmuseum",
          data: searchData,
        });
      }
    })
    .catch((err) => res.send(err));
});


// offline page
app.get("/offline", (req, res) => {
  res.render("offline", {
    pageTitle: "offline",
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
