// Generated by CoffeeScript 1.6.3
(function() {
  require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
      jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
      underscore: 'lib/underscore-min'
    }
  });

  require(['src/randomizer', 'src/notepad', 'underscore']);

}).call(this);
