const scrollContainer = document.querySelector(".gallery");
const buttonBack = document.querySelector(".btnBack");
const buttonNext = document.querySelector(".btnNext");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

buttonNext.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
});

buttonBack.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
});