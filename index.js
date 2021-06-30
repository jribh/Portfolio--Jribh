let screensize2=document.querySelector('#screensize2');

let desccol = document.querySelector(".desccol");
let leftdesccol= document.querySelector("#leftdesccol");
let rightdesccol= document.querySelector("#rightdesccol");

let x = window.matchMedia("(min-width: 990px)");

window.addEventListener('scroll', function() {
    
  if(x.matches) {
    let value=window.scrollY*1.4;
    screensize2.style.clipPath = "circle("+ value +"px at 50% 90%";

    let value2=0;
    let value3=0;

    if(scrollY>800){
    value2=window.scrollY*0.3-300;
    }
    
    leftdesccol.style.transform = "translateY(-"+ value2 +"px)";
    leftdesccol.style.opacity = (100- value2)+"%";

    if(scrollY>1000){
        value3=window.scrollY*0.15-180;
        }

    rightdesccol.style.transform = "translateY(-"+ value3 +"px)";
    rightdesccol.style.opacity = (100- value3)+"%";
  }

  else { //for mobile
    let value=window.scrollY*4;
    screensize2.style.clipPath = "circle("+ value +"px at 50% 90%";

    let value2=0;
    let value3=0;

    if(scrollY>400){
    value2=window.scrollY*0.6-240;
    }
    
    leftdesccol.style.transform = "translateY(-"+ value2 +"px)";
    leftdesccol.style.opacity = (100- value2)+"%";

    if(scrollY>600){
        value3=window.scrollY*0.3-180;
    }

    rightdesccol.style.transform = "translateY(-"+ value3 +"px)";
    rightdesccol.style.opacity = (100- value3)+"%";
  }
    
})

let nav = document.querySelector("nav");
let bigContainer = document.querySelector (".longbox");

let containerHeight = bigContainer.offsetHeight*2;

let centerBlobs = document.getElementsByClassName("centerblob");
let centerArrow = document.querySelector(".centerarrow");


window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > containerHeight || document.documentElement.scrollTop > containerHeight ) {
    
    nav.style.background = "#F6F5F2";
    screensize2.style.backgroundColor = "#F0EFEB";
    screensize2.style.alignItems = "flex-start";
    
    for(let i=0; i<3; i++) {
      centerBlobs[i].style.zIndex = "0";
    }

    centerArrow.style.zIndex = "0";
    

  } else {
   
    nav.style.background = "none";
    screensize2.style.backgroundColor = "#130436";
    screensize2.style.alignItems = "flex-end";

    for(let i=0; i<3; i++) {
      centerBlobs[i].style.zIndex = "4";
    }
    centerArrow.style.zIndex = "5";
  }
}

// navbar scroll

// let y = window.matchMedia("(max-width: 990px)");

// document.addEventListener("DOMContentLoaded", function(){


//     el_autohide = document.querySelector('.autohide');
    
//     // add padding-top to bady (if necessary)
//     navbar_height = document.querySelector('.navbar').offsetHeight;
//     document.body.style.paddingTop = navbar_height + 'px';
  
  
//     if(el_autohide && y.matches){
//       var last_scroll_top = 0;
//       window.addEventListener('scroll', function() {
//             let scroll_top = window.scrollY;
//            if(scroll_top < last_scroll_top) {
//                 el_autohide.classList.remove('scrolled-down');
//                 el_autohide.classList.add('scrolled-up');
//             }
//             else {
//                 el_autohide.classList.remove('scrolled-up');
//                 el_autohide.classList.add('scrolled-down');
//             }
//             last_scroll_top = scroll_top;
//       }); 
//       // window.addEventListener
//     }
//     // if
// }); 


