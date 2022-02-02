const menulist= document.querySelector(".menu__list");
const buttonshow= document.querySelector(".fas.fa-bars");
const buttonhidden= document.querySelector(".fas.fa-times")


buttonshow.addEventListener("click",function(){
    menulist.style.display= "block";
    buttonhidden.style.display= "block";
})
buttonhidden.addEventListener("click",function(){
    menulist.style.display= "none";
    buttonhidden.style.display= "none";
})


///i wrote this code for the first time, please on understand :)