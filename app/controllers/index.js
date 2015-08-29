/**
 * Global Navigation Handler
 */
Alloy.Globals.Navigator = {
	
	
	open: function(controller, payload){
		var win = Alloy.createController(controller, payload || {}).getView();
	
			// added this property to the payload to know if the window is a child
			if (payload.displayHomeAsUp){
				
				win.addEventListener('open',function(evt){
					var activity=win.activity;
					activity.actionBar.displayHomeAsUp=payload.displayHomeAsUp;
					activity.actionBar.onHomeIconItemSelected=function(){
						evt.source.close();
					};
				});
			}
			win.open();
		
	}
};
 
var topic = Alloy.Collections.topic;
topic.fetch();

function openTopic(e) {
	var item = Alloy.Collections.topic.get(e.itemId);
	Alloy.Globals.Navigator.open("topic", item);
}

function refreshData(e) {
	topic.fetch({
        success: e.hide,
        error: e.hide
    });
}

$.index.open();
 