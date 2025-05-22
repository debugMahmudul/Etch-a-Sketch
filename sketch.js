
const container = document.querySelector(".container");

//Loop to create the 16x16 grid. 
for (let i = 0; i < 256; i++) {

    const squareDiv = document.createElement("div");

    squareDiv.classList.add("square-div");
    container.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "tomato";
    });
};

//create a button
const button = document.querySelector("button");

//Create a button to receive gride size from the user
button.addEventListener("click", () => {
    let userInputString = prompt("Enter the number of squares per side (up to 100):");

    //Check for input validation
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

    //This is to clear the container before we create the new grid
    container.innerHTML = "";

    //Calculate the percentage width of the grid.
    const percentageWidth = (100 / userInputNumber);

    for (let i = 0; i < userInputNumber * userInputNumber; i++) {

        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square-div");
        container.appendChild(squareDiv);
        squareDiv.style.width = percentageWidth + "%";


        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "tomato";
        });
    }
});














