// Click event listener to run the game
document.addEventListener("click", (e) => {
  if (runningState === false) {
    startingContainer.style.display = "none";
    runGame();
    runningState = true;
  }
});

// Keypress "Space" event listener to run the game
document.addEventListener("keypress", (e) => {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (runningState === false) {
      startingContainer.style.display = "none";
      runGame();
      runningState = true;
    }
  }
});

// Restart button event listener
restartBtn.addEventListener("click", () => {
  window.location.reload(false);
});

// Creating the bird instance and executing specific methods for the bird
bird = new Bird(container);
bird.createBird();
bird.addJumpEvent();
bird.jump();
bird.animateBirdWings();

// Function to run/execute the game
function runGame() {
  // Function to animate the flapping of the bird
  function birdAnimation() {
    window.requestAnimationFrame(birdAnimation);
    bird.moveBird();
  }

  birdAnimation();

  // Creating two instances of pipes in the game
  for (let pipeCount = 0; pipeCount < 2; pipeCount++) {
    pipes = new Pipes(container, pipeCount, bird);
    pipes.createPipes();

    // Pushing the pipes in the array
    pipesArray.push(pipes);
  }

  // Iterating through the pipesArray and calling method to move for every item
  pipesArray.forEach((pipes) => {
    let moveInterval = setInterval(() => {
      pipes.movePipes(moveInterval);
      if (collision === true) {
        clearInterval(moveInterval);
        gameOverContainer.style.display = "block";
      }
    }, 1000 / 120);
  });
}
