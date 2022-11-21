listenow = document.getElementById("listennow");
viewalldates = document.getElementById("view_all_dates");
music_video = document.getElementById("music_video")
let login_status;

let key_list = [];
for (let i = 0; i < sessionStorage.length; i = i+1 ) {
    key_list.push(sessionStorage.key(i))
}
if (key_list.includes("login")){
    login_status = true;
} else {
    login_status = false;
}


listennow.onclick = () => {
    if (login_status == false){
        window.location.href = "dangnhap.html"
    } else {
        window.location.href = "Music.html"
    }
};

viewalldates.onclick = () => {
    if (login_status == false){
        window.location.href = "dangnhap.html"
    } else {
        window.location.href = "Music.html"
    }
};

music_video.onclick = () => {
    if (login_status == false){
        window.location.href = "dangnhap.html"
    } else {
        window.location.href = "Music.html"
    }
};