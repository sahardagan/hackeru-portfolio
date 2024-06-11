document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const text = document.querySelector(".header-title");
        const letters = text.textContent.split("");

        text.textContent = "";
        letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.transitionDelay = `${0.1 * index}s`;
            text.appendChild(span);
        });

        setTimeout(() => {
            text.classList.add("disappear");
        }, 1000);
    }, 100);
});