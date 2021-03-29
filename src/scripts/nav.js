const publlicEls = {
  navLinks: document.querySelector("#nav-links"),
  mobileBurgerMenu: document.getElementById("burger-icon"),
};

//Dom elements Destructured
const { navLinks, mobileBurgerMenu } = publlicEls;

// Event Listeners
publlicEls.mobileBurgerMenu.onclick = showMobileMenuItems;

// Animate Links to show
function showMobileMenuItems(e) {
  //Toggle 'X' animation class
  mobileBurgerMenu.classList.toggle("toggle-X");

  //adds transition on effect (this is required because it if was on from before, the menu would ve visible for a short second when first loading the page)
  navLinks.classList.add("transition-on");

  //toggles menu items class
  navLinks.classList.toggle("toggle-menu-items");
}
