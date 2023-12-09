#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

h1 {
    font-size: 3em;
    margin-bottom: 0.5em;
}

#message {
    font-size: 1.5em;
    margin-bottom: 2em;
}

#decorations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
}

.decoration {
    width: 100px;
    height: 100px;
    margin: 10px;
    cursor: grab;
}

.drag-target {
    touch-action: none;
}

/* Animations for visual and haptic feedback */

@keyframes shake {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(10deg) scale(1.1); }
    100% { transform: rotate(0deg) scale(1); }
}

@keyframes confetti {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
}
