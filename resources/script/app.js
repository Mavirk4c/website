var header = document.getElementById("section-header-wrapper");
var sticky = header.offsetTop;



function setHeaderSticky() {
    console.log(sticky);
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
        console.log("STICK!")
    } else {
        header.classList.remove("sticky");
        console.log("UNSTICK!");
    }
};

window.addEventListener("scroll", setHeaderSticky);

