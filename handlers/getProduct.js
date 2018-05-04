
const products = require("../entities/products");

function getProduct(request, result) {
  products.findById(request.params.id)
  .then((rows) => {
    // result.json(rows);
    result.render("product", {myProduct: rows});
  });
}

module.exports = getProduct;
