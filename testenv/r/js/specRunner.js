require.config({
	urlArgs: 'cb=' + Math.random(),
	paths: {
		jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
		'jasmine': 'jasmine/lib/jasmine',
		'jasmine-html': 'jasmine/lib/jasmine-html',
		spec: 'spec/'
	},
	shim: {
		jasmine: {
			exports: 'jasmine'
		},
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		}
	}
});
require(['jquery', 'jasmine-html'], function($, jasmine) {
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;
	var htmlReporter = new jasmine.HtmlReporter();
	jasmineEnv.addReporter(htmlReporter);
	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};
	$(function() {
		require(specs, function(spec) {
			jasmineEnv.execute();
		});
	});
});