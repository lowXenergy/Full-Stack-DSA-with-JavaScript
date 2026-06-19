const reels = [
  {
    ismuted: true,
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "https://www.pexels.com/download/video/20641979/",
    userprofile: "https://i.pravatar.cc/500?img=1"
  },
  {
    ismuted: true,
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "https://www.pexels.com/download/video/29050834/",
    userprofile: "https://i.pravatar.cc/500?img=2"
  },
  {
    ismuted: true,
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "https://www.pexels.com/download/video/33952829/",
    userprofile: "https://i.pravatar.cc/500?img=3"
  },
  {
    ismuted: true,
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "https://www.pexels.com/download/video/18070600/",
    userprofile: "https://i.pravatar.cc/500?img=4"
  },
  {
    ismuted: true,
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "Code. Sleep. Repeat. That's the cycle.",
    video: "https://www.pexels.com/download/video/37468569/",
    userprofile: "https://i.pravatar.cc/500?img=5"
  },
  {
    ismuted: true,
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "https://www.pexels.com/download/video/37495674/",
    userprofile: "https://i.pravatar.cc/500?img=6"
  },
  {
    ismuted: true,
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "You won't believe this burger exists 🤯🍔",
    video: "https://www.pexels.com/download/video/6963394/",
    userprofile: "https://i.pravatar.cc/500?img=7"
  },
  {
    ismuted: true,
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "https://www.pexels.com/download/video/36947468/",
    userprofile: "https://i.pravatar.cc/500?img=8"
  },
  {
    ismuted: true,
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The most underrated smartphone of 2024 📱",
    video: "https://www.pexels.com/download/video/37138321/",
    userprofile: "https://i.pravatar.cc/500?img=9"
  },
  {
    ismuted: true,
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "GSAP can literally change your career. Start today.",
    video: "https://www.pexels.com/download/video/37212041/",
    userprofile: "https://i.pravatar.cc/500?img=10"
  }
];

var allReels = document.querySelector('.all-reels')


function addData() {
  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
          ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
      
    </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.
        username}</h4>
              <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
  })

  allReels.innerHTML = sum
}

addData()


allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData()
  }
  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }

    addData()
  }

 if (dets.target.classList.contains('mute') || dets.target.closest('.mute')) {
    const muteBtn = dets.target.classList.contains('mute') ? dets.target : dets.target.closest('.mute')
    const idx = muteBtn.id
    if (!reels[idx].ismuted) {
      reels[idx].ismuted = true
    } else {
      reels[idx].ismuted = false
    }
    addData()
  }

})