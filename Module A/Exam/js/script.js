let popupButton = document.querySelector('.popup-menu-button');

popupButton.addEventListener('click', showPopupMenu);

function showPopupMenu {
	let popupMenu = document.querySelector('.popup-menu');
	popupMenu.classList.toggle('visible');
}