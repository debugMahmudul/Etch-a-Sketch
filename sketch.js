
const container = document.querySelector(".container");

function getRandomHexColor() {
    let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};

let currentDrawingMode = "color";
let activeDrawingColor = "tomato";

const hiddenColorPicker = document.getElementById("hiddenColorPicker");
const pickColorButton = document.getElementById("pickColorButton");
const resetButton = document.getElementById("resetButton");
const rainbowEffect = document.getElementById("rainbow");



pickColorButton.addEventListener("click", () => {
    currentDrawingMode = "color";
    hiddenColorPicker.click();
});

hiddenColorPicker.addEventListener("input", () => {
    activeDrawingColor = hiddenColorPicker.value;
    currentDrawingMode = "color";
});

if (rainbowEffect) {
    rainbowEffect.addEventListener("click", () => {
        currentDrawingMode = "rainbow";
    });
};

// Loop to create the 16x16 grid.
for (let i = 0; i < 256; i++) {

    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    container.appendChild(squareDiv);


    squareDiv.addEventListener("mouseover", () => {
        if (currentDrawingMode === "color") {
            if (activeDrawingColor) {
                squareDiv.style.backgroundColor = activeDrawingColor;
            }
        }
        else if (currentDrawingMode === "rainbow") {
            squareDiv.style.backgroundColor = getRandomHexColor();
        }

    });
};

// Create a customizable grid up to 100 squares per side
resetButton.addEventListener("click", () => {
    let userInputString = prompt("Enter the number of squares per side (up to 100):");

    // Check for input validation
    if (userInputString === null) {
        alert("User cancelled the input");
        return;
    };
    const userInputNumber = parseInt(userInputString);

    if (isNaN(userInputNumber)) {
        alert("Invalid input: Not a number. Please enter a number between 1 and 100.");
        return;
    }

    if (userInputNumber < 1 || userInputNumber > 100) {
        alert("Invalid input: Number must be between 1 and 100.");
        return;
    }

    // This is to clear the container before we create the new grid
    container.innerHTML = "";

    // Calculate the percentage width of the grid.
    const percentageWidth = (100 / userInputNumber);

    for (let i = 0; i < userInputNumber * userInputNumber; i++) {

        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square-div");
        container.appendChild(squareDiv);
        squareDiv.style.width = percentageWidth + "%";

        squareDiv.addEventListener("mouseover", () => {
            if (currentDrawingMode === "color") {
                if (activeDrawingColor) {
                    squareDiv.style.backgroundColor = activeDrawingColor;
                }
            }
            else if (currentDrawingMode === "rainbow") {
                squareDiv.style.backgroundColor = getRandomHexColor();
            }

        });
    }
});




















