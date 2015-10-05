require.config({
	urlArgs: 'cb=' + Math.random(),
	paths: {
		jquery: 'lib/jquery',
		'jasmine': 'jasmine/lib/jasmine',
		'jasmine-html': 'jasmine/lib/jasmine-reporters/jasmine.phantomjs-reporter',
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
	var htmlReporter = new jasmine.PhantomJSReporter();
	jasmineEnv.addReporter(htmlReporter);
	$(function() {
		require(specs, function(spec) {
			jasmineEnv.execute();
		});
	});
});