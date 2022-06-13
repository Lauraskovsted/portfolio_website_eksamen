// Laver variablen "btn", som henviser til klassen ".toggle-btn", som er knappen menu.
const btn = document.querySelector(".toggle-btn");

// Laver variablen "menu", som henviser til Klassen ".main-menu", som er på nav elementet
const menu = document.querySelector(".main-menu");

// funktionen "toggleMenu()" gør at menuen kan blive slået til og fra.
function toggleMenu() {
  // Nav elementet (menu), får tilføjet klassen toggle, så når man klikker nav-elementet frem bliver det shown.
  menu.classList.toggle("shown");

  // Herefter laver jeg variablen "menuShown", som siger at hvis jeg klikker på menu (nav-element), så vil den handle udfra det der står i shown, altså at menu-variablen indeholder klassen "shown" via classList.contains("") contain.
  const menuShown = menu.classList.contains("shown");

  // Herefter spørger jeg "menuShown" med en if-sætning om, når jeg klikker på btn enten at have Luk eller menu stående, til når menuen er åben og lukket.
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}
// "toggleMenu()" slutter her

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
