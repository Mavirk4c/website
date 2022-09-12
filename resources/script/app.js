let header = document.getElementById("section-header-wrapper");
let sticky = header.offsetTop;
let aboutTitle = document.getElementById("about");


function setHeaderSticky() {
    checkOffSetTop();
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
        return true;
    } else {
        header.classList.remove("sticky");
        return false;
    }
};

function addMarginToAboutTitle() {
    if(window.scrollY > sticky) {
        console.log("add margin");
        aboutTitle.classList.add("about-container")
    } else {
        aboutTitle.classList.remove("about-container")
    }
}

function checkOffSetTop() {
        sticky = header.offsetTop;
}


checkOffSetTop();
window.addEventListener("scroll", setHeaderSticky);
window.addEventListener("scroll", addMarginToAboutTitle);