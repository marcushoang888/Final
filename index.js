const games = [
    {
        id: 0,
        name: "Drag and Drop",
        banner: "./src/Banner_Drag.png",
        local_link: "./drag_and_drop/drag_and_drop.html",
    },
    {
        id: 1,
        name: "Missing Letters",
        banner: "./src/Banner_Missing.png",
        local_link: "./missing_letter/missing_letter.html",
    },
    {
        id: 2,
        name: "Listen and Choose",
        banner: "./src/Banner_Listening.png",
        local_link: "./listen_choose/listen_choose.html",
    },
    {
        id: 3,
        name: "Look and Type",
        banner: "./src/Banner_Type.png",
        local_link: "./type_name/type_name.html",
    },
];

const gallery = [
    {
        id: 0,
        title: "Theme 1. Greeting - Good morning. Good bye.",
        banner: "https://i.ytimg.com/vi/Fw0rdSHzWFY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBfI_45vPWHWQ9gis0VATrAOD6RZQ",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/Fw0rdSHzWFY?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 1. Greeting - Good morning. Good bye. | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
        id: 1,
        title: "Theme 2. Time - What time is it?",
        banner: "https://i.ytimg.com/vi/cs81UdOc9TU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBDl2sJoa8BwX64mNCMEvLVyYCNXg",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/cs81UdOc9TU?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 2. Time - What time is it? | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
        id: 2,
        title: "Theme 3. Day - What day is it? It's Monday.",
        banner: "https://i.ytimg.com/vi/5cYMu3RTMJU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKc6UL1eCZ4o7AetArp_bZMBmA8A",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/5cYMu3RTMJU?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 3. Day - What day is it? It&#39;s Monday. | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
        id: 3,
        title: "Theme 4. Weather - How's the weather? It's sunny.",
        banner: "https://i.ytimg.com/vi/P9abGg_gF1s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBAJSgg59O7NgjunN6Y5l_MpCJhDA",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/P9abGg_gF1s?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 4. Weather - How&#39;s the weather? It&#39;s sunny. | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
        id: 4,
        title: "Theme 5. Sports - Let's play soccer. I like baseball.",
        banner: "https://i.ytimg.com/vi/mgSm4EoUYTQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDtIh6necIl15wHY6HmhdoL3FKasw",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/mgSm4EoUYTQ?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 5. Sports - Let&#39;s play soccer. I like baseball. | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
        id: 5,
        title: "Theme 6. Happy Birthday - This is for you. Thanks.",
        banner: "https://i.ytimg.com/vi/LMs5M_IiQbc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLABYQE91MqTiGo674XBAtYAGSgsgA",
        youtube: `<iframe width="859" height="491" src="https://www.youtube.com/embed/LMs5M_IiQbc?list=PLii5rkhsE0LecNHNQfsrFcxoG0ki_KVo_" title="Theme 6. Happy Birthday - This is for you. Thanks. | ESL Song &amp; Story - Learning English for Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
];
const banner = document.querySelector(".banner");
const left = document.querySelector("button:first-child");
const right = document.querySelector("button:last-child");

let index = 0;

banner.innerHTML = `<img onclick="changePage('${games[index].local_link}')" class="game_banner" src="${games[index].banner}" alt="${games[index].name}">`;

right.addEventListener("click", () => {
    if (index + 1 <= games.length - 1) {
        index++;
    } else {
        index = 0;
    }
    banner.innerHTML = `<img onclick="changePage('${games[index].local_link}')" class="game_banner" src="${games[index].banner}" alt="${games[index].name}">`;
});

left.addEventListener("click", () => {
    if (index - 1 >= 0) {
        index--;
    } else {
        index = games.length - 1;
    }
    banner.innerHTML = `<img onclick="changePage('${games[index].local_link}')" class="game_banner" src="${games[index].banner}" alt="${games[index].name}">`;
});

function changePage(link) {
    window.location.href = link;
}

const galleryContainer = document.querySelector(".gallery_container");
const galleryVideo = document.querySelector(".gallery_video");
const body = document.querySelector("body");

gallery.forEach((video) => {
    galleryContainer.innerHTML += `
    <div class="gallery_video" onclick="popUpVideo(${video.id})">
      <img src="${video.banner}" alt="${video.title}">
      <div class="gallery_video_title">${video.title}</div>
    </div>
  `;
});

function popUpVideo(id) {
    content = `
    <div class="popUp" onclick="closePopUp()">
        ${gallery[id].youtube}
        <i class="fa-solid fa-rectangle-xmark close" onclick="closePopUp()"></i>
    </div>
    `;
    body.insertAdjacentHTML("beforeend", content);
}

function closePopUp(e) {
    if (e) e.stopPropagation();
    const p = document.querySelector(".popUp");
    if (p) p.remove();
}
