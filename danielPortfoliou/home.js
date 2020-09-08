const backgroundButton = document.querySelector("#container .leftSide button .backgroundButton");
function translateBackground(value){
    backgroundButton.style.transform = `translateY(${value})`;
}