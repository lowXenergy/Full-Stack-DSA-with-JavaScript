// // const sounds = {

// //   a: new Audio('./Assets/28.mp3'), // C
// //   s: new Audio('./Assets/29.mp3'), // D
// //   d: new Audio('./Assets/30.mp3'), // E
// //   f: new Audio('./Assets/31.mp3'), // F
// //   g: new Audio('./Assets/32.mp3'), // G
// //   h: new Audio('./Assets/33.mp3'), // A
// //   j: new Audio('./Assets/34.mp3')  // B
// // };


// // document.addEventListener('keydown', (e) => {
// //   const key = e.key.toLowerCase();

// //   if (sounds[key]) {
// //     sounds[key].currentTime = 0;
// //     sounds[key].play();

// //     const keyDiv = document.querySelector(`[data-key="${key}"]`);
// //     if (keyDiv) keyDiv.classList.add('active');
// //   }

// // });

// const sounds = {
//   // Octave 0
//   C: new Audio("./Assets/28.mp3"),
//   Db: new Audio("./Assets/29.mp3"),
//   D: new Audio("./Assets/30.mp3"),
//   Eb: new Audio("./Assets/31.mp3"),
//   E: new Audio("./Assets/32.mp3"),
//   F: new Audio("./Assets/33.mp3"),
//   Gb: new Audio("./Assets/34.mp3"),
//   G: new Audio("./Assets/35.mp3"),
//   Ab: new Audio("./Assets/36.mp3"),
//   A: new Audio("./Assets/37.mp3"),
//   Bb: new Audio("./Assets/38.mp3"),
//   B: new Audio("./Assets/39.mp3"),

//   // Octave 1
//   C1: new Audio("./Assets/40.mp3"),
//   Db1: new Audio("./Assets/41.mp3"),
//   D1: new Audio("./Assets/42.mp3"),
//   Eb1: new Audio("./Assets/43.mp3"),
//   E1: new Audio("./Assets/44.mp3"),
//   F1: new Audio("./Assets/45.mp3"),
//   Gb1: new Audio("./Assets/46.mp3"),
//   G1: new Audio("./Assets/47.mp3"),
//   Ab1: new Audio("./Assets/48.mp3"),
//   A1: new Audio("./Assets/49.mp3"),
//   Bb1: new Audio("./Assets/50.mp3"),
//   B1: new Audio("./Assets/51.mp3"),

//   // Octave 2
//   C2: new Audio("./Assets/52.mp3"),
//   Db2: new Audio("./Assets/53.mp3"),
//   D2: new Audio("./Assets/54.mp3"),
//   Eb2: new Audio("./Assets/55.mp3"),
//   E2: new Audio("./Assets/56.mp3"),
//   F2: new Audio("./Assets/57.mp3"),
//   Gb2: new Audio("./Assets/58.mp3"),
//   G2: new Audio("./Assets/59.mp3"),
//   Ab2: new Audio("./Assets/60.mp3"),
//   A2: new Audio("./Assets/61.mp3"),
//   Bb2: new Audio("./Assets/62.mp3"),
//   B2: new Audio("./Assets/63.mp3")
// };

// const keyMap = {
//   // ───── Octave 0 (Z row) ─────
//   z: "C",
//   s: "Db",
//   x: "D",
//   d: "Eb",
//   c: "E",
//   v: "F",
//   g: "Gb",
//   b: "G",
//   h: "Ab",
//   n: "A",
//   j: "Bb",
//   m: "B",

//   // ───── Octave 1 (Q row) ─────
//   q: "C1",
//   2: "Db1",
//   w: "D1",
//   3: "Eb1",
//   e: "E1",
//   r: "F1",
//   5: "Gb1",
//   t: "G1",
//   6: "Ab1",
//   y: "A1",
//   7: "Bb1",
//   u: "B1",

//   // ───── Octave 2 (I row) ─────
//   i: "C2",
//   9: "Db2",
//   o: "D2",
//   0: "Eb2",
//   p: "E2",
//   "[": "F2",
//   "=": "Gb2",
//   "]": "G2",
//     ";": "Ab2",
//     "'": "A2",
//     ",": "Bb2",
//     ".": "B2"
// };
// // document.addEventListener('keydown',function(e){
// //     console.log(e);
    
// //     const key = e.key.toUpperCase();
// //     if(key == "D"){
// //         console.log("key d pressed");
// //         sounds[key].currentTime = 0;
// //         sounds[key].play()
// //     }
// //     else if(key == "C"){
// //         console.log("key c pressed");
// //         sounds[key].currentTime = 0;
// //         sounds[key].play()
// //     }
   
// // })

