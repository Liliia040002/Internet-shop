// Open nd close modal window
  const adminButton = document.getElementById('admin');
  const modal = document.querySelector('.modal-window');
  const closeButton = document.querySelector('.close');

  adminButton.addEventListener('click', function() {
    modal.classList.toggle('modal-window_active');
  });

  closeButton.addEventListener('click', function() {
      modal.classList.toggle('modal-window_active');
  });


  // Toggle switch theme website
const toggleButton = document.querySelector('.switch');
const body = document.body;
const catalog = document.querySelector('.catalog');
const buttons = document.getElementsByTagName('button');
const logo = document.querySelector('.logo');
const resetBtn = document.querySelector('.reset');
const btnOutline = document.querySelector('.btn-outline-primary');



toggleButton.addEventListener('click', function() {
    const checkedInputSlider = document.querySelector('.slider');

  if (toggleButton.querySelector('input').checked) {
    body.style.backgroundColor = '#dee2e6';
    logo.style.color = '#7a7aeb';
    checkedInputSlider.style.backgroundColor = '#7a7aeb';
    resetBtn.style.color = '#333333';
    resetBtn.style.borderRadius = '4px';
    btnOutline.style.color = '#333333';
    btnOutline.style.borderColor = '#7a7aeb';

 
    // Зиміна кольору svg іконок в хедері
    function changePathColor(svgId, color) {
        const svgElement = document.getElementById(svgId);
        const paths = svgElement.querySelectorAll('path');
        
        paths.forEach(path => {
          path.setAttribute('fill', color);
          path.setAttribute('stroke', color);
        });
      }
      
      // Виклик функції для зміни кольору у svg-logo
      changePathColor('svg-logo', '#7a7aeb');
      
      // Виклик функції для зміни кольору у adminBtn
      changePathColor('adminBtn', '#7a7aeb');

      // Виклик функції для зміни кольору у shoping-card
      changePathColor('shoping-card', '#7a7aeb');


    // Змінюємо кольори для всіх кнопок
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = '#7a7aeb';
    }
  } else {
    body.style.removeProperty('background-color');
    // body.style.backgroundColor = '';
    catalog.style.color = '';
    btnOutline.style.borderColor = '';
    checkedInputSlider.style.backgroundColor = '#156963';
    logo.style.color = '';

    

    // Скидаємо кольори для всіх кнопок
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = '';
      
    }


     // Зиміна кольору svg іконок в хедері
     function changePathColor(svgId, color) {
      const svgElement = document.getElementById(svgId);
      const paths = svgElement.querySelectorAll('path');
      
      paths.forEach(path => {
        path.setAttribute('fill', color);
        path.setAttribute('stroke', color);
    
      });
    }
    
    // Виклик функції для зміни кольору у svg-logo
    changePathColor('svg-logo', '#156963');
    
    // Виклик функції для зміни кольору у adminBtn
    changePathColor('adminBtn', '#156963');

    // Виклик функції для зміни кольору у shoping-card
    changePathColor('shoping-card', '#156963');




  }
});



