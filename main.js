let menu =document.querySelector(".menu-icons");
let navbar = document.querySelector(".navbar");
menu.onclick = ()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
window.onscroll = () =>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};
window.onload = ()=>{
    let todey = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = todey;
    document.getElementById('return-date').value = new Date(
        Date.now() + 7 * 86400000
    ).toISOString().split('T')[0];
};

const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    deley: "400",
})

animate.reveal(".nav, .heading")
animate.reveal(".home-img img", {origin: "right"})
animate.reveal(".input-form", {origin: "bottom"})
animate.reveal(".trend-box,.rental-box,.team-box,.t-box", {interval: 100,})