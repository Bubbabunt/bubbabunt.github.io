var snake = [{top: 0, left: 0}];
var direction = 'right';
var food = {top: 5, left: 10};

function moveSnake() {
    var head = snake[0];
    var newHead;

    if (direction === 'right') {
        newHead = {top: head.top, left: head.left + 1};
    } else if (direction === 'down') {
        newHead = {top: head.top + 1, left: head.left};
    } else if (direction === 'left') {
        newHead = {top: head.top, left: head.left - 1};
    } else if (direction === 'up') {
        newHead = {top: head.top - 1, left: head.left};
    }

    snake.unshift(newHead);

    if (newHead.left === food.left && newHead.top === food.top) {
        food.left = Math.floor(Math.random() * 20);
        food.top = Math.floor(Math.random() * 20);
    } else {
        snake.pop();
    }
}

function drawSnake() {
    var gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    var snakeElement = document.createElement('div');
    snakeElement.classList.add('snake');
    snakeElement.style.top = snake[0].top * 2 + '%';
    snakeElement.style.left = snake[0].left * 2 + '%';
    gameBoard.appendChild(snakeElement);

    var foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.top = food.top * 2 + '%';
    foodElement.style.left = food.left * 2 + '%';
    gameBoard.appendChild(foodElement);
}

setInterval(function() {
    moveSnake();
    drawSnake();
}, 100);

document.onkeydown = function(event) {
    if (event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    } else if (event.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    } else if (event.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (event.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    }
};
