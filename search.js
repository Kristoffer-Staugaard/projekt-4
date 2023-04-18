// 1
const searchInput = document.querySelector('#search-input');
const productList = document.querySelector('.product-list');

// 2
searchInput.addEventListener('input', () => {
    // 3
    const searchValue = searchInput.value.toLowerCase();

    // 4
    const filteredProducts = Array.from(productList.children).filter(product => {
        // 4.1
        const productName = product.querySelector('h3').textContent.toLowerCase();
        // 4.2
        return productName.includes(searchValue);
    });

    // 5
    Array.from(productList.children).forEach(product => {
        if (filteredProducts.includes(product)) {
    
            product.style.display = 'block';
        } else {

            product.style.display = 'none';
        }
    });
});
