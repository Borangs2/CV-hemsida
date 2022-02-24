window.onscroll = function() {sticky_nav()};
const nav = document.getElementById("nav");
const sticky = nav.offsetTop;


function sticky_nav() {
    let width = window.innerWidth;

    if (window.pageYOffset > sticky && width >= 700) {
      nav.classList.add("nav-sticky");
    } else {
      nav.classList.remove("nav-sticky");
    }
  } 


  //Menu
  const menu_icon = document.getElementById("menu-icon");
  const menu_close = document.getElementById("menu-close");

menu_icon.addEventListener("click", () => {
    menu_icon.classList.remove("d-inline-block");
    menu_icon.classList.add("d-none");
    menu_close.classList.remove("d-none");
    menu_close.classList.add("d-inline-block");
    nav.classList.toggle("active");
});

menu_close.addEventListener("click", () => {
    menu_icon.classList.add("d-inline-block");
    menu_icon.classList.remove("d-none");
    menu_close.classList.add("d-none");
    menu_close.classList.remove("d-inline-block");
    nav.classList.toggle("active");
});

window.onscroll = () => {
    menu_icon.classList.add("d-inline-block");
    menu_icon.classList.remove("d-none");
    menu_close.classList.add("d-none");
    menu_close.classList.remove("d-inline-block");
    nav.classList.remove("active");
};

window.onresize = remove_icon;

function remove_icon(){
    const width = document.body.clientWidth;

    if(width >= 700){
        menu_icon.classList.remove("d-inline-block");
        menu_close.classList.remove("d-inline-block");
        menu_icon.classList.add("d-none");
        menu_close.classList.add("d-none");
    }
    else{
        menu_icon.classList.add("d-inline-block");
        menu_icon.classList.remove("d-none");
    }
}
