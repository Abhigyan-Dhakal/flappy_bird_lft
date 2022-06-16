document.addEventListener("click", (e) => {
  if (runningState === false) {
    startingContainer.style.display = "none";
    runGame();
    runningState = true;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (runningState === false) {
      startingContainer.style.display = "none";
      runGame();
      runningState = true;
    }
  }
});

restartBtn.addEventListener("click", () => {
  window.location.reload(false);
});

bird = new Bird(container);
bird.createBird();
bird.addJumpEvent();
bird.jump();
bird.animateBirdWings();

function runGame() {
  function birdAnimation() {
    window.requestAnimationFrame(birdAnimation);
    bird.moveBird();
  }

  birdAnimation();

  for (let pipeCount = 0; pipeCount < 2; pipeCount++) {
    pipes = new Pipes(container, pipeCount, bird);
    pipes.createPipes();

    pipesArray.push(pipes);
  }

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

// runGame();
