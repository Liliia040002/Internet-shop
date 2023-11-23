const selectElement = document.getElementById('plants');

selectElement.addEventListener('change', function() {
    const selectedValue = this.value;


    sortProduct(selectedValue);
});

function sortProduct(selectedValue) {
    fetch('api/products.json')
  .then(response => response.json())
  .then(data => {
    // Опрацьовуйте дані тут, наприклад, зберігайте їх у змінну products
    const products = data;

    if(selectedValue === "best-match") {

        // Cортування для 'Best match'
        products.sort((a, b) => a.id - b.id);
      } else if (selectedValue === "price-cheap") {
    
        // Сортування за 'Price cheap' (зростанням ціни)
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (selectedValue === "price-expensive") {
    
        // Сортування за 'Price expensive' (спаданням ціни)
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    
      }
       displayProducts(products);
       console.log(products);
  })
  .catch(error => {
    // Обробка помилок під час отримання даних
    console.error('Error fetching products:', error);
  });



};


function displayProducts(products) {
    const catalog = document.querySelector('.catalog__content');
    catalog.innerHTML = ''; // Очищення вмісту перед вставкою оновленого списку товарів
  
    products.forEach(product => {
      // Створення HTML-структури для кожного товару і його вставка у контейнер
      const productCard = document.createElement('div');
      productCard.classList.add('card', 'border-light', 'mb-3');
      productCard.style.width = '18rem';
  
      const cardImg = document.createElement('img');
      cardImg.classList.add('card-img-top');
      cardImg.src = product.image;
      cardImg.alt = product.name;
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = product.name;
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${product.price} uah`;
  
      const buyButton = document.createElement('button');
      buyButton.classList.add('btn', 'btn-primary');
      buyButton.textContent = 'Buy';
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(buyButton);
  
      productCard.appendChild(cardImg);
      productCard.appendChild(cardBody);
  
      catalog.appendChild(productCard);
    });
  }
  