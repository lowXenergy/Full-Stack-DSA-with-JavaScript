let h1 = document.querySelector('h1');
let button = document.querySelector('button')
let main = document.querySelector('main')

const teams = [
    { team: 'CSK', primary: 'yellow', secondary: 'blue' },
    { team: 'RCB', primary: 'red', secondary: 'grey' },
    { team: 'MI', primary: 'blue', secondary: 'gold' },
    { team: 'KKR', primary: 'purple', secondary: 'gold' },
    { team: 'SRH', primary: 'orange', secondary: 'pink' },
    { team: 'DC', primary: 'blue', secondary: 'red' },
    { team: 'PBKS', primary: 'red', secondary: 'silver' },
    { team: 'RR', primary: 'pink', secondary: 'blue' },
    { team: 'GT', primary: 'navy', secondary: 'gold' },
    { team: 'LSG', primary: 'teal', secondary: 'orange' }
];

button.addEventListener('click',()=>{
console.log("hell");

    let winner = teams[Math.floor(Math.random()*teams.length)]
    h1.innerText = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
})