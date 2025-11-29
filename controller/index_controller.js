const toTopBtn = document.getElementById('mybutton');
const overViewDetail = document.querySelector('.infoView.overview');
const transportationDetail = document.querySelector('.infoView.transportation');

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


function changeTravelDetail(viewBtn){
  if(viewBtn == 'overview'){
    overViewDetail.classList.remove('hidden');
    transportationDetail.classList.add('hidden');
    return;
  }
  if(viewBtn == 'transportation'){
    overViewDetail.classList.add('hidden');
    transportationDetail.classList.remove('hidden');
    return;
  }
  
   
}