var Randomizer = function() {};
Randomizer.prototype = {
	generate: function() {
		return Math.floor(Math.random() * 100);
	}
};