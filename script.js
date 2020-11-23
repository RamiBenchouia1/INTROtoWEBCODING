//this is an example of a comment

//RANDOM QUOTE GENERATOR EXAMPLE: 
//https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

var quotes = [
    'To the poet and sage, all things are friendly and hallowed, all experiences profitable, all days holy, all men divine. -F. Nietzsche',
    'Gimme Oasis Wonderwall, I want that song bro. -R.S.',
    'A man is a god in ruins. -R. W. Emerson',
    'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. -J. Rumi',
    'De gustibus non est disputandum, mi amice',
    'To those who feel, the world is a tragedy; to those who think the world is a comedy. -H. Walpole',
    'Properly speaking, nothing has been experienced but what has been lived and made conscious. -A. Camus',
    'One repays a teacher badly if one always remains nothing but a pupil. -F. Nietzsche',
    'Whereof one cannot speak, thereof one must be silent -L. Wittgenstein',
    'Dreams are true while they last, and do we not live in dreams? -A. Lord Tennyson',
    'How many heartfuls of sorrow shall balance a bushel of wheat? How hard a thing is life to the lowly, and yet how human and real! And all this life and love and strife and failure, is it the twilight of nightfall or the flush of some faint-dawning day? -W.E.B. DuBois',
    'Freedom is a very good horse to ride, but to ride somehwere. -M. Arnold',
    'Everything was beautiful, and nothing hurt. -K. Vonnegut',
    'Cultural artistic expression reflects philosophical evolution, interest in growth, perspective, observation, interpretation. -Mordin',
    'Ain\'t no money like trap money. -Trapmoneybenny',
    'I fell in love with a white girl, I know that she dont like me back. -KEY!',
    'He who has learned to see beauty in due order and succession, when he comes toward the end will suddenly perceive a nature of wondrous beauty... beauty absolute, separate, simple, and everlasting, which without diminution and without increase, or any change, is imparted to the ever-growing and perishing beauties of all other things. He who from these, ascending under the influence of true love, begins to perceive that beauty, is not far from the end. -Diotima speaking to Socrates in Plato`s Symposium'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}