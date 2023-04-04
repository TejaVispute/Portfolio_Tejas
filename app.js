const hamburg = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
const moon = document.querySelector('#moon');

hamburg.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburg.classList.toggle("text-white")

})

// dark light toggle
moon.addEventListener("click", () => {
    body.classList.toggle("dark")
   

})