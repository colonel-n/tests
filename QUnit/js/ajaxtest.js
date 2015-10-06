$(function() {
	var server;
	var spy;
	module("Ajaxのテスト", {
		setup: function() { // 初期化処理
			server = sinon.fakeServer.create();
			spy = sinon.spy();
		},
		teardown: function() {
			server.restore();
		}
	});
	test("fakeServerを使用したテスト", function() {
		server.respondWith("GET", "./resouces", [200,
		{
			"Content-Type": "application/json"
		}, '[{"id":12, "comment":"Hey there"}]']);
		$.getJSON("./resouces", spy);
		server.respond();
		ok(spy.calledWith([{
			id: 12,
			comment: "Hey there"
		}]));
	});
	asyncTest("mockjaxを使用したテスト getJson", function() {
		//モックを作成
		var id = $.mockjax({
			url: '/restful/fortune',
			responseTime: 100,
			responseText: {
				status: 'success',
				fortune: 'Are you a turtle?'
			}
		});
		//処理の実行
		var fortune = getFortune();
		setTimeout(function() {
			start();
			notEqual(fortune, 'Things do not look good, no fortune was told', 'サーバーから結果を取得する');
			$.mockjaxClear(id);
		}, 10);
	});
	asyncTest("mockjaxを使用したテスト .ajax", function() {
		//モックを作成
		var id = $.mockjax({
			url: '/test/inline',
			dataType: 'json',
			responseTime: 2500,
			responseText: {
				say: 'Hello world!'
			}
		});
		//処理の実行
		var callback = function(data) {
				console.log('You said: ' + data.say);
				ok(true, "asynchronous PASS!");
				start();
				$.mockjaxClear(id);
			};
		ajaxWrapper(callback);
	});
});