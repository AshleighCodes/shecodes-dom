const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
};

// write a function that will subtract a number from the current number
const sub = (step) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
};

const reset = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
};