const showNav = document.querySelector('.navBar .line');
const myUl= document.querySelector('.navBar ul');
let clickedOnNav=false;

//lines

const lineOne = document.querySelector('.navBar .line .line-one');
const lineTwo = document.querySelector('.navBar .line .line-two');
const lineThree = document.querySelector('.navBar .line .line-three');



showNav.onclick=function(){
    if(!clickedOnNav){
        myUl.classList.add('shownUl');
        lineOne.id="line-one";
        lineTwo.id="line-two";
        lineThree.id="line-three";
        clickedOnNav = true;
    }
    else{
        myUl.classList.remove('shownUl');
        lineOne.removeAttribute('id');
        lineTwo.removeAttribute('id');
        lineThree.removeAttribute('id');
        clickedOnNav = false;
    }
};

