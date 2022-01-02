let hamburger = document.querySelector(".hamburger");
let mainList = document.querySelector(".main-list");



function togglebtn(){
    mainList.classList.toggle('show');
}

hamburger.addEventListener('click', togglebtn);
    
