const navToggle = document.getElementById("navToggle");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".navbar-item");

// ouvre et ferme la navigation au click
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// enlève la classe active sur tous elements de la liste et la met sur l'élément cliqué
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const el = e.currentTarget;
    siblings = el.parentElement.children;
    for (sib of siblings) {
      sib.classList.remove("active");
      el.classList.add("active");
    }
  });
});
 