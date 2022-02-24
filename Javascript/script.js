window.onscroll = function() {sticky_nav()};
const header = document.getElementById("nav");
const sticky = nav.offsetTop;

function sticky_nav() {
    console.log("y");
    if (window.pageYOffset > sticky) {
      nav.classList.add("nav-sticky");
    } else {
      nav.classList.remove("nav-sticky");
    }
  } 


  //Menu
  const menu_icon = document.getElementById("menu-icon");
  const menu_close = document.getElementById("menu-close");

