let screensize2=document.querySelector('#screensize2');

let desccol = document.querySelector(".desccol");
let leftdesccol= document.querySelector("#leftdesccol");
let rightdesccol= document.querySelector("#rightdesccol");

window.addEventListener('scroll', function() {
    let value=window.scrollY*1.2;
    screensize2.style.clipPath = "circle("+ value +"px at 50% 90%";

    let value2=0;
    let value3=0;

    if(scrollY>1000){
    value2=window.scrollY*0.3-300;
    }
    
    leftdesccol.style.transform = "translateY(-"+ value2 +"px)";
    leftdesccol.style.opacity = (100- value2)+"%";

    if(scrollY>1200){
        value3=window.scrollY*0.15-180;
        }

    rightdesccol.style.transform = "translateY(-"+ value3 +"px)";
    rightdesccol.style.opacity = (100- value3)+"%";
})

let nav = document.querySelector("nav");
let bigContainer = document.querySelector (".longbox");

let containerHeight = bigContainer.offsetHeight*2;

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > containerHeight || document.documentElement.scrollTop > containerHeight ) {
    
    nav.style.background = "#F6F5F2";
  } else {
   
    nav.style.background = "none";
  }
}

