// HTML DOM constants
const container = document.querySelector(".game-container");
const startingContainer = document.querySelector(".starting-container");
const scoreHeading = document.querySelector(".score-heading");
const gameOverContainer = document.querySelector(".game-over-container");
const highScoreHeading = document.querySelector(".high-score-heading");
const currentScoreHeading = document.querySelector(".current-score-heading");
const restartBtn = document.querySelector(".restart-btn");

// Constants for the pipe
const PIPE_SPEED = 0.8;
const PIPE_CONTAINER_HEIGHT = 600;
const PIPE_CONTAINER_WIDTH = 52;
const PIPE_HEIGHT = 320;
const PIPE_WIDTH = 52;
const PIPE_GAP = 146;
const PIPE_X_POS_THRES = 240;
const PIPE_COLLISON_X_POS = 190;

// Constants for the bird
const BIRD_WIDTH = 34;
const BIRD_HEIGHT = 24;
const BIRD_GRAVITY = 0.32;
const JUMP_HEIGHT = 6.95;
const BIRD_START_POS_Y = 253;
const BIRD_START_POS_X = 270;
const BIRD_FLAP_DURATION = 130;

// Constant for the floor
const FLOOR_POS_Y = 530;
