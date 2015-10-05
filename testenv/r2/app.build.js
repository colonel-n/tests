({
	baseUrl: "js",
	dir: 'dist',
	paths: {
		jquery: "empty:",
		underscore: 'lib/underscore-min'
	},
	optimize: "uglify",
	removeCombined: true,
	modules: [{
		name: "main"
	}]
})