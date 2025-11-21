const toTopBtn = document.getElementById('mybutton');

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    toTopBtn.classList.add('hidden')
  } else {
    if( toTopBtn.classList.contains('hidden')){
        toTopBtn.classList.remove('hidden')
    }
  }
});



function moveScroll(viewClassName, direct) { 
    const container = document.querySelector(viewClassName);
    let directLoaction = 0;
    const step = container.scrollWidth / 6; 
    
    if(direct == "left"){
      directLoaction = container.scrollLeft - step;
    }else {
      directLoaction = container.scrollLeft + step;
    }

    container.scrollTo({
      left: directLoaction,     
      behavior: 'smooth'  
    });
}

const container = document.querySelector('.squr4');
function autoMove(){
  setInterval(function() {
    const step = (container.scrollWidth - container.clientWidth) / (5);
    let directLoaction = container.scrollLeft + step;

    if (directLoaction >= container.scrollWidth - container.clientWidth) {
        directLoaction = 0; 
    }

    container.scrollTo({
      left: directLoaction,     
      behavior: 'smooth'  
    });

  }, 2000);
}

autoMove();