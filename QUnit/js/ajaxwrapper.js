function ajaxWrapper(callback) {
	$.ajax({
		url: '/test/inline',
		dataType: 'json',
		async: false,
		success: function(json) {
			//console.log('You said: ' + json.say);
			callback(json);
		}
	});
}

function getFortune() {
	$.getJSON('/restful/fortune', function(response) {
		if (response.status == 'success') {
			return 'Your fortune is: '.concat(response.fortune);
		} else {
			return 'Things do not look good, no fortune was told';
		}
	});
}

function Details() {
	this.id = 0;
	this.name = "";
}
Details.prototype.getData = function(url, id) {
	var self = this;
	$.ajax({
		url: url,
		type: "GET",
		datatype: "json",
		data: {
			id: id
		},
	}).then(function(data) {
		self.id = data.Id;
		self.name = data.Name;
	}, function(message) {
		console.log(message);
	});
};