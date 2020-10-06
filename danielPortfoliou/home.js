
window.onresize= function(){
    if(window.innerWidth<=400)
        document.querySelector('#navBar ul').style.width=`${window.innerWidth}px`;
    else 
        document.querySelector('#navBar ul').style.width="100%"
}

const textArray=document.querySelectorAll('#container h1');
textArray.forEach(text=>{
    let espacée=false;
    let theText = text.innerHTML;
    let newText = '';
    for(let i =0; i<theText.length;i++){
        if(theText[i]==' '){
            newText+=`<div style="width:0.3em"></div>`
        }
        else if(espacée){
            newText += `<div>${theText[i]}</div>`;
            espacée =false;
        }
        else
            newText += `<div> ${theText[i]}</div>`;
    }
text.innerHTML=newText;
});




const backgroundButton = document.querySelector("#container .leftSide button .backgroundButton");
function translateBackground(value){
    backgroundButton.style.transform = `translateY(${value})`;
}