document.addEventListener("DOMContentLoaded", function () {
  // Scroll Animations
  const scrollElements = document.querySelectorAll("[data-scroll]");
  const loadElements = document.querySelectorAll("[data-load]");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Load Animations
  loadElements.forEach((el) => {
    el.classList.add("loaded");
  });
});
