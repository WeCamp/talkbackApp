var args = arguments[0] || {};

$.title.text = args.get('title');
$.details.text = args.get('details');


function closeView() {
	$.topic.close();
}

$.topic.open();
 