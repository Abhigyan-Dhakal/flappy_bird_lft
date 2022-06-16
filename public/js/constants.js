const container = document.querySelector(".game-container");
const startingContainer = document.querySelector(".starting-container");
const scoreHeading = document.querySelector(".score-heading");

const PIPE_SPEED = 0.8;
const PIPE_CONTAINER_HEIGHT = 600;
const PIPE_CONTAINER_WIDTH = 52;
const PIPE_HEIGHT = 320;
const PIPE_WIDTH = 52;
const PIPE_GAP = 146;
const PIPE_X_POS_THRES = 240;
const PIPE_COLLISON_X_POS = 190;

const BIRD_WIDTH = 34;
const BIRD_HEIGHT = 24;

const FLOOR_POS_Y = 530;

const BIRD_GRAVITY = 0.32;
const JUMP_HEIGHT = 6.95;
const BIRD_START_POS_Y = 253;
