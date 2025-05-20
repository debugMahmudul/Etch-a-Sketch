
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {

    const squareDiv = document.createElement("div");

    squareDiv.classList.add("square-div");

    container.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "tomato";
    });
}








