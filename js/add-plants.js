// const form = document.querySelector('.add-plant');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми
//     // Отримати значення з полів форми
//     const image = document.getElementById('add-img').files[0]; // Файл зображення
//     const title = document.getElementById('name').value;
//     const price = document.getElementById('price').value;
//     const category = document.getElementById('categorie').value;
//     const size = document.getElementById('size').value;
//     const features = document.getElementById('features').value;


//    // Створити об'єкт зі збраними даними форми
//    const newPlant = {
//     name: title,
//     price: price,
//     image: image, // Файл зображення
//     value: category,
//     sortingValue: [size, features]
  
//     };

//     // Отримати і обробити файл зображення, якщо він був вибраний
//     if (image) {
//         const reader = new FileReader();
//         reader.readAsDataURL(image);
//         reader.onload = function() {
//             newPlant.image = reader.result; // Зображення у форматі base64
//             // Додати новий об'єкт до списку або відправити на сервер
//             addPlantToCatalog(newPlant);
//         };
//     } else {
     
//         addPlantToCatalog(newPlant);
//     }

//     function addPlantToCatalog(newPlant) {
//         // Додавання нового об'єкта `newPlant` до списку рослин 
//         // відправки на сервер поки що не працює (POST-запит на /api/products.json)
        
//         const plantsList = document.querySelector('.plants-list');
//         const newPlantElement = document.createElement('div');
//         newPlantElement.classList.add('plant-item');
//         newPlantElement.innerHTML = 
//         `
//         <div class="card border-light mb-3" style="width: 18rem;">
//             <img src="${newPlant.image}" class="card-img-top" alt="Kaktus">
//             <div class="card-body">
//                 <h5 class="card-title">${newPlant.name}</h5>
//                 <p class="card-text">${newPlant.price} uah</p>
//                 <button class="btn btn-primary">Buy</button>
//             </div>
//         </div>`;
//         plantsList.appendChild(newPlantElement);
//     }

//     // fetch('api/products.json', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify(newPlant)
//     // })
//     // .then(response => {
//     //     if (response.ok) {
//     //         console.log('New plant added successfully!');
//     //         // Додаткові дії після успішного додавання на сервер
//     //     } else {
//     //         throw new Error('Failed to add new plant');
//     //     }
//     // })
//     // .catch(error => {
//     //     console.error('Error adding new plant:', error);
//     // });
    
// }

// );
 
const form = document.querySelector('.add-plant');
const plantsList = document.querySelector('.plants-list');

// Функція для відображення рослин з localStorage
function displayPlantsFromLocalStorage() {
    const plantsFromStorage = JSON.parse(localStorage.getItem('plants')) || [];
    plantsFromStorage.forEach(plant => {
        addPlantToCatalog(plant);
    });
}

// Виклик функції для відображення рослин при завантаженні сторінки
displayPlantsFromLocalStorage();

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

    // Отримання значень з полів форми
    const image = document.getElementById('add-img').files[0]; // Файл зображення
    const title = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('categorie').value;
    const size = document.getElementById('size').value;
    const features = document.getElementById('features').value;

    const newPlant = {
        name: title,
        price: price,
        image: '', // Зображення буде додане пізніше
        value: category,
        sortingValue: [size, features]
    };

    if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = function() {
            newPlant.image = reader.result;
            savePlantToLocalStorage(newPlant); // Зберігаємо рослину в localStorage
        };
    } else {
        savePlantToLocalStorage(newPlant);
    }
});

function savePlantToLocalStorage(plant) {
    const plantsFromStorage = JSON.parse(localStorage.getItem('plants')) || [];
    plantsFromStorage.push(plant);
    localStorage.setItem('plants', JSON.stringify(plantsFromStorage));
    addPlantToCatalog(plant);
}

function addPlantToCatalog(newPlant) {
    const newPlantElement = document.createElement('div');
    newPlantElement.classList.add('plant-item');
    newPlantElement.innerHTML = `
        <div class="card border-light mb-3" style="width: 18rem;">
            <img src="${newPlant.image}" class="card-img-top" alt="Kaktus">
            <div class="card-body">
                <h5 class="card-title">${newPlant.name}</h5>
                <p class="card-text">${newPlant.price} uah</p>
                <button class="btn btn-primary">Buy</button>
            </div>
        </div>`;
  
    plantsList.appendChild(newPlantElement);
}

