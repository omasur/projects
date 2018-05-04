const PG = require("pg");

function findAll() {
  const client = new PG.Client();
  client.connect();

  return client.query(
    "SELECT * FROM categories",
    [])
    .then((result) => result.rows)
    .then((data) => {
      client.end();
      return data;
    })
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

function findById(id) {
  const client = new PG.Client();
  client.connect();

  return client.query(
    "SELECT * FROM categories where id=$1::uuid",
    [id])
    .then((result) => result.rows)
    .then((data) => {
      client.end();
      return data;
    })
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}


function getProductsFromCategory(id, callback) {
  const client = new PG.Client();
  client.connect();

  return client.query(
    "SELECT p.*, cat.label FROM products p inner join product_categories lcp on lcp.id = p.id inner join categories cat on cat.id=lcp.category_id where lcp.category_id=$1::uuid",
    [id])
    .then((result) => result.rows)
    .then((data) => {
      client.end();
      return data;
    })
    .catch((error) => {
      console.warn(error);
      client.end();
    });
}

function insertCategories(categories) {
  console.log("INSERT CATEGORIES : " + categories.length + " lines have to be inserted.");
  const client = new PG.Client();
  client.connect();

  let indice = 0;
  insertNextCategorie(client, categories, indice);
}

function insertNextCategorie(client, categories, indice) {
  client.query(
    "INSERT INTO categories (id, decathlon_id, label) values ($1::uuid, $2::integer, $3::varchar)",
    [categories[indice].id, categories[indice].decathlon_id, categories[indice].label],
    function(error, result) {
      if (error) {
        console.warn(error);
        client.end();
      } else {
        indice++;
        if (indice<categories.length) {
          insertNextCategorie(client, categories, indice);
        } else {
          console.log("INSERT CATEGORIES OK : " + indice + " lines inserted.");
          client.end();
        }
      }
    }
  );
}

module.exports = {
  findAll: findAll,
  findById: findById,
  getProductsFromCategory: getProductsFromCategory,
  insertCategories: insertCategories
}
