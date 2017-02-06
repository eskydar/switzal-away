chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

            if ( parent === top ) {
                var commentContainer = $(document).find('.comments');
                var comments = commentContainer.find('.comment');

                //insert option bar
				insertOptionBar(commentContainer);

                comments.each(function(index, comment) {
                	var $comment = $(comment);
                	if ( !$comment.hasClass('topcomment') && $comment.find('footer .baby').length ) $comment.hide();
				})
            }
		}
	}, 10);
});

function createToolbar () {

}

function insertOptionBar (container) {
	$('<span id="kudt-switzal-options"><span class="option zwitsal"></span></span>').insertAfter(container.find('.comment-sort'));
}