var topic = Alloy.Collections.topic;

topic.fetch();
function openTopic(e) {
    
}

function refreshData(e) {
	topic.fetch({
        success: e.hide,
        error: e.hide
    });
}

$.index.open();
 