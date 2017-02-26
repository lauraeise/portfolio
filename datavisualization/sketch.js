// Created by Laura Eise
// Last edited on 2/25/2017
// Week 3 Assignment: Data Visualization
// Learning Objectives: Practice using loops, arrays, functions, and parameters
// Purpose: Provide an overview of the Common Vulnerabilities and Exposures (CVEs) of Micro Focus and HPE Software in preparation for the spin-merge in August 2017

var criticality = [" Low", " Medium", "     High", "     Critical"]; // category names in an array
var hpeCVE = [2, 31, 63, 31]; // number of CVEs per each criticality category for HPE in an array
var microFocusCVE = [0, 1, 1, 3]; // number of CVEs per criticality category for Micro Focus in an array
var gridColor; // represents colors of criticality categories
var rectWidth = 40; // width of all of the rectangles
var rectHeight = 8; // height of all of the rectangles
var microFocus; // saved image of Micro Focus logo
var aspectMicroFocusRatio = 800 / 238; // ratio of .png size
var HPE; // saved image of HPE logo
var aspectHPERatio = 1396 / 700; // ratio of .png size

function preload() { // pull in saved image from project folder
  microFocus = loadImage("microfocus.png"); // load image
  HPE = loadImage("hpe.png"); // load image
}

function setup() {
  createCanvas(700, 900); // sets the canvas size
  gridColor = [color(102, 204, 0), color(255, 225, 0), color(255, 128, 0), color(255, 0, 0)]; // green, yellow, orange, and red colors in an array
}

function draw() {
  background(255); // clears the background
  fill(0); // sets text color to black
  image(microFocus, 100, 700, 40 * aspectMicroFocusRatio, 40); // places image in canvas with the proper ratio
  image(HPE, 450, 690, 60 * aspectHPERatio, 60); // places the logo in the canvas with the proper ratio
  drawTitles(); // draws and places the title and subtitle
  drawLabels(); // draws and places the graph labels
  drawHPEGrid(); // draws the gridlines for HPE
  drawMicroFocusGrid(); // draws the gridlines for Micro Focus
  displayValues(); // shows the respective criticality levels and definitions when hovering over each company logo
}

// draws the header
function drawTitles() {
  noStroke(); // removes stroke from text
  textSize(20); // sets text size
  text("National Vulnerability Database", 190, 50); // create title
  textSize(15); // sets text size
  text("Common Vulnerabilities & Exposures", 210, 80); // create subtitle
  text("Discovered Since January 2016", 225, 100); // create second line for subtitle
  textSize(10); // sets text size
  text("For additional information, please visit www.cve.mitre.org and www.nvd.nist.gov.", 150, 850); // create footer
}

// draws two sets of criticality labels
function drawLabels() {
  textSize(10); // sets text size
  for(i = 0; i < criticality.length; i++) { // pulls the var criticality length and values
    text(criticality[i], 55 + i * 55, 650); // places the 1st set of values along a horizontal line
    text(criticality[i], 405 + i * 55, 650); // places the 2nd set of values along a horizontal line
  }
}

// draws the grid for HPE
function drawHPEGrid() {
  for(i = 0; i < hpeCVE.length; i++) { // loops for each CVE category
    for(j = 0; j < hpeCVE[i]; j++) { // loops for each CVE
      fill(gridColor[i]); // sets the rectangle color according to its CVE category
      rect(400 + i * (rectWidth + 20), 630 - j * rectHeight, rectWidth, rectHeight - 2); // draws and places the rectangles for each HPE CVE
    }
  }
}

// draws the grid for Micro Focus
function drawMicroFocusGrid() {
  for(i = 0; i < microFocusCVE.length; i++) { // loops for each CVE category
    for(j = 0; j < microFocusCVE[i]; j++) { // loops for each CVE
      fill(gridColor[i]); // sets the rectangle color according to its CVE category
      rect(50 + i * (rectWidth + 20), 630 - j * rectHeight, rectWidth, rectHeight - 2); // draws and places the rectanges for each Micro Focus CVE
    }
  }
}

// draws the text for when the mouse hovers over the logos
function displayValues() {
  if(mouseX >= 100 && mouseX <= 100 + 40 * aspectMicroFocusRatio && mouseY >= 700 && mouseY <= 740) { // sets the parameters for when the mouse hovers over the MicroFocus logo
    fill(0); // sets the text to black
    textSize(10); // sets text size
    text("Low (0.0 - 0.9) = 0  |  Medium = 1 (1.0 - 3.9)  |  High (4.0 - 6.9) = 1  |  Critical (7.0 - 9.9) = 3", 125, 800); // draws and places the text
  }
  if(mouseX >= 450 && mouseX <= 450 + 60 * aspectHPERatio && mouseY >= 690 && mouseY <= 750) { // sets the parameters for when the mouse hovers over the HPE logo
    fill(0); // sets the text to black
    textSize(10); // sets the text size
    text("Low (0.0 - 0.9) = 2  |  Medium = 31 (1.0 - 3.9)  |  High (4.0 - 6.9) = 63  |  Critical (7.0 - 9.9) = 31", 125, 800); //draws and places the text
  }
}