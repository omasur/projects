function getMenu(request, result) {
  const page = "<html><body>"
  + "<a href='http://localhost:3000/categories' target='_blank'>All categories</a></br>"
  + "<a href='http://localhost:3000/categories/b6605363-bf6b-457c-b616-84de2a6594d9/' target='_blank'>1 category</a></br>"
  + "<a href='http://localhost:3000/categories/b6605363-bf6b-457c-b616-84de2a6594d9/products' target='_blank'>product from 1 category</a></br></br>"
  + "<a href='http://localhost:3000/brands' target='_blank'>All brands</a></br>"
  + "<a href='http://localhost:3000/brands/05d90df9-16ea-403f-8404-d0ffd421cb24' target='_blank'>1 brand</a></br></br>"
  + "<a href='http://localhost:3000/products' target='_blank'>All products</a></br>"
  + "<a href='http://localhost:3000/products/6e9accf7-7184-45c9-9412-85bcffc2ca77' target='_blank'>1 product</a></br>"
  + "</body></html>";

  result.send(page);
}

module.exports = getMenu;
