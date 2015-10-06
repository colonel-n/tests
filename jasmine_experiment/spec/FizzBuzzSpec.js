describe('FizzBuzz.execに数値を与えた場合', function() {
	var fizzBuzz;
	/*******************
	 *setUp
	 ******************/
	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
	});
	it('3でFizzを表示する', function() {
		var actual = fizzBuzz.exec(3);
		expect(actual).toEqual("Fizz");
	});
	it('5でBuzzを表示する', function() {
		var actual = fizzBuzz.exec(5);
		expect(actual).toEqual("Buzz");
	});
	it('15でFizzBuzzを表示する', function() {
		var actual = fizzBuzz.exec(15);
		expect(actual).toEqual("FizzBuzz");
	});
});
describe('FizzBuzz.getFizzBuzzRandomNumberSetをコールした場合', function() {
	var fizzBuzz;
	var randomizer;
	/*******************
	 *setUp
	 ******************/
	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
		randomizer = new Randomizer();
	});
	var fixtures = [{
		testcase: '3とFizzの組み合わせが返却される',
		testparam: 3,
		testexpected: ["3", "Fizz"]
	}, {
		testcase: '5とBuzzの組み合わせが返却される',
		testparam: 5,
		testexpected: ["5", "Buzz"]
	}, {
		testcase: '15とFizzBuzzの組み合わせが返却される',
		testparam: 15,
		testexpected: ["15", "FizzBuzz"]
	}, {
		testcase: '2と2の組み合わせが返却される',
		testparam: 2,
		testexpected: ["2", "2"]
	}];
	fixtures.forEach(function(fixture) {
		it(fixture.testcase, function() {
			// モック作成
			spyOn(randomizer, "generate").andReturn(fixture.testparam);
			var actual = fizzBuzz.getFizzBuzzRandomNumberSet(randomizer);
			expect(actual).toEqual(fixture.testexpected);
		});
	});
});