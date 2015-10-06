// 依存関係の連鎖、noteの読み込みを保証。使用先で読み込む必要がなくなる
define(['src/note'], function(note) {
	var notes = [
	new note('pick up the kids', 'dont forget to pick  up the kids'), new note('get milk', 'we need two gallons of milk')];
	return {
		noteTitles: function() {
			var val = '';
			for (var i = 0, ii = notes.length; i < ii; i++) {
				val += notes[i].title + ' ';
			}
			return val;
		}
	};
});