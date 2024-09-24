const detailBtn = document.querySelector('main aside .details-container button');
const chevron = document.querySelector('main aside .details-container button span');
const overlayTable = document.querySelector('main aside .details-container .table .overlay');
const overlaySidebar = document.querySelector('header .overlay');
const hamburgerBtn = document.querySelector('header .hamburger-container .hamburger-menu');
const hamburgerBtnEl = document.querySelectorAll('header .hamburger-container .hamburger-menu span');
const modalContainer = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const btnShowModal = document.getElementById('show-modal');
const btnCloseModal = document.getElementById('close-modal');

detailBtn.addEventListener('click', showDetail);
hamburgerBtn.addEventListener('click', showSideBar);
btnShowModal.addEventListener('click', showModal);
btnCloseModal.addEventListener('click', closeModal);

function showDetail() {
	overlayTable.classList.toggle('show');
	if (overlayTable.classList.contains('show')) {
		chevron.style.transform = 'rotate(90deg)';
		overlayTable.style.transform = 'scaleY(0)';
	} else {
		chevron.style.transform = 'rotate(0)';
		overlayTable.style.transform = 'scaleY(1)';
	}
}

function showSideBar() {
	hamburgerBtnEl[0].classList.toggle('first-move');
	hamburgerBtnEl[1].classList.toggle('second-move');
	hamburgerBtnEl[2].classList.toggle('third-move');

	overlaySidebar.classList.toggle('active');
}

function showModal() {
	modalContainer.classList.add('show');
	setTimeout(() => {
		modalContent.classList.add('show');
	}, 200);
}

function closeModal(e) {
	modalContent.classList.remove('show');
	setTimeout(() => {
		modalContainer.classList.remove('show');
	}, 700);
}

window.addEventListener('click', (e) => {
	if (e.target == modalContainer) {
		modalContent.classList.remove('show');
		setTimeout(() => {
			modalContainer.classList.remove('show');
		}, 700);
	}
});
