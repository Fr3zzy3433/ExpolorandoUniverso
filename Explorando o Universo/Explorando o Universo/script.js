document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("info-btn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Explore mais sobre o universo!");
        });
    }

    const video = document.getElementById("videoFenomenos");

    if (video) {
        
        const startTime = 10;
        const endTime = 125; 

        video.addEventListener("loadedmetadata", () => {
            video.currentTime = startTime;
        });

        video.addEventListener("timeupdate", () => {
            if (video.currentTime >= endTime) {
                video.pause();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const expandedImg = document.getElementById("expanded-img");
    const closeLightbox = document.getElementById("close-lightbox");

    images.forEach(img => {
        img.addEventListener("click", () => {
            expandedImg.src = img.src; 
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none"; 
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none"; 
        }
    });
});
