define(['Backbone','jquery','handlebars','text!bugTemplate.hbs'], function(Backbone, $,Handlebars, bugTemplate){
	var BugView = Backbone.View.extend({
 		tagName : 'li',
 		events : {
 			"click" : "toggleBug"
 		},
 		toggleBug : function(){
 			this.model.toggle();
 		},
 		initialize : function(){
 			_.bindAll(this, "render", "remove");
 			this.model.on('change', this.render);
 			this.model.on('destroy', this.remove);
 		},
 		render : function(){
 			if (!this.template){
 				this.template = Handlebars.compile(bugTemplate);
 			}
 			this.$el.html(this.template(this.model.toJSON()));
 			return this;
 		},
 		remove : function(){
 			this.$el.remove();
 		}
 	});
 	return BugView;
 });