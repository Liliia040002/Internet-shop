
document.addEventListener('DOMContentLoaded', function() {
    const category = document.getElementById('categories');
    const plants = document.getElementById('plants-list');
    const plantItem = document.querySelector('.modal-card');
    // const selectedProductId = event.target.value;
    // const deleteButton = document.querySelector('.delete-btn');

    console.log(plantItem);

    // Fetch the products.json file
    fetch('api/products.json')
      .then(response => response.json())
      .then(data => {
        const products = data; // assuming data is an array of products

        // Function to update the plants dropdown based on the selected category
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


        // Function to show the selected product card
      function updateItem(selectedProductId) {
        const selectedProduct = products.find(product => product.id === parseInt(selectedProductId));

        // Create HTML structure for the selected product card
        const itemHTML = `
        <div class="card border-light mb-3 modal-card">
        <img src="${selectedProduct.image}" class="card-img-top" alt="${selectedProduct.name}">
        <div class="card-body">
            <h5 class="card-title">${selectedProduct.name}</h5>
            <p class="card-text">${selectedProduct.price}</p>
            <button class="btn btn-primary">Buy</button>
        </div>
        </div>`;

        // Show the selected product card in the modal
        plantItem.innerHTML = itemHTML;
      }

      
        // deleteButton.addEventListener('click', function() {
        //   // Remove the selected product from the list
        //   const indexToRemove = products.findIndex(product => product.id === parseInt(selectedProductId));
        //   if (indexToRemove !== -1) {
        //     products.splice(indexToRemove, 1);
        //     updatePlantsList(); // Refresh the plants list after deletion
        //     plantItem.innerHTML = ''; // Clear the modal after deletion
        //   }
        // });
      

        category.addEventListener('change', updatePlantsList);
        plants.addEventListener('change', function(event) {
           
            updateItem(selectedProductId);
          });
        updatePlantsList(); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
