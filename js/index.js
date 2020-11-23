let isFilled = false;

function activateBurgerMenu() {
  let menu_class = document.getElementById("menu_class");
  if (menu_class.className === "menu_class") {
    menu_class.className += "_hidden";
  } else {
    // Array.from(document.getElementsByClassName("topnav_links")).forEach(
    //   (link) => {
    //     link.style.display = "none";
    //   }
    // );
    menu_class.className = "menu_class";
  }
}

var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
