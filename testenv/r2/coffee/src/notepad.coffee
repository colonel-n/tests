define ['js/note'],(note)->
	notes = [
		new note 'pick up the kids','dont forget to pick  up the kids'
		new note 'get milk','we need two gallons of milk'
	]
	noteTitles: ->
		val = ''
		val += note.title + ' ' for note in notes
		val