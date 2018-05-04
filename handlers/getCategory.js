
const categories = require("../entities/categories");

function getCategory(request, result) {
  categories.findById(request.params.id)
  .then((rows) => {
    result.render("category", {myCategory: rows[0]});
  });
}

module.exports = getCategory;
