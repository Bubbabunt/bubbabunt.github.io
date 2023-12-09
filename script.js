const decorations = document.querySelectorAll('.decoration');

decorations.forEach(decoration => {
    decoration.addEventListener('mousedown', dragStart);
    decoration.addEventListener('touchstart', dragStart);
});

function dragStart(event) {
    const decoration = event.target;
    
    // Play feedback audio on drag
    if (decoration.dataset.feedback) {
        const audio = new Audio(decoration.dataset.feedback);
        audio.play();
    }

    // Start visual animation
    if (decoration.dataset.shakeDuration) {
        decoration.classList.add('shake');
        setTimeout(() => decoration.classList.remove('shake'), decoration.dataset.shakeDuration);
    }

    if (decoration.dataset.rotateDuration) {
        decoration.style.transform = `rotate(0deg)`;
        decoration.animate({
            transform: ['rotate(0deg)', 'rotate(360deg)'],
        }, {
            duration: parseInt(decoration.dataset.rotateDuration),
            iterations: Infinity,
        });
    }

    if (decoration.dataset.scaleDuration) {
        decoration.style.transform = `scale(1)`;
        decoration.animate({
            transform: ['scale(1)', 'scale(1.5)', 'scale(1)'],
        }, {
            duration: parseInt(decoration.dataset.scaleDuration),
            iterations: Infinity,
        });
    }
}
