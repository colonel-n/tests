var FizzBuzz = function() {};
FizzBuzz.prototype = {
	exec: function(target) {
		return (target % 3 == 0 ? "Fizz" : "") + (target % 5 == 0 ? "Buzz" : "") + (target % 3 != 0 && target % 5 != 0 ? target : "")
	},
	getFizzBuzzRandomNumberSet:function(randomizer) {
		var randomNum = randomizer.generate();
		return [String(randomNum),this.exec(randomNum)];
	}
};