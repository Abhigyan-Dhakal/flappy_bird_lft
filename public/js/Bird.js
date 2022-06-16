class Bird {
  constructor(container) {
    this.container = container;
    this.wingState = 0;
    this.speed = 0;
    this.gravity = BIRD_GRAVITY;
    this.jumpHeight = JUMP_HEIGHT;
    this.birdPosY = BIRD_START_POS_Y;

    // Method to create the bird
    this.createBird = () => {
      this.bird = document.createElement("div");
      this.bird.style.height = `${BIRD_HEIGHT}px`;
      this.bird.style.width = `${BIRD_WIDTH}px`;
      this.bird.style.overflow = "hidden";
      this.bird.style.position = "absolute";
      this.bird.style.backgroundImage = "url(./images/birds.png)";
      this.bird.style.backgroundRepeat = "no-repeat";
      this.bird.style.right = `${BIRD_START_POS_X}px`;
      this.bird.style.top = "50%";
      this.bird.style.transform = "translateY(-50%)";
      this.bird.style.zIndex = 3;
      this.bird.style.backgroundPosition = "0px 0px";

      this.container.appendChild(this.bird);
    };

    // Method to animate bird's wing
    this.animateBirdWings = () => {
      setInterval(() => {
        if (this.wingState === 3) {
          this.wingState = 0;
        }
        this.bird.style.backgroundPosition = `0px ${this.wingState * -24}px`;
        this.wingState++;
      }, 130);
    };

    // Method to move the bird vertically i.e. Y-position
    this.moveBird = () => {
      this.speed += this.gravity;
      this.birdPosY += this.speed;
      this.bird.style.top = `${this.birdPosY}px`;
    };

    this.jump = () => {
      this.speed *= 0.1;
      this.speed = this.speed - this.jumpHeight;
    };

    // Method to add jump event to the bird
    this.addJumpEvent = () => {
      document.addEventListener("keypress", (e) => {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
          this.jump();
        }
      });
      document.addEventListener("click", () => {
        this.jump();
      });
    };
  }
}
