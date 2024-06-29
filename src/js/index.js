
import "../css/style.css";
import "../../node_modules/@popperjs/core/dist/cjs/popper";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../../node_modules/@fortawesome/fontawesome-free/js/all";



const BTn = document.querySelector(".nav-toggle ")
const lists = document.querySelector(".links")

BTn.addEventListener("click", function(){
    lists.classList.toggle("show")
    
});
  function scroll () {
    if(document.documentElement.scrollTop > 200){
        document.getElementById("nav").classList.add("active-nav")
    }else{
        document.getElementById("nav").classList.remove("active-nav")  
    }
}

window.onscroll = function (){
    scroll()
}


document.getElementById("date").innerHTML = new Date().getFullYear()