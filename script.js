const extended_nav = document.querySelector(".extended-nav"); 
const ham = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");

ham.addEventListener("click",()=>{
    
    extended_nav.classList.toggle("active");
    ham.classList.toggle("inactive");
    cross.classList.toggle("active");
})

cross.addEventListener("click",()=>{
    extended_nav.classList.remove("active");
    ham.classList.remove("inactive");
    cross.classList.remove("active");
})