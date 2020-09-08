
let buttonimg=document.querySelector('.button img');
let button=document.querySelector('.button');
let main= document.querySelector('.main');
let clicked =false;
button.onclick = function(){
    if(clicked){
        button.style.transform="none";
        main.style.height="75px";
        clicked=false;
    }
    else{
        button.style.transform="rotate(90deg)";
        main.style.height="235px";
        clicked=true;
    }
};

window.onresize=()=>{
    if(window.innerWidth>600){
        clicked= false;
        main.style.height="75px";
        button.style.transform="none";
    }
};


