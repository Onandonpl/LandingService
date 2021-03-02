const menuHandler = () => {
  const hamburgerButton = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav__items");

  const handleOpenMenu = () => {
    nav.classList.toggle("open");
    hamburgerButton.classList.toggle("toggle");
  };

  hamburgerButton.addEventListener("click", handleOpenMenu);
};

export default menuHandler;
