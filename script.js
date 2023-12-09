function animateGreetings() {
  // Use anime.js for animations
  anime({
    targets: '.greeting-card',
    translateX: [0, 50],
    opacity: [1, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
    complete: function(anim) {
      // Animation complete callback
      document.getElementById('greetingCard').innerHTML = '<h1>🎉 Happy Birthday! 🎉</h1><p>Wishing you a fantastic day filled with joy and celebration.</p>';
      anime({
        targets: '.greeting-card',
        translateX: [50, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000
      });
    }
  });

  // You can add more animations or effects as needed
}
