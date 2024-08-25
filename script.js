let navlist=document.querySelector("#navlist");
let rightNav=document.querySelector("#rightNav");
let burger=document.querySelector("#burger");
let navbar=document.querySelector("#navbar");


burger.addEventListener("click",()=>{
    navlist.classList.toggle("h-nav-responsive");
    rightNav.classList.toggle("h-nav-responsive");
    navbar.classList.toggle("v-nav-responsive");
})