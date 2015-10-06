/* simpleAnime.js のテスト
 * jquery.js を前提としている
 */
var timeoutID;
module('$(document).ready');
asyncTest('waif for ready', 1, function() {
	timeoutID = window.setInterval(function() {
		if ($('#' + mvb.con.boxid).length > 0) {
			ok(true, 'box has appended.');
			window.clearTimeout(timeoutID);
			start();
		}
	}, 100);
});
test('boxdiv', 4, function() {
	var $box = $('#' + mvb.con.boxid);
	strictEqual($box.hasClass(mvb.con.boxclsnm), true, 'classname');
	equal($box.css('backgroundColor').replace(/\s/g, ''), mvb.con.bgcol, 'backgroundColor');
	equal($box.css('top'), mvb.con.boxtop + 'px', 'css top');
	equal($box.css('left'), mvb.con.boxleft + 'px', 'css left');
});
module('mvb.movebox');
asyncTest('movebox 1', 1, function() {
	// boxの位置を初期値にする
	var $box = $('#' + mvb.con.boxid);
	$box.css('left', mvb.con.boxleft);
	$box.click();
	timeoutID = window.setInterval(function() {
		if ($box.css('left') == (mvb.con.boxleft + mvb.con.boxmvlen) + 'px') {
			ok(true, 'box moved left.');
			window.clearTimeout(timeoutID);
			start();
		}
	}, 100);
});
asyncTest('movebox 2', 1, function() {
	var $box = $('#' + mvb.con.boxid);
	$box.click();
	timeoutID = window.setInterval(function() {
		if ($box.css('left') == mvb.con.boxleft + 'px') {
			ok(true, 'box moved right.');
			window.clearTimeout(timeoutID);
			start();
		}
	}, 100);
});