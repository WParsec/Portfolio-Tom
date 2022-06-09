const toggleButton = document.querySelector(".toggle-menu");
const secondNav = document.querySelector(".main-nav-wrapper");
const mainNav = document.querySelector(".secondary-nav");
const navWrapper = document.querySelector(".nav-wrapper");

// MENU BUTTON ANIMATION

let menuOpen = false;

toggleButton.addEventListener("click", () => {
    mainNav.classList.toggle('show')
    secondNav.classList.toggle('show')
    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
        navWrapper.style.height = "100vh";
    }
    else {
        toggleButton.classList.remove('open');
        menuOpen = false;
        navWrapper.style.height = "88px";
    }
});


