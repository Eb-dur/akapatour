
function iDidAClick() {
    alert("Klart du ska på tour!")
    let videoDiv = document.getElementById("imageDiv");
    let img = document.getElementById("immg");
    video = document.createElement("video");
    video.src = "video.mp4";
    video.controls = false;
    video.muted = false;
    video.autoplay = true;
    video.width = 600;
    videoDiv.removeChild(immg);
    videoDiv.appendChild(video);
    
}