/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

const dispatch = ({ event = "click", target } = {}) => {
    const newEvent = new Event(event);
    if (typeof target === "string") {
        target = document.querySelector(target);
    }
    target.dispatchEvent(newEvent);
};

const openFormModalOnGetParams = () => {
    const url = new URL(window.location.href);
    const modal = url.searchParams.get("form");
    if (modal && modal === "on") {
        dispatch({ target: "#talk-to-entalpic" });
    }
};

const isEmailValid = (value) => {
    var input = document.createElement("input");

    input.type = "email";
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === "function"
        ? input.checkValidity()
        : /\S+@\S+\.\S+/.test(value);
};

const crypt = (salt, text) => {
    // https://stackoverflow.com/a/66938952
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};

const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};

const getSource = () => {
    const existingSource = document.querySelector("#sourceInput").value;
    if (existingSource) {
        return existingSource;
    }
    const url = new URL(window.location.href);
    const src = url.searchParams.get("src");
    if (src) {
        return decrypt("entalpic", src);
    }
    return "";
};

const setSource = ({ debug = false } = {}) => {
    const source = getSource();
    const sourceElement = document.querySelector("#sourceInput");
    sourceElement.value = source;
    if (debug) {
        console.log("Source: ", source);
    }
};

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
    document
        .querySelectorAll("#contactForm input,#contactForm textarea")
        .forEach((n) => {
            n.addEventListener("input", (e) => {
                const email = document.getElementById("emailAddress").value;
                const emailOk = isEmailValid(email);

                const name = document.getElementById("nameInput").value;
                const nameOk = name.length > 1;

                if (emailOk && nameOk) {
                    const btn = document.querySelector("#submitButton");
                    btn.disabled = false;
                    btn.classList.remove("disabled");
                    setSource();
                } else {
                    const btn = document.querySelector("#submitButton");
                    btn.disabled = true;
                    btn.classList.add("disabled");
                }
            });
        });

    document.querySelectorAll(".entalpic-paper").forEach((element) => {
        const iconHTML = `<img src="assets/ENTALPIC-DELTA.ico" alt="Entalpic Paper" class="entalpic-paper-icon">`;
        element.insertAdjacentHTML("afterbegin", iconHTML);
    });
    setSource();
    setTimeout(() => {
        openFormModalOnGetParams();
    }, 500);
});
