define(['Backbone', 'Bug'], function(Backbone, Bug){
	var Bugs = Backbone.Collection.extend({
 		model : Bug,
 		url : 'http://localhost:3000/bugs',
 		removeClosed : function(){
 			this.filter(function(bug){
 				return bug.get('isClosed')
 			}).forEach(function(bug){
 				bug.destroy();
 			});
 		}
 	});
 	return Bugs;
 })