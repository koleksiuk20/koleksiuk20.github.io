function removeCloseLightbox() {
	var closeButton = $('div.lb-closeContainer');

	if(closeButton.length) {
		closeButton.remove();
	}
}

module.exports = removeCloseLightbox;