const form = document.getElementById('greeting-form');
const greetingCard = document.getElementById('greeting-card');
const decorations = document.querySelectorAll('.decoration');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    document.getElementById('name').value = '';
    document.getElementById('message').value = '';

    greetingCard.style.display = 'block';
    document.getElementById('name').textContent = name;
    document.getElementById('message').textContent = message;

    decorations.forEach(decoration => {
        decoration.addEventListener('mousedown', dragStart);
        decoration.addEventListener('touchstart', dragStart);
    });
});

function dragStart(event) {
    const decoration = event.target;

    const feedbackAudio = new Audio(`audio/${decoration.dataset.type}.mp3`);
    feedbackAudio.play();

    switch (decoration.dataset.type) {
        case 'cake':
            decoration.classList.add('bounce');
            break;
        case 'balloon':
            decoration.classList.add('rotate');
            break;
        case 'confetti':
            decoration.classList.add('confetti');
            break;
    }
}
