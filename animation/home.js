
function show(){
	document.querySelector('.more').id="shownMore";
	document.querySelector('.less').id="shownLess";
	document.querySelector('.header').id="shownHeader";
}

function unshow(){
	document.querySelector('.more').removeAttribute('id');
	document.querySelector('.less').removeAttribute('id');
	document.querySelector('.header').removeAttribute('id');

}

