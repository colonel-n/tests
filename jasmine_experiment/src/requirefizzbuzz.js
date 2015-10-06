var FizzBuzz = function() {};
FizzBuzz.prototype = {
	exec: function(target) {
		return (target % 3 == 0 ? "Fizz" : "") + (target % 5 == 0 ? "Buzz" : "") + (target % 3 != 0 && target % 5 != 0 ? target : "")
	},
	getFizzBuzzRandomNumberSet: function() {
		var fizzbuzz = this;
		require(["randomizer2"], function(Randomizer) {
			var randomizer = new Randomizer();
			var randomNum = randomizer.generate();
			return [String(randomNum), fizzbuzz.exec(randomNum)];
		});
	}
};