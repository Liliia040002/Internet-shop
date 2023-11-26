 
   // Toggle switch theme website
  const toggleButton = document.querySelector('.switch');
  const body = document.body;
  const catalog = document.querySelector('.catalog');
  const buttons = document.getElementsByTagName('button');
  const logo = document.querySelector('.logo');
  const resetBtn = document.querySelector('.reset');
  const btnPrimary = document.querySelector('.btn-primary');
  const btnOutline = document.getElementById('btn-outline-primary');
  
  
  
  toggleButton.addEventListener('click', function() {
      const checkedInputSlider = document.querySelector('.slider');
  
    if (toggleButton.querySelector('input').checked) {
      body.style.backgroundColor = '#C8C0B3';
      logo.style.fill = '#647643';
      checkedInputSlider.style.backgroundColor = '#647643';
      resetBtn.style.color = '#333333';
      resetBtn.style.borderRadius = '4px';
      btnOutline.style.color = '#333333';
      btnOutline.style.borderColor = '#647643';
      btnOutline.style.backgroundColor = "#C8C0B3";
  
   
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
        changePathColor('svg-logo', '#647643');
        
        // Виклик функції для зміни кольору у adminBtn
        changePathColor('adminBtn', '#647643');
  
        // Виклик функції для зміни кольору у shoping-card
        changePathColor('shoping-card', '#647643');
  
  
      // Змінюємо кольори для всіх кнопок
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#647643';
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
  
  
  
  
  


  