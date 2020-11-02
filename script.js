//this is an example of a comment

//RANDOM QUOTE GENERATOR EXAMPLE: 
//https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

var quotes = [
    'yo -nostradamus',
    'ello -gordon ramsey',
    'To the poet and sage, all things are friendly and hallowed, all experiences profitable, all days holy, all men divine. - F. Nietzsche',
    'fuck ya -lil wayne',
    'bruh -nick swardson',
    'my g -jigga',
    'play wonderwall -R.S.',
    'A man is a god in ruins. -R. W. Emerson',
    'Yesterday i was clever, so i wanted to change the world. Today i am wise, so i am changing myself. -J. Rumi',
    'De gustibus non est disputandum, mi amice',
    'To those who feel, the world is a tragedy; to those who think the world is a comedy',
    'Properly speaking, nothing has been experienced but what has been lived and made conscious. -A. Camus',
    'One repays a teacher badly if one always remains nothing but a pupil. -F. Nietzsche',
    'Whereof one cannot speak, thereof one must be silent -L. Wittgenstein'

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}