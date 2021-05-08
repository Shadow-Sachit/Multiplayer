
var database;
var playerCount;
var gameState=0;
var allPlayers;
var distance=0;

var form,game,player;
var car1,car2,car3,car4,cars;

function preload(){
track = loadImage("track.jpg");
car1img = loadImage("car1.png");
car2img = loadImage("car2.png");
car3img = loadImage("car3.png");
car4img = loadImage("car4.png");
ground = loadImage("ground.png");
}

function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20, displayHeight-30);
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
  if(playerCount === 4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
  if(gameState===2){
     game.end();
  }
}   