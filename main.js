'use strict';

window.addEventListener("scroll", function (e) {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle('show', window.scrollY > 0)
   
})