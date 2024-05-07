// Get references to the necessary elements
const envelope = document.getElementById('envelope');
const flap = envelope.querySelector('.flap');
const pocket = envelope.querySelector('.pocket');
const letter = envelope.querySelector('.letter');
const seal = envelope.querySelector('.seal');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const letterContent = envelope.querySelector('.letter-content');
const acceptButton = envelope.querySelector('.accept');
const declineButton = envelope.querySelector('.decline');

// Add event listeners to the buttons
openButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);
acceptButton.addEventListener('click', accept);
declineButton.addEventListener('click', decline);

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
    letterContent.innerHTML = '<img src="blush.gif" alt="Happy GIF">';
    letterContent.innerHTML += '<p>The Garfield movie seems to be coming out that week, the movie choice can change based on choice of the day. The plan for the date would be fun at the arcade, movie, and something to eat. Time can be discussed closer to the date.</p>';
    // alert the user to take a screenshot of confirmation
    alert('Please take a screenshot of this confirmation!');
}

function decline() {
    // change the text of letter-content text to
    // addition of a sad gif
    letterContent.innerHTML = '<img src="https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif" alt="Sad GIF">';
    letterContent.innerHTML += '<div class="options"><button class="reschedule">I\'m sorry but I wouldn\'t be able to make it, but we can reschedule</button><button class="kidding">I\'m kidding, I would love to go out with you</button></div>';
    // Add event listeners to the new buttons
    const rescheduleButton = letterContent.querySelector('.reschedule');
    const kiddingButton = letterContent.querySelector('.kidding');
    rescheduleButton.addEventListener('click', () => {
        // Handle reschedule action
        alert('Let\'s reschedule!');
    });
    kiddingButton.addEventListener('click', accept);
}