var BarackX = 100; // position Barack's lego to the left of the canvas
var BarackY = 100; // position Barack's lego to the top of the canvas
var MichelleX = 0; // position Michelle's lego to the left of the canvas
var MichelleY = 0; // position Michelle's lego to the top of the canvas
var MaliaX = 100; // position Malia's lego to the left of the canvas
var MaliaY = 500; // position Malia's lego to the bottom of the canvas
var SashaX = 700; // position Sasha's lego to the right of the canvas
var SashaY = 100; // position Sasha's lego to the top of the canvas
var BoX = 700; // position Bo's lego to the right fo the canvas
var BoY = 700; // position Bo's lego to the bottom of the canvas
var SunnyX = 0; // position Sunny's lego to the left of the canvas
var SunnyY = 700; // position Sunny's lego tothe bottom of the canvas

function setup() {
  createCanvas(800, 800); // set up parameters of canvas
  background(102,124,78); // set color of the background (in this case, to represent grass)
  noStroke(); // remove strokes so there are no outlines
  fill(223,250,253); // set color of sky
  rect(0,0,800,575); // create sky boundaries
}

function draw() {

  background(102,124,78); // repeat background so that the loop refreshes and characters appear to move
  fill(223,250,253); // repeat sky fill so that the loop refreshes
  rect(0,0,800,575); // repeat sky shape so that the loop refreshes
  Barack(); // add Barack's function to the loop
  Michelle(); // add Michelle's function to the loop
  Malia(); // add Malia's function to the loop
  Sasha(); // add Sasha's function to the loop
  Bo(); // add Bo's function to the loop
  Sunny(); // add Sunny's function to the loop
  
  BarackX = min(BarackX + 1, 400); // stop variable from going above 400
  BarackY = min(BarackY + 1, 300); // stop variable from going above 300
  
  MichelleX = min(MichelleX + 1, 300); // stop variable from going above 300
  MichelleY = min(MichelleY + 1, 320); // stop varaible from going aboe 320
  
  MaliaX = min(MaliaX + 1, 220); // stop variable from going above 220
  MaliaY = max(MaliaY - 1, 300); // stop variable from going below 300
  
  SashaX = max(SashaX - 1, 500); // stop variable from going below 500
  SashaY = min(SashaY + 1, 350); // stop variable from going above 350

  BoX = max(BoX - 1, 575); // stop variable from going below 575
  BoY = max(BoY - 1, 550); // stop variable from going above 550

  SunnyX = min(SunnyX + 1, 125); // stop variable from going below 125
  SunnyY = max(SunnyY - 1, 550); // stop varaible from going above 550
  
}

function Barack() {
  // Barack in Suit
  fill(0); // set background as black for suit and hair color
  rect(BarackX, BarackY, 75, 300); // create body
  fill(182, 125, 101); // set color of face
  rect(BarackX, BarackY + 10, 75, 60); // create face
  fill(200); // set color for grey in hair
  rect(BarackX + 5, BarackY, 10, 10); // create small rectangle to show grey in hair
  rect(BarackX + 20, BarackY, 10, 10); // create small rectangle to show grey in hair
  rect(BarackX + 45, BarackY, 10, 10); // create small rectangle to show grey in hair
  rect(BarackX + 60, BarackY, 10, 10); // create small rectangle to show grey in hair
}

function Michelle() {
  // Michelle in Dress
  fill(177, 116, 91); // set skin color
  rect(MichelleX, MichelleY, 70, 280); // create body
  fill(1, 146, 160); // set dress color
  rect(MichelleX, MichelleY + 65, 70, 150); // create dress
}

function Malia() {
  // Malia in Skirt
  fill(182, 125, 101); // set skin color
  rect(MaliaX, MaliaY, 55, 300); // create body
  fill(134, 154, 207); // set dress color
  rect(MaliaX, MaliaY + 60, 55, 160); // create dress
}

function Sasha() {
  // Sasha in Pants
  fill(177, 116, 91); // set skin color
  rect(SashaX, SashaY, 60, 250); // create body
  fill(254, 97, 70); // set color of shirt
  rect(SashaX, SashaY + 50, 60, 100); // create shirt
  fill(216, 194, 60); // set color of pants
  rect(SashaX, SashaY + 75, 60, 125); // create pants
}

function Bo() {
  // Black & White Dog
  fill(0); // set color of fur
  rect(BoX, BoY, 70, 50); // create body
  fill(255); // set color of spotted fur
  rect(BoX + 15, BoY + 20, 40, 30); // create fur spot
}

function Sunny() {
  // Black Dog
  fill(0); // set color of fur
  rect(SunnyX, SunnyY, 70, 50); // create body
}