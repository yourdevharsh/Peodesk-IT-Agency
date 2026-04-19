import "./style.css";

const themeIcon = document.querySelectorAll(".themeIcon");
const cards = document.querySelectorAll(".card");
const footer = document.getElementById("footer");
const icon = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

themeIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.src.includes("sun.svg")) {
      icon.src = "/moon.svg";
    } else {
      icon.src = "/sun.svg";
    }

    document.documentElement.classList.toggle("dark");
  });
});

function toggleMenu() {

  const isOpen = menu.classList.contains("translate-x-0");

  if (!isOpen) {
    menu.classList.remove(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none",
    );
    menu.classList.add("translate-x-0", "opacity-100");

    document.body.classList.add("overflow-hidden");
  } else {
    menu.classList.remove("translate-x-0", "opacity-100");
    menu.classList.add("translate-x-full", "opacity-0", "pointer-events-none");

    document.body.classList.remove("overflow-hidden");
  }

  icon.classList.toggle("rotate-90");
}

menuBtn.addEventListener("click", toggleMenu);
