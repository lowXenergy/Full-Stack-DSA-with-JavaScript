let red = React.createElement('div',{className:'red'})
let yellow = React.createElement('div',{className:'yellow'})
let green = React.createElement('div',{className:'green'})
let controls = React.createElement('div',{className:'controls'},[red,yellow,green])

const top = ()=>{
    return React.createElement('div',{id:'top'},controls)
}

export default top