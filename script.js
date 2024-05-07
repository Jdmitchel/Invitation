// Get references to the necessary elements
const envelope = document.getElementById('envelope');
const flap = envelope.querySelector('.flap');
const pocket = envelope.querySelector('.pocket');
const letter = envelope.querySelector('.letter');
const seal = envelope.querySelector('.seal');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

// Add event listeners to the buttons
openButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);

// Function to open the letter
function openLetter() {
    flap.classList.add('open');
    pocket.classList.add('open');
    letter.classList.add('open');
    seal.classList.add('open');
}

// Function to close the letter
function closeLetter() {
    flap.classList.remove('open');
    pocket.classList.remove('open');
    letter.classList.remove('open');
    seal.classList.remove('open');
}

function accept() {
    // change the text of letter-content text to
    // addition of a happy gif
    // the text should be: 'The Garfield movie seems to be coming out that week, the movie choice can change based on choice of the day. The plan for the date would be fun at the arcade,
    // movie, and something to eat. Time can be discussed closer to the date.
    // alert the user to take a screenshot of confirmation
}

function decline() {
    // change the text of letter-content text to
    // addition of a sad gif
    // two options for the user to choose from The options are buttons
    // 1. I'm sorry but i wouldn't be able to make it but we can reschedule
    // 2. I'm kidding i would love to go out with you
    // if 2 is clicked it should redirect tp the accept function
}
