const img = document.querySelector('img');

document.addEventListener('mousemove',(e)=>{
    console.log("mouse moved");
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
})