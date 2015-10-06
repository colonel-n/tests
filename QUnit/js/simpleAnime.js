/* boxをクリックすると動く */
var mvb = {}; // namespace
/* 定数 */
mvb.con = {
	rootid: 'root',
	// rootdivのid
	boxid: 'box1',
	// boxのid
	boxtop: 20,
	// boxのcss top
	boxleft: 20,
	// boxのcss left初期値
	boxmvlen: 200,
	// boxの移動距離(px)
	boxclsnm: 'boxdiv',
	// boxのcss classname
	bgcol: 'rgb(51,153,255)' // boxの背景色
}; /* boxを移動 */
mvb.movebox = function() {
	var $box = $(this);
	var afterleft; // 移動後のleft
	if ($box.css('left') == mvb.con.boxleft + 'px') {
		afterleft = mvb.con.boxleft + mvb.con.boxmvlen;
	} else {
		afterleft = mvb.con.boxleft;
	}
	$box.animate({
		left: afterleft
	});
};
$(document).ready(function() {
	// boxを作成し、rootdivに追加
	var $box = $('<div/>').attr('id', mvb.con.boxid).addClass(mvb.con.boxclsnm).css('backgroundColor', mvb.con.bgcol).css('top', mvb.con.boxtop).css('left', mvb.con.boxleft);
	$('#' + mvb.con.rootid).append($box);
	// イベント付与
	$box.click(mvb.movebox);
});