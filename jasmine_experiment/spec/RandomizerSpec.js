describe('generateを呼び出した場合', function() {
	define('RandomizerSpec', function() {
		it('数字が返却される', function() {
			require(['randomizer2'], function(Randomizer) {
				var randomizer = new Randomizer();
				var actual = randomizer.generate();
				expect(actual).toMatch(/^[0-9]+$/);
			});
		});
	});
});