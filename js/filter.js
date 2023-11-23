// // Отримання елементів DOM
// const form = document.querySelector('.filter');
// const plantsList = document.querySelector('.plants-list');
// const submitButton = document.querySelector('.submit');
// const resetButton = document.querySelector('.reset');

// // Зчитування товарів з файлу products.json
// fetch('api/products.json')
//   .then(response => response.json())
//   .then(products => {
//     // Функція для відображення товарів
//     function displayProducts(filteredProducts) {
//       plantsList.innerHTML = ''; // Очистити список перед відображенням нових товарів

//       filteredProducts.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('catalog__content');

//         // Створення HTML-структури для відображення товару
//         productDiv.innerHTML = `
//         <div class="card border-light mb-3" style="width: 18rem;">
//         <img src="${product.image}" class="card-img-top" alt="Kaktus">
//         <div class="card-body">
//             <h5 class="card-title">${product.name}</h5>
//             <p class="card-text">${product.price} uah</p>
//             <button class="btn btn-primary">Buy</button>
//         </div>
//     </div>`;

//         plantsList.appendChild(productDiv); // Додати товар до списку
//       });
//     }

//     // Обробник події для форми (фільтрація товарів)
//     form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Зупинити стандартну подію форми

//       const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//       const selectedFilters = Array.from(checkboxes).map(checkbox => checkbox.value);

//       // Фільтрація товарів за обраними характеристиками
//       const filteredProducts = products.filter(product =>
//         selectedFilters.every(filter => product.sortingValue.includes(filter))
//       );

//       displayProducts(filteredProducts); // Відобразити відфільтровані товари
//     });

//     // Обробник події для скидання вибраних фільтрів
//     resetButton.addEventListener('click', function(event) {
//       event.preventDefault(); // Зупинити стандартну подію кнопки Reset

//       // Очистити вибрані чекбокси
//       const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       checkboxes.forEach(checkbox => {
//         checkbox.checked = false;
//       });

//       // Повернення усіх товарів після скидання фільтрів
//       displayProducts(products);
//     });

//     // Початкове відображення усіх товарів
//     displayProducts(products);
//   })
//   .catch(error => console.error('Error fetching products:', error));


// Отримання елементів DOM
const form = document.querySelector('.filter');
const plantsList = document.querySelector('.plants-list');
const submitButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

// Зчитування товарів з файлу products.json
fetch('api/products.json')
  .then(response => response.json())
  .then(products => {
    // Функція для відображення товарів
    function displayProducts(filteredProducts) {
      plantsList.innerHTML = ''; // Очистити список перед відображенням нових товарів

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

        plantsList.appendChild(productDiv); // Додати товар до списку
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
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Зупинити стандартну подію форми
      filterProducts(); // Виклик функції фільтрації при натисканні на кнопку "Submit"
    });

    // Обробник події для скидання вибраних фільтрів
    resetButton.addEventListener('click', function(event) {
      event.preventDefault(); // Зупинити стандартну подію кнопки Reset

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





// const form = document.querySelector('.filter');
// const plantsList = document.querySelector('.plants-list');
// const submitButton = document.querySelector('.submit');
// const resetButton = document.querySelector('.reset');

// const displayProducts = (filteredProducts) => {
//   plantsList.innerHTML = ''; // Очистити список перед відображенням нових товарів

//   filteredProducts.forEach(product => {
//     const productDiv = document.createElement('div');
//     productDiv.classList.add('catalog__content');

//     // Створення HTML-структури для відображення товару
//     productDiv.innerHTML = `
//       <div class="card border-light mb-3" style="width: 18rem;">
//         <img src="${product.image}" class="card-img-top" alt="Kaktus">
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">${product.price} uah</p>
//           <button class="btn btn-primary">Buy</button>
//         </div>
//       </div>
//     `;

//     plantsList.appendChild(productDiv); // Додати товар до списку
//   });
// };

// const filterProducts = () => {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//   const selectedFilters = {};

//   checkboxes.forEach(checkbox => {
//     const category = checkbox.getAttribute('data-category');
//     const value = checkbox.value;

//     if (!selectedFilters[category]) {
//       selectedFilters[category] = [];
//     }

//     selectedFilters[category].push(value);
//   });

//   const filteredProducts = products.filter(product =>
//     Object.entries(selectedFilters).every(([category, values]) =>
//       values.some(value => product.sortingValue.includes(value))
//     )
//   );

//   displayProducts(filteredProducts); // Відобразити відфільтровані товари
// };

// form.addEventListener('submit', event => {
//   event.preventDefault(); // Зупинити стандартну подію форми
//   filterProducts(); // Виклик функції фільтрації при натисканні на кнопку "Submit"
// });

// resetButton.addEventListener('click', event => {
//   event.preventDefault(); // Зупинити стандартну подію кнопки Reset

//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   checkboxes.forEach(checkbox => {
//     checkbox.checked = false;
//   });

//   displayProducts(products); // Повернення усіх товарів після скидання фільтрів
// });

// // Зчитування товарів з файлу products.json
// fetch('api/products.json')
//   .then(response => response.json())
//   .then(productsData => {
//     const products = productsData; // Зберегти дані товарів

//     // Початкове відображення усіх товарів
//     displayProducts(products);
//   })
//   .catch(error => console.error('Error fetching products:', error));
