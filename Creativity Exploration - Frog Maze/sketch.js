// Created by Laura Eise
// Last edited on 2/11/17
// Week 4 Assignment: Creativity Exploration 1
// Learning Objectives: Trying something new; in this case, practice using keyPressed events, inserting text, and placing images in code

var frogMaze; // create a variable to represent the saved image of the frog maze
var aspectRatio = 820 / 700; // set the ratio of the picture based on its size, which is 700 width by 820 height
var x = 145; // create a x variable for the initial placement of the ellipse that represents the frog's tongue
var y = 105; // create a y variable for the initial place ment of the ellipse that represents the frog's tongue

function preload() { // create a function to pull in the saved image of the frog maze from the project folder
  frogMaze = loadImage("Frog-Maze.png"); // load the image of the frog maze using the variable name and the saved image name
}

function setup() { 
  createCanvas(700, 700 * aspectRatio); // set the size of the canvas to the same ratio as the maze
  image(frogMaze, 0, 0, 700, 700 * aspectRatio); // set the frog maze as the background; can exchange "image" for "background" here
  noStroke(); // remove borders from shapes
}

function draw() {
  fill(255); // set fill to white so that text resents against a white background
  rect(565, 60, 140, 120); // create rectangle around text (to ensure that the maze does not get blocked out)
  fill(255, 0, 0); // set the color as red to represent the frog's tongue
  ellipse(x, y, 10, 10); // create the ellipse that represents a little frog tongue
  fill(0); // set the font color to black
  textSize(15); // set font size of text
  text("Use the arrow keys", 565, 80); // create a line of text followed by its placement
  text("to navigate the frog's", 565, 100); // create a line of text followed by its placement
  text("tongue through the", 565, 120); // create a line of text followed by its placement
  text("maze to reach the", 565, 140); // create a line of text followed by its placement
  text("yummy flies.", 565, 160); // create a line of text followed by its placement
  
  if (keyIsPressed) { // precedes instructions for when a key is either pressed or held down
    if (keyCode == UP_ARROW) { // precedes instructions on what happens if the up arrow key is pressed
      y = max(5, y - 1); // sets the maximum height the frog tongue can go up on the page
    } else if (keyCode == DOWN_ARROW) { // precedes instructions on what happens if the down arrow key is pressed
      y = min(y + 1, 695 * aspectRatio); // sets the lowest height the frog tongue can go down on the page
    } else if (keyCode == RIGHT_ARROW) { // precedes instructions on what happens if the right arrow key is pressed
      x = min(x + 1, 695); // sets the furthest distance the frog tongue can go right on the page
    } else if (keyCode == LEFT_ARROW) { // precedes instructions on what happens if the left arrow key is pressed
      x = max(x - 1, 5); // sets the furthest distance the frog tongue can go left on the page
    }
  }
  
  if (x > 560 && y > 575) { // precedues instructions on what occurs if the key is pressed when the tongue is over the flies
    fill(0, 204, 0); // set text color to green to match the frog
    textSize(30); // set text size
    text("Delicious!", 555, 700); // create text in lower right corner
  }
}
