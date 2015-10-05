define ['src/notepad'],(notepad)->
	describe "returns titles", ->
		it "returns titles", ->
			expect(notepad.noteTitles()).toEqual("pick up the kids get milk ")