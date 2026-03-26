const head = document.getElementById('Head');
const increaseBtn = document.getElementById('Increment');
const decreaseBtn = document.getElementById('Decrement');
const resetBtn = document.getElementById('Reset');

let count=0;

// increaseBtn.addEventListener('click',()=>{
//     count++;
//     head.textContent=count;  
//     head.style.color = count < 0 ? 'red' : '#333'
// })

// decreaseBtn.addEventListener('click',()=>{
//     // if (count <= 0) return;
//     count--;
//     head.textContent=count;
//     head.style.color = count < 0 ? 'red' : '#333'
// })

// resetBtn.addEventListener('click',()=>{
//     count =0;
//     head.textContent=count;
//     head.style.color = '#333'; 
// })

function updateDisplay() {
    head.textContent = count;
    head.style.color = count < 0 ? 'red' : '#333';
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});