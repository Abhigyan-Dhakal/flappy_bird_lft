class Pipes {
  constructor(container, pipeCount, bird) {
    this.pipePosY = getRandomInt(-220, 0);
    this.bird = bird;
    this.container = container;
    this.pipeCount = -pipeCount;
    this.pipePosX = PIPE_COLLISON_X_POS * this.pipeCount - 200;
    this.speed = PIPE_SPEED;

    // Method to create the pipes container and pipes
    this.createPipes = () => {
      // Creating pipe container for the pipes i.e. Top and Bottom Pipes
      this.pipeContainer = document.createElement("div");
      this.pipeContainer.style.position = "absolute";
      this.pipeContainer.style.height = `${PIPE_CONTAINER_HEIGHT}px`;
      this.pipeContainer.style.width = `${PIPE_CONTAINER_WIDTH}px`;
      this.pipeContainer.style.right = `${this.pipePosX}px`;
      this.pipeContainer.style.top = `${this.pipePosY}px`;
      this.container.appendChild(this.pipeContainer);

      // Creating top pipe
      this.topPipe = document.createElement("div");
      this.pipeContainer.appendChild(this.topPipe);
      this.topPipe.style.height = `${PIPE_HEIGHT}px`;
      this.topPipe.style.width = `${PIPE_WIDTH}px`;
      this.topPipe.style.backgroundImage = "url(./images/pipe-green.png)";
      this.topPipe.style.position = "absolute";
      this.topPipe.style.left = "0px";
      this.topPipe.style.top = `$0px`;
      this.topPipe.style.transform = "rotate(180deg)";

      // Creating Bottom pipe
      this.bottomPipe = document.createElement("div");
      this.pipeContainer.appendChild(this.bottomPipe);
      this.bottomPipe.style.height = `${PIPE_HEIGHT}px`;
      this.bottomPipe.style.width = `${PIPE_WIDTH}px`;
      this.bottomPipe.style.backgroundImage = "url(./images/pipe-green.png)";
      this.bottomPipe.style.position = "absolute";
      this.bottomPipe.style.left = "0px";
      this.bottomPipe.style.top = `${PIPE_HEIGHT + PIPE_GAP}px`;
      this.bottomPipe = document.createElement("div");
    };

    // Method to move the pipes horizontally
    this.movePipes = () => {
      this.pipePosX += this.speed;
      this.pipeContainer.style.right = `${this.pipePosX}px`;
      scoreHeading.innerHTML = `${score}`;
      if (this.pipePosX > this.container.clientWidth) {
        this.pipePosY = getRandomInt(-200, 0);
        this.pipeContainer.style.top = `${this.pipePosY}px`;
        this.pipePosX = -PIPE_WIDTH;
        score++;
      }
      if (this.pipePosX > PIPE_X_POS_THRES) {
      }
      this.checkCollision();
    };

    // Method to check the collition of the bird object with the pipes
    this.checkCollision = () => {
      if (
        this.pipePosX > PIPE_COLLISON_X_POS + BIRD_WIDTH &&
        this.pipePosX < PIPE_COLLISON_X_POS + PIPE_WIDTH + BIRD_WIDTH
      ) {
        if (
          !(
            this.bird.birdPosY > this.pipePosY + PIPE_HEIGHT &&
            this.bird.birdPosY <
              this.pipePosY + PIPE_HEIGHT + PIPE_GAP - BIRD_HEIGHT
          )
        ) {
          this.handleScore();
          collision = true;
          runningState = false;
        }
      }
      if (this.bird.birdPosY > FLOOR_POS_Y) {
        this.handleScore();
        collision = true;
        runningState = false;
      }
    };

    // Method to create and fetch the high score
    this.handleScore = () => {
      // Check if the highscore exists in the localsotrage and add incase it doesn't exist
      if (!localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", score);
      } else {
        // Fetch the previous highscore and compare it with current score
        let previousScore = localStorage.getItem("highscore");
        if (previousScore < score) {
          localStorage.setItem("highscore", score);
        }
      }
      // Write the score and highscore to the specific element
      highScoreHeading.innerHTML = `High Score: ${localStorage.getItem(
        "highscore"
      )}`;
      currentScoreHeading.innerHTML = `Current Score: ${score}`;
    };
  }
}
