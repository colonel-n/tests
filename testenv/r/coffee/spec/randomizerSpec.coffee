define ['src/randomizer'],(randomizer)->
	describe "Randomizerをコールする場合", ->
		beforeEach ->
			@addMatchers (
				toBeNumber: ->
					actual = String(this.actual);
					actual.match(/^[0-9]+$/)
			)
				
		it "#数字を返却する", ->	
			random = new randomizer()
			actual = random.generate()
			expect(actual).toBeNumber()