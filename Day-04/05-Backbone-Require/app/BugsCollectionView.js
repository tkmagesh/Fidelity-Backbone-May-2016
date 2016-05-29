define(['Backbone','jquery','BugView', 'handlebars', 'text!bugsCollectionTemplate.hbs'], 
function(Backbone, $,BugView, Handlebars, bugsCollectionTemplate){	
	var BugsCollectionView = Backbone.View.extend({
	 		//react to user actions
	 		events : {
	 			"click #btnAddBug" : "addNewBug",
	 			"click #btnRemoveClosed" : "removeClosed"
	 		},
	 		addNewBug : function(){
	 			var bugName = this.$("#txtBugName").val();
	 			this.collection.create({name : bugName});
	 		},
	 		removeClosed : function(){
	 			this.collection.removeClosed();
	 		},
	 		//react to collection changes
	 		initialize : function(){
	 			_.bindAll(this, 'addBugToList', "removeClosed");
	 			this.collection.on('add', this.addBugToList);
	 		},
	 		addBugToList : function(newBug){
	 			var newBugView = new BugView({model : newBug});
	 			newBugView.render().$el.appendTo(this.$("#olBugList"));
	 		},
	 		//render
	 		render : function(){
	 			this.$el.html(bugsCollectionTemplate);
	 			return this;
	 		}
	 	});
	return BugsCollectionView;
});