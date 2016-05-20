
// Get Movie Title from Input

var movieQuery = '';

$(function(){

  $( '#search' ).keypress(function(e) {

    if(e.keyCode == 13) {
      var movieQuery = $('#search').val();
      console.log( movieQuery );

      $.get( '/movie?title=' + movieQuery, function( data ) {
          console.log(data);

          //.append('body');

          $('.movie-results').html(makeTemplate(data));
      });
    };
  });
});


// template

var makeTemplate = function(json) {
  return [
    '<img src="' + json.Poster + '"/>',
    '<h1>' + json.Title + '</h1>',
    '<h3> Released ' + json.Released + '</h3>',
    '<p> IMDB Rating:' + json.imdbRating + '</p>',

  ].join('');
};
