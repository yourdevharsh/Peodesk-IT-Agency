import "./style.css";

window.addEventListener("load", () => {
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
    const isOpen = menu.classList.contains("translate-y-15");

    if (!isOpen) {
      menu.classList.remove(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none",
      );
      menu.classList.add("translate-y-15", "opacity-100");

      // document.body.classList.add("overflow-hidden");
    } else {
      menu.classList.remove("translate-y-15", "opacity-100");
      menu.classList.add(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none",
      );

      // document.body.classList.remove("overflow-hidden");
    }

    icon.classList.toggle("rotate-90");
  }
  
  menu.classList.remove("transition-none");
  menu.classList.add("transition-all", "duration-300", "ease-in-out");

  icon.addEventListener("click", toggleMenu);
});
