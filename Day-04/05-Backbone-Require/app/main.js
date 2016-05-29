require(['Bugs', 'BugsCollectionView', 'jquery'], function(Bugs, BugsCollectionView, $){
	$(function(){
 		var bugs = new Bugs();
 		var bugsView = new BugsCollectionView({collection : bugs});
 		bugsView.render().$el.appendTo(document.body);
 		bugs.fetch();
 	});	
});