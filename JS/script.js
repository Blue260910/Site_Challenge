const Agua1 = document.getElementById("Agua-1");
const Agua2 = document.getElementById("Agua-2");
const Agua3 = document.getElementById("Agua-3");
const Agua4 = document.getElementById("Agua-4");
const Agua5 = document.getElementById("Agua-5");
const Agua6 = document.getElementById("Agua-6");

window.addEventListener("scroll", () => {
    const value = window.scrollY;

    Agua1.style.left = value * 1.8 + "px";
    Agua2.style.left = value * 5 + "px";
    Agua2.style.top  = value * -0.2 + 120 + "px";
    Agua3.style.left = value * 4 + "px";
    Agua4.style.left = value * -2 + "px";
    Agua5.style.top  = value * -0.1 + 120 + "px";
    Agua5.style.left = value * -0.3 + "px";

});
