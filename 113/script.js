let btn = document.querySelector('button')
let main= document.querySelector('main')

btn.addEventListener('click',()=>{
    let div = document.createElement('div')
    console.log(div);
    // div.style.height=59+'px';
    // div.style.width=59+'px';
    // div.style.backgroundColor = 'red'
    // div.style.cssText = "height:200px; width:100%; background-color:red;";
    // div.setAttribute("style", "height:200px; width:100%;background-color:red;");

    Object.assign(div.style,{
        position: "absolute",
        height:Math.floor(Math.random()*500)+"px",
        width:Math.floor(Math.random()*100)+"%",
        backgroundColor:`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`,
        left:Math.random()*80+"%",
        top:Math.random()*80+"%"
    })
    main.appendChild(div)
})