// Generated by CoffeeScript 1.6.3
(function() {
  define(['js/note'], function(note) {
    var notes;
    notes = [new note('pick up the kids', 'dont forget to pick  up the kids'), new note('get milk', 'we need two gallons of milk')];
    return {
      noteTitles: function() {
        var val, _i, _len;
        val = '';
        for (_i = 0, _len = notes.length; _i < _len; _i++) {
          note = notes[_i];
          val += note.title + ' ';
        }
        return val;
      }
    };
  });

}).call(this);
