describe("Ajaxのテスト jquery1.5以降で有効", function() {
	var details = null;
	beforeEach(function() {
		details = new Details();
		console.log(Details);
	});
	afterEach(function() {
		details = null;
	});
	it("getDataを呼び出すとidとnameに値が代入される", function() {
		spyOn($, "ajax").andCallFake(

		function() {
			var d = $.Deferred();
			d.resolve({
				Id: 1,
				Name: "test1"
			});
			return d.promise();
		});
		details.getData("http://test.com", 1);
		expect(details.id).toEqual(1);
		expect(details.name).toEqual("test1");
	});
});