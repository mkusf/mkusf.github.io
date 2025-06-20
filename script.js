


const Aboutbutton = document.getElementById("AboutButton");
Aboutbutton.addEventListener("click", function() {
    const AboutSection = document.getElementById("about");
    AboutSection.scrollIntoView({behavior: "smooth"});
});

const TSButton = document.getElementById("TSButton");
TSButton.addEventListener("click", function() {
    const TSSection = document.getElementById("TS");
    TSSection.scrollIntoView({behavior: "smooth"});
});

const ProjectsButton = document.getElementById("ProjectsButton");
ProjectsButton.addEventListener("click", function() {
    const ProjectSection = document.getElementById("proj");
    ProjectSection.scrollIntoView({behavior: "smooth"});
});

const FPButton = document.getElementById("FPButton");
FPButton.addEventListener("click", function() {
    const FPSection = document.getElementById("FP");
    FPSection.scrollIntoView({behavior: "smooth"});
});
const ReturnButton = document.getElementById("ReturnButton");
ReturnButton.addEventListener("click", function() {
    const topSection = document.getElementById("top");
    topSection.scrollIntoView({behavior: "smooth"});
});