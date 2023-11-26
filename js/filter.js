// Отримання елементів DOM
const filter = document.querySelector('.filter');
const plantsItems = document.querySelector('.plants-list');
const submitButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

// Fetch products.json
fetch('api/products.json')
  .then(response => response.json())
  .then(products => {

    // Відображення товарів
    function displayProducts(filteredProducts) {
      plantsItems.innerHTML = ''; 

      filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('catalog__content');

        // Створення HTML-структури для відображення товару
        productDiv.innerHTML = `
        <div class="card border-light mb-3" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="Kaktus">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price} uah</p>
            <button class="btn btn-primary">Buy</button>
        </div>
        </div>`;

        plantsItems.appendChild(productDiv); 
      });
    }

    // Функція для фільтрації товарів за обраними характеристиками
    function filterProducts() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const selectedFilters = {};

      checkboxes.forEach(checkbox => {
        const category = checkbox.getAttribute('data-category');
        const value = checkbox.value;

        if (!selectedFilters[category]) {
          selectedFilters[category] = [];
        }

        selectedFilters[category].push(value);
      });

      // Фільтрація товарів за обраними характеристиками
      const filteredProducts = products.filter(product =>
        Object.entries(selectedFilters).every(([category, values]) =>
          values.some(value => product.sortingValue.includes(value))
        )
      );

      displayProducts(filteredProducts); // Відобразити відфільтровані товари
    }

    // Обробник події для форми (фільтрація товарів)
    filter.addEventListener('submit', function(event) {
      event.preventDefault();
      filterProducts(); 
    });

    // Cкидання вибраних фільтрів
    resetButton.addEventListener('click', function(event) {
      event.preventDefault();

      // Очистити вибрані чекбокси
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });

      // Повернення усіх товарів після скидання фільтрів
      displayProducts(products);
    });

    // Початкове відображення усіх товарів
    displayProducts(products);
  })
  .catch(error => console.error('Error fetching products:', error));

