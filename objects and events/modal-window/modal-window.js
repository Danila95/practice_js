let send = document.querySelector('.btn');

send.addEventListener('click', function () {
	let dmOverlay = document.createElement('div');
	let dmTable = document.createElement('div');
	let dmCell = document.createElement('div');
	let dmModal = document.createElement('div');
	let closeLink = document.createElement('a');
	let popupTitle = document.createElement('h3');
	let plLeft = document.createElement('div');

	dmOverlay.className = 'dm-overlay';
	dmTable.className = 'dm-table';
	dmCell.className = 'dm-cell';
	dmModal.className = 'dm-modal';
	closeLink.className = 'close';
	plLeft.className = 'pl-left';

	dmOverlay.id = 'win1';
	closeLink.href = '#close';

	popupTitle.innerHTML = 'Заголовок модального окна';


	document.body.appendChild(dmOverlay);
	dmOverlay.appendChild(dmTable);
	dmTable.appendChild(dmCell);
	dmCell.appendChild(dmModal);
	dmModal.appendChild(closeLink);
	dmModal.appendChild(popupTitle);
	dmModal.appendChild(plLeft);

})