const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("change");
});

const navLinks = [...document.querySelectorAll("nav-link")]

navLinks.forEach((link, i) => {
    console.log(link.textContent)

    link.textContent.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = letter;
        link.append(span);
    })

    link.removeChild(link.childNodes[0]);
})