define(["src/randomizer"], function(randomizer) {
	describe("Randomizerをコールする場合", function() {
		// テストを実行する準備をする
		beforeEach(function() {
			// マッチャの追加
			this.addMatchers({
				//toBeNumberを追加
				toBeNumber: function() {
					var actual = String(this.actual);
					return actual.match(/^[0-9]+$/);
				}
			});
		});
		// テストケース
		it("数字を返却する", function() {
			var random = new randomizer();
			var actual = random.generate();
			expect(actual).toBeNumber();
		});
	});
});