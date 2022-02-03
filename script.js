const menuList = document.querySelector('.menu__list');
const buttonShow = document.querySelector('.fas.fa-bars');
const buttonHidden = document.querySelector('.fas.fa-times');

buttonShow.addEventListener("click",function(){
    menuList.style.display= "block"
    buttonHidden.style.display= "block"
})
buttonHidden.addEventListener("click",function(){
    menuList.style.display= "none"
    buttonHidden.style.display= "none"
})
