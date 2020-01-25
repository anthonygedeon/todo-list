import html from '../dist/index.html';
import './assets/stylesheets/index.scss';

const checkboxes = document.querySelectorAll('.checkboxes__input');

function checked() {
	console.log(this);
	this.toggleAttribute('checked');
}

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener('click', checked);
});
