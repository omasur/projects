
const categories = require("../entities/categories");

function getCategories(request, result) {
  categories.findAll()
  .then((rows) => {
    result.render("categories", {myCategories: rows});
  });
}

module.exports = getCategories;
