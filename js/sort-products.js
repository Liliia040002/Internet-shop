
  const selectElement = document.getElementById('plants');

  selectElement.addEventListener('change', function() {
      const selectedValue = this.value;
  
  
      sortProduct(selectedValue);
  });
  
  function sortProduct(selectedValue) {
      fetch('api/products.json')
    .then(response => response.json())
    .then(data => {
    
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
     
      console.error('Error fetching products:', error);
    });
  
  
  
  };
  
  
  function displayProducts(products) {
      const catalog = document.querySelector('.plants-list');
      catalog.innerHTML = ''; // Очищення вмісту перед вставкою оновленого списку товарів
    
      products.forEach(product => {
        // Створення HTML-структури для кожного товару і його додавання у plants-list
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
    

// Перевірка наявності даних в localStorage
const storedData = localStorage.getItem('productsData');

if (storedData) {
   
    const parsedData = JSON.parse(storedData);
    displayProducts(parsedData);
} else {
   
    fetch('api/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('productsData', JSON.stringify(data)); // Збереження даних у localStorage
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching or storing products:', error);
        });
}