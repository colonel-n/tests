$(function() {
	var fizzBuzz;
	module("FizzBuzz.execに数値を与えた場合", {
		setup: function() { // 初期化処理
			fizzBuzz = new FizzBuzz();
		}
	});
	test("3でFizzを表示する", function() {
		var actual = fizzBuzz.exec(3);
		strictEqual(actual, "Fizz", "NG");
	});
	test("5でBuzzを表示する", function() {
		var actual = fizzBuzz.exec(5);
		strictEqual(actual, "Buzz", "NG");
	});
	test("15でFizzBuzzを表示するパターン", function() {
		var actual = fizzBuzz.exec(15);
		strictEqual(actual, "FizzBuzz", "NG");
	});
});
$(function() {
	var fizzBuzz;
	var randomizer;
	var stub;
	module("FizzBuzz.getFizzBuzzRandomNumberSetをコールした場合", {
		setup: function() { // 初期化処理
			fizzBuzz = new FizzBuzz();
			randomizer = new Randomizer();
			stub = sinon.stub(randomizer, "generate");
		},
		teardown: function() {
			stub.restore();
		}
	});
	test("3とFizzの組み合わせが返却される", function() {
		stub.returns(3);
		var actual = fizzBuzz.getFizzBuzzRandomNumberSet(randomizer);
		var expected = ["3", "Fizz"];
		deepEqual(actual, expected, "NG");
	});
	test("5とBuzzの組み合わせが返却される", function() {
		stub.returns(5);
		var actual = fizzBuzz.getFizzBuzzRandomNumberSet(randomizer);
		var expected = ["5", "Buzz"];
		deepEqual(actual, expected, "NG");
	});
	test("15とFizzBuzzの組み合わせが返却される", function() {
		stub.returns(15);
		var actual = fizzBuzz.getFizzBuzzRandomNumberSet(randomizer);
		var expected = ["15", "FizzBuzz"];
		deepEqual(actual, expected, "NG");
	});
	test("2と2の組み合わせが返却される", function() {
		stub.returns(2);
		var actual = fizzBuzz.getFizzBuzzRandomNumberSet(randomizer);
		var expected = ["2", "2"];
		deepEqual(actual, expected, "NG");
	});
});