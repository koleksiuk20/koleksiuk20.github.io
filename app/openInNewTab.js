function openInNewTab() {
	$('.logos-list a').click(function() {
		$(this).attr('target', '_blank');
	});
}

module.exports = openInNewTab;