
const categories = require("../entities/categories");

function getProductsFromCategory(request, result) {
  categories.getProductsFromCategory(request.params.id)
  .then((rows) => {
    // result.json(rows);
    result.render("productsCategory", {myProductsCategory: rows});
  });
}

module.exports = getProductsFromCategory;
