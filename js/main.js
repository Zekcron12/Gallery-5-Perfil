const MAIN = document.querySelector('.container-main');
const BUTTON = document.querySelector('.toggle');
const ICON = document.getElementById('IDicon');

BUTTON.onclick = function() {
	MAIN.classList.toggle('dark');
	if (MAIN.classList.contains('dark') == true) {
		ICON.classList.remove('fa-sun');
		ICON.classList.add('fa-moon');
	} else {
		ICON.classList.remove('fa-moon');
		ICON.classList.add('fa-sun');
	}
};