var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", () => {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// const navSlide = () => {
//     const open = document.getElementById('hamburger');
//     const changeIcon = true;

//     open.addEventListener("click", () => {

//         const overlay = document.querySelector('.overlay');
//         const nav = document.querySelector('nav')
//         const icon = document.querySelector('.menu-toggle i')

//         overlay.classList.toggle("menu-open");
//         nav.classList.toggle("menu-open");

//         if (changeIcon) {
//             icon.classList.remove("fa-bars");
//             icon.classList.remove("fa-times")

//             changeIcon = false;
//         } else {
//             icon.classList.remove("fa-times")
//             icon.classList.add("fa-bars");
//             changeIcon = true;
//         }
//     });
// }

// navSlide();