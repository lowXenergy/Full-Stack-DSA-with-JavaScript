// PROTOTYPE
// let heading = document.querySelector('h1');
// let generate_btn = document.querySelector('button');
// let reload_btn = document.querySelector('.reload');

// let minInput = prompt("Enter the minimum number");
// let maxInput = prompt("Enter the maximum number");

// let min = Number(minInput);
// let max = Number(maxInput);

// function randomNum(min, max) {
//     if (
//         minInput === null || maxInput === null ||
//         minInput.trim() === "" || maxInput.trim() === "" ||
//         isNaN(min) || isNaN(max) || min > max
//     ) {
//         heading.innerText = 'Invalid range';
//         return;
//     }

//     heading.innerText =
//         Math.floor(Math.random() * (max - min + 1)) + min;
// }

// generate_btn.addEventListener('click', () => {
//     randomNum(min, max);
// });

// reload_btn.addEventListener('click', () => {
//     minInput = prompt("Enter the minimum number");
//     maxInput = prompt("Enter the maximum number");

//     min = Number(minInput);
//     max = Number(maxInput);

//     heading.innerText = "Range updated. Click generate.";
// });

const result = document.getElementById('result');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateBtn = document.getElementById('generate');
const reloadBtn = document.getElementById('reload');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBtn.addEventListener('click', () => {
     if (minInput.value.trim() === "" || maxInput.value.trim() === "") {
        result.textContent = "Please enter both values";
        return;
    }
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
        result.textContent = "Invalid range";
        return;
    }

    result.textContent = getRandom(min, max);
});

reloadBtn.addEventListener('click', () => {
    minInput.value = "";
    maxInput.value = "";
    result.textContent = "Enter a range";
});