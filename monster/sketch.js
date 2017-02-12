// Created by Laura Eise
// Last edited on 2/10/2017
// Week 3 Assignment: Interactive Monster
// Learning Objectives: Practice using parameters and if-statements

var page = 0;
var eyeDirection = 0;
var jumpValue = 0;
var jumpDir = 2;

function setup() {
  createCanvas(600, 800); // creates a rectangle design space
  background(254, 229, 204); // sets the canvas to orange
  rectMode(CENTER); // sets rectangles to be drawn from the center
}

function draw() {
  background(254, 229, 204); // resets the canvas to orange to show the monster's movement
  fill(153, 0, 153); // sets color of the planet
  ellipse(300, 1000, 600, 600); // creates planet
  monster(300, 200 + jumpValue); // draws the monster near the center of the canvas
  
  // call your monster function
  if(page == 0) { 
    if(mouseX > 300) { 
      eyeDirection = min (eyeDirection + 0.5, 17);
    }
    if(mouseX < 300) {
      eyeDirection = max (eyeDirection - 0.5, -17);
    }
  } else {
    jumpValue = jumpValue + jumpDir;
    if(jumpValue < -90 || jumpValue > 140) {
      // change direction
      jumpDir = jumpDir * -1;
    }
  }
}

// switch between pages
function mousePressed() {
  page = 1 - page;
}

// draws a monster at the x,y location
function monster(x, y) {
  legs(x, y + 450);
  body(x, y + 180);
  face(x, y);
  eye(x + eyeDirection, y);
}

// draws the body at the x, y location
function body(x, y) {
  noStroke();
  fill(200, 255, 255);
  ellipse(x, y + 75, 150, 100);
  fill(150, 255, 255);
  ellipse(x, y, 200, 150);
  fill(0, 255, 255);
  ellipse(x, y - 100, 250, 200);
}

// draws the face at the x, y location
function face(x, y) {
  noStroke();
  fill(102, 255, 178);
  ellipse(x + 30, y - 20, 15);
  ellipse(x - 30, y - 20, 15);
  fill(51, 255, 103);
  ellipse(x + 40, y - 30, 25);
  ellipse(x - 40, y - 30, 25);
  fill(0, 255, 128);
  ellipse(x + 50, y - 50, 40);
  ellipse(x - 50, y - 50, 40);
  fill(0, 204, 102);
  ellipse(x + 50, y - 50, 40);
  ellipse(x - 50, y - 50, 40);
  fill(0, 153, 76);
  ellipse(x + 60, y - 80, 55, 55);
  ellipse(x - 60, y - 80, 55, 55);
}

// draws the eyes at the x, y location
function eye(x, y) {
  fill(255, 128, 0);
  ellipse(x + 60, y - 75, 20);
  ellipse(x - 60, y - 75, 20);
  fill(255, 255, 0);
  ellipse(x + 60, y - 75, 15);
  ellipse(x - 60, y - 75, 15);
  fill(153, 0, 153);
  ellipse(x + 60, y - 75, 10);
  ellipse(x - 60, y - 75, 10);
}

// draws the legs at the x, y location
function legs(x, y) {
  fill(255, 204, 255);
  rect(x + 40, y - 110, 5, 100);
  rect(x + 20, y - 110, 5, 100);
  rect(x, y - 110, 5, 100);
  rect(x - 20, y - 110, 5, 100);
  rect(x - 40, y - 110, 5, 100);
  fill(255, 153, 255);
  ellipse(x + 40, y - 85, 15);
  ellipse(x + 20, y - 85, 15);
  ellipse(x, y - 85, 15);
  ellipse(x - 20, y - 85, 15);
  ellipse(x - 40, y - 85, 15);
  fill(255, 102, 255);
  ellipse(x + 40, y - 70, 20);
  ellipse(x + 20, y - 70, 20);
  ellipse(x, y - 70, 20);
  ellipse(x - 20, y - 70, 20);
  ellipse(x - 40, y - 70, 20);
  fill(255, 51, 255);
  ellipse(x + 40, y - 55, 25);
  ellipse(x + 20, y - 55, 25);
  ellipse(x, y - 55, 25);
  ellipse(x - 20, y - 55, 25);
  ellipse(x - 40, y - 55, 25);
}