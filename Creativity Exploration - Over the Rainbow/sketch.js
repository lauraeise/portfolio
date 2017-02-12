// Created by Laura Eise
// Last edited on 2/11/17
// Week 4 Assignment: Creativity Exploration 2
// Learning Objectives: Trying something new; in this case, practice using loops, inserting text & audio files, and creating time lapses

var lyricX = 25; // position of text
var lyricY = 0; // position of text
var song; // create a variable to represent the mp3 of "Somewhere Over the Rainbow"
var time; // create a variable to repesent time

function preload() { // create a function to pull in the song from the project folder
  song = loadSound("Somewhere Over the Rainbow Song.mp3"); // load the mp3 file of the song using the variable name and the saved image name
}

function setup() {
  createCanvas(700, 500); // create a canvas
  textSize(30); // set the size of the text
  song.play(); // play the audio file
  song.setVolume(0.5); // set the volume of the audio
  time = millis(); // make time equal to the milli function
}

function draw() {
  for (i = 0; i < 500; i++) { // use loops to create a vertical gradient rainbow across the canvas
    stroke(255, i * 0.5, i * 0.5); // red gradient
    line(0, i, 100, i); // placement on canvas, as well as width
    stroke(255, 125 + i * 0.25, i * 0.5); // orange gradient
    line(100, i, 200, i); // placement on canvas, as well as width
    stroke(255, 255, i * 0.5); // yellow gradient
    line(200, i, 300, i); // placement on canvas, as well as width
    stroke(i * 0.5, 255, i * 0.5); // green gradient
    line(300, i, 400, i); // placement on canvas, as well as width
    stroke(i * 0.5, 125 + i * 0.25, 255); // blue gradient
    line(400, i, 500, i); // placement on canvas, as well as width
    stroke(i * 0.5, i * 0.5, 255); // indigo gradient
    line(500, i, 600, i); // placement on canvas, as well as width
    stroke(125 + i * 0.25, i * 0.5, 255); // purple gradient
    line(600, i, 700, i); // placement on canvas, as well as width
  }
  
console.log(millis());
  if (millis() - time > 56000) { // subtract time (milliseconds) from the milli function to create the difference between the start and time lapse
    lyric5(); // change to final line of the song lyric
    lyricY = min(lyricY + 0.45, 700); // move text down screen
  } else if (millis() - time > 52000) { // subtract time (milliseconds) from the milli function to create the difference between the start and time lapse
    lyric4(); // change to 4th line of the song lyric
    lyricY = min(lyricY + 0.45, 700); // move text down screen
  } else if (millis() - time > 46000) { // subtract time (milliseconds) from the milli function to create the difference between the start and time lapse
    lyric3(); // // change to 3rd line of the song lyric
    lyricY = min(lyricY + 0.45, 700); // move text down screen
  } else if (millis() - time > 40000) { // subtract time (milliseconds) from the milli function to create the difference between the start and time lapse
    lyric2(); // // change to second line of the song lyric
    lyricY = min(lyricY + 0.45, 700); // move text down screen
  } else if (millis() - time > 16000) { // subtract time (milliseconds) from the milli function to create the difference between the start and time lapse
    lyric1(); // start the first line ofthe sond lyric
    lyricY = min(lyricY + 0.45, 700); // move text down screen
  }
}

function lyric1() { // create text for line of song lyric
  text("ooooOOOOOooOOooOoOoOoOoO", lyricX, lyricY);
}

function lyric2() { // create text for line of song lyric
  text("Somewhere over the rainbow", lyricX, lyricY);
}

function lyric3() { // create text for line of song lyric
  text("Way up high", lyricX, lyricY);
}

function lyric4() { // create text for line of song lyric
  text("And the dreams that you dreamed of", lyricX, lyricY);
}

function lyric5() { // create text for line of song lyric
  text("Once in a lullaby", lyricX, lyricY);
}