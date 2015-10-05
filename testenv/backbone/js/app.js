(function($) {
	var User = Backbone.Model.extend({
		defaults: {
			'name': '',
			'age': 0
		}
	});
	var Users = Backbone.Collection.extend({
		model: User,
		url: 'data.json'
	});
	var UserView = Backbone.View.extend({
		elm: '#view',
		initialize: function() {
			this.collection = new Users();
			this.collection.fetch({
				error: $.proxy(this.error, this),
				success: $.proxy(this.render, this)
			});
		},
		render: function() {
			_(this.collection.models).each(function(item) {
				this.appendItem(item);
			}, this);
		},
		appendItem: function(item) {
			var user = {
				name: item.get('name'),
				age: item.get('age')
			};
			$(this.elm).append(this.template(user));
		},
		error: function() {
			$(this.elm).append(this.template({
				name: '取得できませんでした。'
			}));
		},
		template: _.template("<li><%= name %> <% if(typeof(age) != 'undefined'){ %>(<%= age %>)<% } %></li>")
	});
	var staffView = new UserView();
})(jQuery);