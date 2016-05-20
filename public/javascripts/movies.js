
// Get Movie Title from Input

var movieQuery = '';

$(function(){
  $( '#search' ).keypress(function(e) {
    if(e.keyCode == 13) {
      var movieQuery = $('#search').val();
      console.log( movieQuery );
      $.get( '/movie?title=' + movieQuery, function( data ) {
          console.log(data);

          $('.movie-results').html(makeTemplate(data));
      });
    };
  });
});


// template

var makeTemplate = function(json) {
  return [
    '<img class="gif" src="' + json.data.image_url + '"/>',
    '<h2>' + json.Title + '</h2>',
    '<h3> Released ' + json.Released + '</h3>',
    '<p> IMDB Rating:' + json.imdbRating + '</p>',
    '<p> Rotten Tomatoes Rating:' + json.tomatoRating + '</p>',
    '<p>' + json.tomatoConsensus + '</p>',


  ].join('');
};
