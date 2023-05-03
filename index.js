function showNav(){
    //  document.querySelector(".outer-grid").classList.toggle("outer-gridexpanded");
    document.getElementById("nav").classList.add("show-nav");
    document.querySelector(".inner-grid").classList.toggle("inner-grid-opacity");
  
}
function hideNav(){
    document.querySelector(".hide-nav").classList.remove("show-nav");
    document.querySelector(".inner-grid").classList.toggle("inner-grid-opacity");
}
