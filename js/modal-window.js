      // відкриття та закриття модального вікна
      const adminButton = document.getElementById('admin');
      const modal = document.querySelector('.modal-window');
      const closeButton = document.querySelector('.close');
    
      adminButton.addEventListener('click', function() {
        modal.classList.add('modal-window_active');
      });
    
      closeButton.addEventListener('click', function() {
        modal.classList.remove('modal-window_active');
      });
    
      const category = document.getElementById('categories');
      const plants = document.getElementById('plants');
  
  
  document.addEventListener('DOMContentLoaded', function() {
      const category = document.getElementById('categories');
      const plants = document.getElementById('plants-list');
      const plantItem = document.querySelector('.modal-card');
     
      const deleteButton = document.querySelector('.delete-btn');
      let selectedProductId;
  
      console.log(plantItem);
  
      // Fetch  products.json 
      fetch('api/products.json')
        .then(response => response.json())
        .then(data => {
          const products = data; 
  
         
          function updatePlantsList() {
            const selectedCategory = category.value;
            plants.innerHTML = '';
  
            const filteredProducts = products.filter(product => product.value === selectedCategory);
  
            filteredProducts.forEach((product, index) => {
              const option = document.createElement('option');
              option.value = product.id;
              option.text = product.name;
              plants.appendChild(option);
            });
          };
  
  
          // показ обраного продукту
        function updateItem(selectedProductId) {
          const selectedProduct = products.find(product => product.id === parseInt(selectedProductId));
              console.log(selectedProduct);
          // створення HTML структури
          const itemHTML = `
          <div class="card border-light mb-3 modal-card">
          <img src="${selectedProduct.image}" class="card-img-top" alt="${selectedProduct.name}">
          <div class="card-body">
              <h5 class="card-title">${selectedProduct.name}</h5>
              <p class="card-text">${selectedProduct.price}</p>
              <button class="btn btn-primary">Buy</button>
          </div>
          </div>`;
  
   
          plantItem.innerHTML = itemHTML;
        }
  
        
          deleteButton.addEventListener('click', function() {
            //видалення обраного продукту
            const indexToRemove = products.find(product => product.id === parseInt(selectedProductId));
            if (indexToRemove !== -1) {
              products.splice(indexToRemove, 1);
              updatePlantsList(); 
              plantItem.innerHTML = ''; 
            }
          });
  
          console.log(plants);
        
  
          category.addEventListener('change', updatePlantsList);
          plants.addEventListener('change', function(event) {
          const selectedProductId = event.target.value;
              updateItem(selectedProductId);
            });
          updatePlantsList(); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    });

   
   
 