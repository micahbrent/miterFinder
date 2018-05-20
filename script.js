var size = document.getElementById('pipeSize');
var angle = document.getElementById('pipeAngle');
var thickness = document.getElementById('pipeThick');
var outside
var inside



// this function is for finding takeoff and outside and inside of pipe
function calculateSize(thisValue) {
  // Math.floor is used because pipe from 12" and down isnt exactly 12, 10, 8 getCenter
  //But you still need that integer to find the takeOff
            var takeOff = +Math.floor(size.value) + (Math.floor(size.value))/2;
             farEnd = +size.value * 1.5 + (size.value)/2;
             shortEnd = +size.value * 1.5 - (size.value)/2; 
             console.log(takeOff);
             console.log(farEnd);
             console.log(shortEnd);
           }
// this function uses the formula for finding an arc using the outside & inside values
function findMiter() {
              var outside = (2 * Math.PI * farEnd) * (angle.value /360);
              var inside = (2 * Math.PI * shortEnd) * (angle.value /360);
              console.log(outside);
              console.log(inside);


var roundedOut = Math.floor(outside)
var roundedIn = Math.floor(inside)
var outDecimal = (outside) - (roundedOut);
var inDecimal = (inside) - (roundedIn);
var outDecimal = outDecimal.toFixed(4);
var inDecimal = inDecimal.toFixed(4);
console.log(outDecimal);
console.log(inDecimal);

if (outDecimal > .0000 && outDecimal < .0625) {
  outFraction = '1/16';}
  else if (outDecimal > .0624 && outDecimal < .1875){
    outFraction = '1/8';}
  else if (outDecimal > .1874 && outDecimal < .3125) {
    outFraction = '1/4';}
  else if (outDecimal > .3124 && outDecimal < .4375) {
    outFraction = '3/8';}
  else if (outDecimal > .4374 && outDecimal < .5625) {
    outFraction = '1/2';}
  else if (outDecimal > 5624 && outDecimal < 6875) {
    outFraction = '5/8';}
  else if (outDecimal > 6874 && outDecimal < 8152) {
    outFraction = '3/4';}
  else if (outDecimal > 8151 && outDecimal < 9500) {
      outFraction = '7/8';}
      else {outFraction = '15/16';}

      if (inDecimal > .0000 && inDecimal < .0625) {
        inFraction = '1/16';}
        else if (inDecimal > .0624 && inDecimal < .1875){
          inFraction = '1/8';}
        else if (inDecimal > .1874 && inDecimal < .3125) {
          inFraction = '1/4';}
        else if (inDecimal > .3124 && inDecimal < .4375) {
          inFraction = '3/8';}
        else if (inDecimal > .4374 && inDecimal < .5625) {
          inFraction = '1/2';}
        else if (inDecimal > 5624 && inDecimal < 6875) {
          inFraction = '5/8';}
        else if (inDecimal > 6874 && inDecimal < 8152) {
          inFraction = '3/4';}
        else if (inDecimal > 8151 && inDecimal < 9500) {
            inFraction = '7/8';}
            else {inFraction = '15/16';}

  console.log(outFraction)
  document.getElementById("outs").innerHTML ="  " + Math.floor(outside) + " " + outFraction;
  document.getElementById("ins").innerHTML ="  " + Math.floor(inside) + " " + inFraction;
}









// ( 2 * pi * radius ) * ( angle / 360 )
