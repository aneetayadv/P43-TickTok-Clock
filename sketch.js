var hr,min,sec;
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  //Calculating time using predefined func from p5.js
  hr = hour();
  min = minute();
  sec = second();

  fill(255);
  textSize(30);
  var day = hr%12 > 12 ? "AM" : "PM";
  text(hr%12 + ":" + min + ":" +sec +" " +day, 600,50);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  
  //Translation and rotation 
  translate(width/2,height/2);
  rotate(-90);

  //Seconds hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //Minutes hand
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //Hours hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

   //drawing the arcs
   strokeWeight(10);
   noFill();
   //Seconds
   stroke(255,0,0);
   arc(0,0,300,300,0,secAngle);

   //Minutes
   stroke(0,255,0);
   arc(0,0,280,280,0,minAngle);

   //Hours
   stroke(0,0,255);
   arc(0,0,260,260,0,hrAngle);
}