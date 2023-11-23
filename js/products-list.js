
async function fetchAndRenderProducts() {
    try {
        const response = await fetch('api/products.json');
        const products = await response.json();
        renderProduct(products);

        function renderProduct(products) {
            const productsContainer = document.querySelector('.catalog__content');
            productsContainer.innerHTML = '';
            for (const product of products) {
                productsContainer.innerHTML +=
                    `
                    <div class="card border-light mb-3" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="Kaktus">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price} uah</p>
                            <button class="btn btn-primary">Buy</button>
                        </div>
                    </div>`;
            }
        }
        
        // Запускаємо отримання продуктів і їх рендерінг
        fetchAndRenderProducts();
        
    } catch (error) {
        console.error('Error fetching or rendering products:', error);
    }
}


