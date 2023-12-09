var wishes = [
    "Wishing you a day filled with happiness and a year filled with joy!",
    "May this birthday be filled with lots of love, laughter, and all your favorite people around!",
    "May this birthday be the start of a year filled with wonderful moments and wonderful people!",
    "May this birthday be the start of a new beginning, filled with new adventures and new experiences!",
    "May this birthday be the start of a new chapter in your life, filled with new memories and new dreams!"
];

var randomWish = wishes[Math.floor(Math.random() * wishes.length)];

document.getElementById('wish').innerHTML = randomWish;
