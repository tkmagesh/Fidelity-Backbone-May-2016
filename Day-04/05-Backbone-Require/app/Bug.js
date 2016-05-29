define(['Backbone'], function(Backbone){
	var Bug = Backbone.Model.extend({
		defaults : {
			name : '',
			desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			isClosed : false,
			createdAt : new Date()
		},
		initialize : function(){
			this.createdAt = new Date()
		},
		toggle : function(){
			this.save('isClosed', !this.get('isClosed'));
		}
	});
	return Bug;	
})