// document.addEventListener('keydown', function(e){
//     const pressed = e.key.toLowerCase();
//     const note = keyMap[pressed];
// // pressed = "z"
// // note = "C"
//     if (note && sounds[note]) {//undefined.play() ❌
//         const audio = sounds[note];//Retrieves preloaded Audio instance  
//         // sounds["C"] → Audio("./Assets/28.mp3")
//         audio.currentTime = 0;
//         audio.play();
//                 const keyDiv = document.querySelector(`[data-key="${pressed}"]`);
//         if (keyDiv) keyDiv.classList.add('active');
//     }
// });
// document.addEventListener('keyup', function(e){
//     const pressed = e.key.toLowerCase();
//     const keyDiv = document.querySelector(`[data-key="${pressed}"]`);
//     if (keyDiv) keyDiv.classList.remove('active');
// });

const piano = document.getElementById("piano");

const sounds = {
  // Octave 0
  C: new Audio("./Assets/28.mp3"),
  Db: new Audio("./Assets/29.mp3"),
  D: new Audio("./Assets/30.mp3"),
  Eb: new Audio("./Assets/31.mp3"),
  E: new Audio("./Assets/32.mp3"),
  F: new Audio("./Assets/33.mp3"),
  Gb: new Audio("./Assets/34.mp3"),
  G: new Audio("./Assets/35.mp3"),
  Ab: new Audio("./Assets/36.mp3"),
  A: new Audio("./Assets/37.mp3"),
  Bb: new Audio("./Assets/38.mp3"),
  B: new Audio("./Assets/39.mp3"),

  // Octave 1
  C1: new Audio("./Assets/40.mp3"),
  Db1: new Audio("./Assets/41.mp3"),
  D1: new Audio("./Assets/42.mp3"),
  Eb1: new Audio("./Assets/43.mp3"),
  E1: new Audio("./Assets/44.mp3"),
  F1: new Audio("./Assets/45.mp3"),
  Gb1: new Audio("./Assets/46.mp3"),
  G1: new Audio("./Assets/47.mp3"),
  Ab1: new Audio("./Assets/48.mp3"),
  A1: new Audio("./Assets/49.mp3"),
  Bb1: new Audio("./Assets/50.mp3"),
  B1: new Audio("./Assets/51.mp3"),

  // Octave 2
  C2: new Audio("./Assets/52.mp3"),
  Db2: new Audio("./Assets/53.mp3"),
  D2: new Audio("./Assets/54.mp3"),
  Eb2: new Audio("./Assets/55.mp3"),
  E2: new Audio("./Assets/56.mp3"),
  F2: new Audio("./Assets/57.mp3"),
  Gb2: new Audio("./Assets/58.mp3"),
  G2: new Audio("./Assets/59.mp3"),
  Ab2: new Audio("./Assets/60.mp3"),
  A2: new Audio("./Assets/61.mp3"),
  Bb2: new Audio("./Assets/62.mp3"),
  B2: new Audio("./Assets/63.mp3")
};
const keyMap = {
  // ───── Octave 0 (Z row) ─────
  z: "C",
  s: "Db",
  x: "D",
  d: "Eb",
  c: "E",
  v: "F",
  g: "Gb",
  b: "G",
  h: "Ab",
  n: "A",
  j: "Bb",
  m: "B",

  // ───── Octave 1 (Q row) ─────
  q: "C1",
  2: "Db1",
  w: "D1",
  3: "Eb1",
  e: "E1",
  r: "F1",
  5: "Gb1",
  t: "G1",
  6: "Ab1",
  y: "A1",
  7: "Bb1",
  u: "B1",

  // ───── Octave 2 (I row) ─────
  i: "C2",
  9: "Db2",
  o: "D2",
  0: "Eb2",
  p: "E2",
  "[": "F2",
  "=": "Gb2",
  "]": "G2",
    ";": "Ab2",
    "'": "A2",
    ",": "Bb2",
    ".": "B2"
};

// Identify black keys
const isBlack = (note) => note.includes("b");

// Loop through keyMap
Object.entries(keyMap).forEach(([key, note], index) => {
  const keyDiv = document.createElement("div");

  keyDiv.classList.add(isBlack(note) ? "black-key" : "white-key");
  keyDiv.dataset.key = key;

  // Label (optional)
  keyDiv.innerText = key;

  // Position black keys
  if (isBlack(note)) {
    keyDiv.style.position = "absolute";
    keyDiv.style.left = `${index * 60}px`;
  }

  piano.appendChild(keyDiv);
});
document.addEventListener('keydown', function(e){
    const pressed = e.key.toLowerCase();
    const note = keyMap[pressed];

    if (note && sounds[note]) {
        const audio = sounds[note];
        audio.currentTime = 0;
        audio.play();

        const keyDiv = document.querySelector(`[data-key="${pressed}"]`);
        if (keyDiv) keyDiv.classList.add('active');
    }
});

document.addEventListener('keyup', function(e){
    const pressed = e.key.toLowerCase();
    const keyDiv = document.querySelector(`[data-key="${pressed}"]`);
    if (keyDiv) keyDiv.classList.remove('active');
});