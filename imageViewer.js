var pickedImageSrc = ""
const pickedImageDisplay = document.createElement("div")
pickedImageDisplay.classList.add("picked-image-display")
pickedImageDisplay.style.position = "fixed", pickedImageDisplay.style.top = "0",  pickedImageDisplay.style.width = "100%", pickedImageDisplay.style.height = "100vh", pickedImageDisplay.style.display = "flex", pickedImageDisplay.style.justifyContent = "center", pickedImageDisplay.style.alignItems = "center", pickedImageDisplay.style.backdropFilter = "blur(10px)", pickedImageDisplay.style.background = "rgba(0, 0, 0, 0.6)"

const imgs = document.querySelectorAll("img")
var currentImageIndex = 0

imgs.forEach(element => element.addEventListener("click", (e) => {
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i] == element) currentImageIndex = i
    }
    showImageDisplay()
}))

function showImageDisplay() {
    pickedImageSrc = imgs[currentImageIndex].getAttribute("src")
    pickedImageDisplay.innerHTML = `<span class="material-icons" id="close-icon" onclick="hideImageDisplay()" style="position: absolute; top: 20px; right: 20px; font-size: 20px; text-shadow: 0 0 10px rgba(0, 0, 0, 0.3); color: white; user-select: none; cursor: pointer">close</span><div class="picked-image" style="position: relative; width: min(1600px, 90vw); height: min(1000px, 90vh); display: flex; justify-content: center; align-items: center"><span class="material-icons navigate-icon navigate-icon" id="prev-icon" onclick="changeCurrentImage(-1)" style="position: absolute; left: 15px; font-size: max(3vw, 30px); color: white; user-select: none; cursor: pointer; text-shadow: 0 0 10px rgba(0, 0, 0, 0.3)">navigate_before</span><img src="${pickedImageSrc}" style="max-width: 100%; max-height: 100%; box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3); cursor: default"><span class="material-icons navigate-icon navigate-icon" id="next-icon" onclick="changeCurrentImage(1)" style="position: absolute; right: 15px; font-size: max(3vw, 30px); color: white; user-select: none; cursor: pointer; text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">navigate_next</span></div>`
    document.body.appendChild(pickedImageDisplay)
}

function hideImageDisplay() {
    document.body.removeChild(pickedImageDisplay)
}

function changeCurrentImage(value) {
    if (currentImageIndex + value < 0) currentImageIndex = imgs.length - 1
    else if (currentImageIndex + value >= imgs.length) currentImageIndex = 0
    else currentImageIndex += value
    
    document.querySelector(".picked-image").children[1].setAttribute("src", imgs[currentImageIndex].getAttribute("src"))
}