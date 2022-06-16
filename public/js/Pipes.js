class Pipes {
  constructor(container, pipeCount, bird) {
    this.pipePosY = getRandomInt(-220, 0);
    this.bird = bird;
    console.log(this.bird);
    this.container = container;
    this.pipeCount = -pipeCount;
    this.pipePosX = 190 * this.pipeCount - 200;
    this.speed = PIPE_SPEED;
    this.createPipes = () => {
      this.pipeContainer = document.createElement("div");
      this.pipeContainer.style.position = "absolute";
      this.pipeContainer.style.height = `${PIPE_CONTAINER_HEIGHT}px`;
      this.pipeContainer.style.width = `${PIPE_CONTAINER_WIDTH}px`;
      this.pipeContainer.style.right = `${this.pipePosX}px`;
      this.pipeContainer.style.top = `${this.pipePosY}px`;
      this.container.appendChild(this.pipeContainer);

      this.topPipe = document.createElement("div");
      this.pipeContainer.appendChild(this.topPipe);
      this.topPipe.style.height = `${PIPE_HEIGHT}px`;
      this.topPipe.style.width = `${PIPE_WIDTH}px`;
      this.topPipe.style.backgroundImage = "url(../images/pipe-green.png)";
      this.topPipe.style.position = "absolute";
      this.topPipe.style.left = "0px";
      this.topPipe.style.top = `$0px`;
      this.topPipe.style.transform = "rotate(180deg)";

      this.bottomPipe = document.createElement("div");
      this.pipeContainer.appendChild(this.bottomPipe);
      this.bottomPipe.style.height = `${PIPE_HEIGHT}px`;
      this.bottomPipe.style.width = `${PIPE_WIDTH}px`;
      this.bottomPipe.style.backgroundImage = "url(../images/pipe-green.png)";
      this.bottomPipe.style.position = "absolute";
      this.bottomPipe.style.left = "0px";
      this.bottomPipe.style.top = `${PIPE_HEIGHT + PIPE_GAP}px`;
      this.bottomPipe = document.createElement("div");
    };

    this.movePipes = (moveInterval) => {
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
      this.checkCollision(moveInterval);
    };

    this.checkCollision = (moveInterval) => {
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
          collision = true;
          runningState = false;
        }
      }
      if (this.bird.birdPosY > FLOOR_POS_Y) {
        collision = true;
        runningState = false;
      }
    };
  }
}
