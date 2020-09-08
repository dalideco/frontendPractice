const background =document.querySelector('button .buttonBackground');

function translateBackground(value){
    background.style.transform ="translateY("+ value +")";
}