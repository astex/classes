var word, misses;

var render_hangman = function(e) {
  $('#container').off();

  word = $('[name=word]').val();

  var html = '' +
    '<div id="miss-container"></div>' +
    '<div id="word-container"></div>' +
    '<div id="guess-container"></div>';

  $('#container').html(html);
};
var render_word_form = function() {
  $('#container').off();

  var html = '' +
    '<label>' +
      'Enter a word:' +
      '<input name="word">' +
    '</label>' +
    '<button data-action="submit">Submit</button>';

  $('#container').html(html);
  $('#container').on('click', '[data-action=submit]', render_hangman);
};

render_word_form();
