import gsap from 'gsap'
import './style.css'

// const box = document.querySelector('.box')

// gsap.to('.box',{//.to -> Starting point to ending state -> It has ending states
//   delay:0.6,
//   x:700,//If no unit is given it is in pixel by default(give it in quotes eg '100vh')
//   duration:1,//Default second
// })

// gsap.from('.box',{//.from -> ending state to Starting point -> It has starting states
//   delay:0.6,
//   x:700,//If no unit is given it is in pixel by default(give it in quotes eg '100vh')
//   duration:1,//Default second
// })

//To animate with custom property we will make an object
// const obj={
//   a:0
// }

// gsap.to(obj,{
//   a:100
// })

gsap.fromTo('.box',{
  //Starting state properties
  x:0,
},{//Ending state properties
  delay:0.6,
  duration:1,
  x:400,
  y:200
}
)