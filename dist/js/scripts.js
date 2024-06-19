/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

function isEmailValid(value) {
  var input = document.createElement("input");

  input.type = "email";
  input.required = true;
  input.value = value;

  return typeof input.checkValidity === "function"
    ? input.checkValidity()
    : /\S+@\S+\.\S+/.test(value);
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
  document.querySelector("#emailAddress")?.addEventListener("input", (e) => {
    const email = e.target.value?.trim();
    if (isEmailValid(email)) {
      const btn = document.querySelector("#submitButton");
      btn.disabled = false;
      btn.classList.remove("disabled");
    } else {
      const btn = document.querySelector("#submitButton");
      btn.disabled = true;
      btn.classList.add("disabled");
    }
  });

  document.querySelectorAll(".entalpic-paper").forEach((element) => {
    const iconHTML = `<img src="assets/ENTALPIC-DELTA.ico" alt="Entalpic Paper" class="entalpic-paper-icon">`;
    element.insertAdjacentHTML("afterbegin", iconHTML);
  });
});
