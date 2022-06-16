class Bird {
  constructor(container) {
    this.container = container;
    this.wingState = 0;
    this.speed = 0;
    this.gravity = BIRD_GRAVITY;
    this.jumpHeight = JUMP_HEIGHT;
    this.birdPosY = BIRD_START_POS_Y;

    this.createBird = () => {
      this.bird = document.createElement("div");
      this.bird.style.height = "24px";
      this.bird.style.width = "34px";
      this.bird.style.overflow = "hidden";
      this.bird.style.position = "absolute";
      this.bird.style.backgroundImage = "url(../images/birds.png)";
      this.bird.style.backgroundRepeat = "no-repeat";
      this.bird.style.right = "270px";
      this.bird.style.top = "50%";
      this.bird.style.transform = "translateY(-50%)";
      this.bird.style.zIndex = 1;
      this.bird.style.backgroundPosition = "0px 0px";

      this.container.appendChild(this.bird);
    };

    this.animateBirdWings = () => {
      setInterval(() => {
        if (this.wingState === 3) {
          this.wingState = 0;
        }
        this.bird.style.backgroundPosition = `0px ${this.wingState * -24}px`;
        this.wingState++;
      }, 130);
    };

    this.moveBird = () => {
      this.speed += this.gravity;
      this.birdPosY += this.speed;
      this.bird.style.top = `${this.birdPosY}px`;
    };

    this.jump = () => {
      this.speed *= 0.1;
      this.speed = this.speed - this.jumpHeight;
    };

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
