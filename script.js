//this is an example of a comment

var quotes = [
    'yo -nostradamus',
    'ello -gordon ramsey',
    'fuck ya -lil wayne',
    'bruh -nick swardson',
    'my g -jigga',
    'play wonderwall -R.S.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}