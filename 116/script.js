// console.log("JS loaded");
const cards = [
  {
    img:"https://picsum.photos/300/300?random=1",
    badge:"Uncommon",
    icon:"🐻",
    price:"0.5 ETH",
    code:"HAPE #67",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Hape1",
    user_name:"HAPE PRIME",
    earning:"$5/h",
    distribution:"80 | 20"
  },
  {
    img:"https://picsum.photos/300/300?random=2",
    badge:"Rare",
    icon:"🐵",
    price:"1.2 ETH",
    code:"HAPE #102",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Crypto2",
    user_name:"CryptoKing",
    earning:"$8/h",
    distribution:"70 | 30"
  },
  {
    img:"https://picsum.photos/300/300?random=3",
    badge:"Common",
    icon:"🐶",
    price:"0.3 ETH",
    code:"HAPE #203",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=NFT3",
    user_name:"NFTQueen",
    earning:"$3/h",
    distribution:"85 | 15"
  },
  {
    img:"https://picsum.photos/300/300?random=4",
    badge:"Legendary",
    icon:"🦁",
    price:"3.8 ETH",
    code:"HAPE #11",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Lion4",
    user_name:"LionDAO",
    earning:"$15/h",
    distribution:"60 | 40"
  },
  {
    img:"https://picsum.photos/300/300?random=5",
    badge:"Uncommon",
    icon:"🐸",
    price:"0.7 ETH",
    code:"HAPE #89",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Frog5",
    user_name:"FrogLabs",
    earning:"$6/h",
    distribution:"75 | 25"
  },
  {
    img:"https://picsum.photos/300/300?random=6",
    badge:"Rare",
    icon:"🐼",
    price:"1.5 ETH",
    code:"HAPE #150",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Panda6",
    user_name:"PandaX",
    earning:"$9/h",
    distribution:"65 | 35"
  },
  {
    img:"https://picsum.photos/300/300?random=8",
    badge:"Epic",
    icon:"🦊",
    price:"2.1 ETH",
    code:"HAPE #77",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Fox8",
    user_name:"FoxChain",
    earning:"$11/h",
    distribution:"68 | 32"
  },
  {
    img:"https://picsum.photos/300/300?random=9",
    badge:"Legendary",
    icon:"🐉",
    price:"4.5 ETH",
    code:"HAPE #1",
    profile_img:"https://api.dicebear.com/7.x/adventurer/svg?seed=Dragon9",
    user_name:"DragonLabs",
    earning:"$20/h",
    distribution:"50 | 50"
  }
];
let sum = '';

cards.forEach(function(e){
    console.log("ok");
    sum += `<div class="main">
        <div class="top">
            <img src=${e.img} alt="">
            <div class="badge slant">${e.badge}</div>
            <div class="icon">${e.icon}</div>
            <div class="price">${e.price}</div>
        </div>
        
        <div class="mid">
            <h5>${e.code}</h5>
            <div class="profile">
            <img src=${e.profile_img} alt="">
            <p>${e.user_name}</p>
            </div>
        </div>



        <div class="bottom">
            <div class="first">
            <p>Average earnings</p>
            <p>${e.earning}</p>
            </div>

            <div class="second">
            <p>Distribution%</p>
            <p>${e.distribution}</p>
            </div>
            
        </div>
    </div>`
})

document.querySelector('body').innerHTML = sum;