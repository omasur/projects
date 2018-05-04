const PG = require("pg");

function insertLienCategoriesProducts(category_id, lienCategoriesProducts, done) {
  //console.log("INSERT lienCategoriesProducts : " + category_id + " : "+ lienCategoriesProducts.length + " lines have to be inserted.");
  if (lienCategoriesProducts.length > 0) {
    //console.log(lienCategoriesProducts);
    const client = new PG.Client();
    client.connect();

    let indice = 0;
    insertNextLienCategorieProduct(client, category_id, lienCategoriesProducts, indice, done);
  } else {
    done();
  }
}

function insertNextLienCategorieProduct(client, category_id, lienCategoriesProducts, indice, done) {
  client.query(
    "INSERT INTO product_categories (id, category_id) values ($2::uuid, $1::uuid)",
    [category_id, lienCategoriesProducts[indice].id],
    function(error, result) {
      if (error) {
        console.warn(error);
        client.end();
      } else {
        indice++;
        if (indice<lienCategoriesProducts.length) {
          insertNextLienCategorieProduct(client, category_id, lienCategoriesProducts, indice, done);
        } else {
          //console.log("INSERT lienCategoriesProducts OK : " + indice + " lines inserted.");
          client.end();
          done();
        }
      }
    }
  );
}

module.exports = {
  insertLienCategoriesProducts: insertLienCategoriesProducts
};
