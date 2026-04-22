import "./style.css";

window.addEventListener("load", () => {
  // ELEMENTS SELECTION
  const themeIcons = document.querySelectorAll(".themeIcon");
  const htmlElement = document.documentElement;
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  // FUNCTION FOR APPLYING THEME
  const applyTheme = (isDark) => {
    if (isDark) {
      htmlElement.classList.add("dark");
      themeIcons.forEach((img) => (img.src = "/moon.svg"));
    } else {
      htmlElement.classList.remove("dark");
      themeIcons.forEach((img) => (img.src = "/sun.svg"));
    }
  };

  // CHECK FOR USER'S PREFERENCE
  const systemSetting = window.matchMedia("(prefers-color-scheme: dark)");

  // SET INITIAL THEME
  applyTheme(systemSetting.matches);

  // TOGGLE THEME HANDLING
  themeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const isCurrentlyDark = htmlElement.classList.contains("dark");
      applyTheme(!isCurrentlyDark);
    });
  });

  // UPDATE IF USER CHANGE PREFERENCE
  systemSetting.addEventListener("change", (e) => {
    applyTheme(e.matches);
  });

  // FUNCTION TO CLOSE MENU
  const closeMenu = () => {
    menu.classList.remove("translate-y-15", "opacity-100");
    menu.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
    menuBtn.classList.remove("rotate-90");
  };

  // FUNCTION TO OPEN MENU
  const openMenu = () => {
    menu.classList.remove(
      "-translate-y-full",
      "opacity-0",
      "pointer-events-none",
    );
    menu.classList.add("translate-y-15", "opacity-100");
    menuBtn.classList.add("rotate-90");
  };

  // MAIN TOGGLE FUNCTION FOR MENU
  function toggleMenu(e) {
    e.stopPropagation();
    const isOpen = menu.classList.contains("translate-y-15");
    isOpen ? closeMenu() : openMenu();
  }

  // LISTENER TO CLOSE MENU ON TOUCH OTHER THAN NAVBAR
  document.addEventListener("touchstart", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);
    const isOpen = menu.classList.contains("translate-y-15");

    if (isOpen && !isClickInsideMenu && !isClickOnButton) {
      closeMenu();
    }
  });

  menu.classList.add("transition-all", "duration-300", "ease-in-out");

  menuBtn.addEventListener("click", toggleMenu);
});
