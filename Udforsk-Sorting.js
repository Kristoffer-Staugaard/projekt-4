let cheapestButton = document.getElementById('cheapest-button');
cheapestButton.addEventListener('click', function() {
  // Find alle produkter på siden og gem dem i en variabel
  let products = document.querySelectorAll('.product-big');

  // Sorter produkter efter pris (laveste først)
  products = Array.prototype.slice.call(products);
  products.sort(function(a, b) {
    let aPrice = parseFloat(a.querySelector('.price').textContent);
    let bPrice = parseFloat(b.querySelector('.price').textContent);
    return aPrice - bPrice;
  });

  // Fjern alle produkter fra siden
  let productList = document.querySelector('.product-list');
  productList.innerHTML = '';

  // Tilføj de sorteret produkter til siden i sorterede rækkefølge
  products.forEach(function(product) {
    productList.appendChild(product);
  });

  // Klik på "køb" knappen på det billigste produkt
  let cheapestProduct = products[0];
  cheapestProduct.querySelector('.buy-button').click();
  });
