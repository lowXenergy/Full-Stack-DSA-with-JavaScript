// let grow =0;
// const btn = document.querySelector('button')
// const h2 = document.querySelector('h2')
// const inner = document.querySelector('.inner')

// btn.addEventListener('click',function(){
//     btn.style.pointerEvents = 'none';
//     var num = 50 + Math.floor(Math.random()*50)
    
//     console.log('Your file will be downloaded in',num/10,'seconds');
//     var int = setInterval(() => {
//         grow++
//         h2.innerHTML = grow+'%'
//         inner.style.width = grow+'%'
//     },num);
//     setTimeout(() => {
//         clearInterval(int)
//         btn.innerHTML = 'Downloaded'
//         btn.style.opacity = 0.5
//     }, num*100);
// })

let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none';

    let duration = 2000 + Math.random() * 3000; // 2–5 seconds
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        let progress = timestamp - startTime;
        let percent = Math.min((progress / duration) * 100, 100);

        h2.innerHTML = Math.floor(percent) + '%';
        inner.style.width = percent + '%';

        if (percent < 100) {
            requestAnimationFrame(animate);
        } else {
            btn.innerHTML = 'Downloaded';
            btn.style.opacity = 0.5;
        }
    }

    requestAnimationFrame(animate);
});