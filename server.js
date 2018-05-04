const getHome = require("./handlers/getHome");
const getMenu = require("./handlers/getMenu");
const getCategories = require("./handlers/getCategories");
const getCategory = require("./handlers/getCategory");
const getProductsFromCategory = require("./handlers/getProductsFromCategory");
const getProducts = require("./handlers/getProducts");
const getProduct = require("./handlers/getProduct");
const getBrands = require("./handlers/getBrands");
const getBrand = require("./handlers/getBrand");
// Pour utiliser nunjucks qui permet de faire de l'affichage avec des layouts et variables
const nunjucks = require("nunjucks");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Pour nunjucks
app.use(express.static("public"));
nunjucks.configure("views", {
  autoescape: true,
  express: app
});
// Pour indiquer ou se trouve le rép /views avec les layouts njk
app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", getHome);
app.get("/menu", getMenu);
app.get("/categories/:id/products", getProductsFromCategory);
app.get("/categories/:id", getCategory);
app.get("/categories", getCategories);
app.get("/brands/:id", getBrand);
app.get("/brands", getBrands);
app.get("/products/:id", getProduct);
app.get("/products", getProducts);
app.get("*", function(request, result) {
  result.send("page not found !!");
})

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
