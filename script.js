
const videoOverlay1 = document.getElementById("video-overlay1");
const videoOverlay2 = document.getElementById("video-overlay2");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

const secretButton = document.querySelector(".secret-button");
const hoverOverlay1 = document.getElementById("movie1");
const hoverOverlay2 = document.getElementById("movie2");
const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");


secretButton.addEventListener("click", () => {
        videoOverlay1.style.display = "none";
        stopVideo1();
        videoOverlay2.style.display = "none";
        stopVideo2();

});

function stopVideo1 (){
    videoOverlay1.style.display = "none";
    video1.pause();
    video1.currentTime = 0; // Reset video to start when hidden
};
function stopVideo2 (){
    videoOverlay2.style.display = "none";
    video2.pause();
    video2.currentTime = 0; // Reset video to start when hidden
};


hoverOverlay1.addEventListener("click", () => {
    videoOverlay1.style.display = "flex";
    video1.currentTime = 0; // Start from the beginning
    video1.play();
    video1.addEventListener("ended", (event) => { stopVideo1();});
});

hoverOverlay2.addEventListener("click", () => {
    videoOverlay2.style.display = "flex";
    video2.currentTime = 0; // Start from the beginning
    video2.play();
    video2.addEventListener("ended", (event) => { stopVideo2();});
});

// Function to show cursor
function showCursor() {
    document.body.style.cursor = 'default';
    cursorVisible = true;
}

// Function to hide cursor
function hideCursor() {
    document.body.style.cursor = 'none';
    cursorVisible = false;
    hoverOverlay1.style.backgroundImage="url(film_poster1.png)"
    hoverOverlay2.style.backgroundImage="url(film_poster2.png)"
    description1.style.display="none";
    description2.style.display="none";
}



// Detect mouse movement and set timer
hoverOverlay1.addEventListener('mousemove', () => {
    clearTimeout(mouseTimer);
    showCursor();
    hoverOverlay1.style.backgroundImage="url(hover_overlay1.png)"
    hoverOverlay2.style.backgroundImage="url(film_poster2.png)"
    description1.style.display="block";
    description2.style.display="none";
    mouseTimer = setTimeout(() => {
        hideCursor();
        
    }, 8000); 
});
hoverOverlay2.addEventListener('mousemove', () => {  
    clearTimeout(mouseTimer);
    showCursor();
    hoverOverlay2.style.backgroundImage="url(hover_overlay2.png)"
    hoverOverlay1.style.backgroundImage="url(film_poster1.png)"
    description1.style.display="none";
    description2.style.display="block";

    mouseTimer = setTimeout(() => {
        hideCursor();
        
    }, 8000); 
});

videoOverlay1.addEventListener('mousemove', () => {
    clearTimeout(mouseTimer);
    showCursor();

    mouseTimer = setTimeout(() => {
        hideCursor();
        
    }, 4000); 
});
videoOverlay2.addEventListener('mousemove', () => {
    clearTimeout(mouseTimer);
    showCursor();

    mouseTimer = setTimeout(() => {
        hideCursor();
        
    }, 4000); 
});
window.addEventListener('load', () => {
    mouseTimer = setTimeout(() => {
        hideCursor();
    }, 4000);
});
