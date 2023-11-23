// const category = document.getElementById('categories');
// const select = document.getElementById("plants");
// const products = [
//     {
//       id: 1,
//       name: "Areca Katehu palm",
//       price: "130",
//       image: "img/areka-katehu.png",
//       value: "palm",
//       sortingValue: [
//         "best-match",
//         "palm",
//         "big",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 2,
//       name: "Blue violet",
//       price: "85",
//       image: "img/violet-blue.png",
//       value: "violets",
//       sortingValue: [
//         "violets",
//         "small",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 3,
//       name: "Mammillaria",
//       price: "230",
//       image: "img/Kecubung.png",
//       value: "succulents",
//       sortingValue: [
//         "best-match",
//         "succulents",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 4,
//       name: "Areca palm",
//       price: "150",
//       image: "img/areca-palm.png",
//       value: "palm",
//       sortingValue: [
//         "palm",
//         "big",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 5,
//       name: "Kaktus Plants",
//       price: "85",
//       image: "img/Kaktus.png",
//       value: "succulents",
//       sortingValue: [
//         "succulents",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 6,
//       name: "Purple violet",
//       price: "105",
//       image: "img/violet-purple.png",
//       value: "violets",
//       sortingValue: [
//         "best-match",
//         "violets",
//         "medium",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 7,
//       name: "White leaf violet",
//       price: "130",
//       image: "img/violet-white-leafs.png",
//       value: "violets",
//       sortingValue: [
//         "violets",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 8,
//       name: "Date palm",
//       price: "85",
//       image: "img/finic-palm.png",
//       value: "palm",
//       sortingValue: [
//         "palm",
//         "big",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 9,
//       name: "Hemedoreia palm",
//       price: "120",
//       image: "img/hemedoreia.png",
//       value: "palm",
//       sortingValue: [
//         "best-match",
//         "palm",
//         "big",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 10,
//       name: "Kaktus Plants",
//       price: "130",
//       image: "img/Kaktus.png",
//       value: "succulents",
//       sortingValue: [
//         "best-match",
//         "succulents",
//         "medium",
//         "sun-loving"
//       ]
//     }
//   ];

//   const selectedCategory = category.value;

//   for (let i = 0; i < products.length; i++) {

//     if(products[i].value === selectedCategory) {
//         const option = document.createElement("option");
//         option.value = products[i].id;
//         option.text = products[i].name;
//         select.appendChild(option);
//     }
    
//   }


// //працюючий код
// const category = document.getElementById('categories');
// const plants = document.getElementById('plants');

// const products = [
//     {
//       id: 1,
//       name: "Areca Katehu palm",
//       price: "130",
//       image: "img/areka-katehu.png",
//       value: "palm",
//       sortingValue: [
//         "best-match",
//         "palm",
//         "big",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 2,
//       name: "Blue violet",
//       price: "85",
//       image: "img/violet-blue.png",
//       value: "violets",
//       sortingValue: [
//         "violets",
//         "small",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 3,
//       name: "Mammillaria",
//       price: "230",
//       image: "img/Kecubung.png",
//       value: "succulents",
//       sortingValue: [
//         "best-match",
//         "succulents",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 4,
//       name: "Areca palm",
//       price: "150",
//       image: "img/areca-palm.png",
//       value: "palm",
//       sortingValue: [
//         "palm",
//         "big",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 5,
//       name: "Kaktus Plants",
//       price: "85",
//       image: "img/Kaktus.png",
//       value: "succulents",
//       sortingValue: [
//         "succulents",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 6,
//       name: "Purple violet",
//       price: "105",
//       image: "img/violet-purple.png",
//       value: "violets",
//       sortingValue: [
//         "best-match",
//         "violets",
//         "medium",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 7,
//       name: "White leaf violet",
//       price: "130",
//       image: "img/violet-white-leafs.png",
//       value: "violets",
//       sortingValue: [
//         "violets",
//         "small",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 8,
//       name: "Date palm",
//       price: "85",
//       image: "img/finic-palm.png",
//       value: "palm",
//       sortingValue: [
//         "palm",
//         "big",
//         "sun-loving"
//       ]
//     },
//     {
//       id: 9,
//       name: "Hemedoreia palm",
//       price: "120",
//       image: "img/hemedoreia.png",
//       value: "palm",
//       sortingValue: [
//         "best-match",
//         "palm",
//         "big",
//         "shade-loving"
//       ]
//     },
//     {
//       id: 10,
//       name: "Kaktus Plants",
//       price: "130",
//       image: "img/Kaktus.png",
//       value: "succulents",
//       sortingValue: [
//         "best-match",
//         "succulents",
//         "medium",
//         "sun-loving"
//       ]
//     }
//   ];

//   function updatePlantsList() {
//     const selectedCategory = category.value;
//     plants.innerHTML = '';
  
//     const filteredProducts = products.filter(product => product.value === selectedCategory);
  
//     filteredProducts.forEach((product, index) => {
//       const option = document.createElement('option');
//       option.value = product.id; // You can set the value to any unique identifier for the product
//       option.text = product.name;
//       plants.appendChild(option);
//     });
//   }
  
//   category.addEventListener('change', updatePlantsList);
//   updatePlantsList(); // Call the function initially to populate the plants based on the initial selected category
  

// // --- кінець --- працюючий код

document.addEventListener('DOMContentLoaded', function() {
    const category = document.getElementById('categories');
    const plants = document.getElementById('plants');

    // Fetch the products.json file
    fetch('api/products.json')
      .then(response => response.json())
      .then(data => {
        const products = data; // assuming data is an array of products

        // Populate categories select
        // Add your code to populate the categories dropdown if not already populated

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
        }

        category.addEventListener('change', updatePlantsList);
        updatePlantsList(); // Call the function initially to populate the plants based on the initial selected category
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });










   


