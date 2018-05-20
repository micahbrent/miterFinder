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
              document.getElementById("outs").innerHTML ="  " + outside;
              document.getElementById("ins").innerHTML ="  " + inside;

var roundedOut = Math.floor(outside)
var roundedIn = Math.floor(inside)
var outDecimal = (outside) - (roundedOut);
var inDecimal = (inside) - (roundedIn);
console.log(outDecimal);
console.log(inDecimal);

if (outDecimal > .001 && outDecimal < .100) {
  outFraction = '1/16';

if (outDecimal > .101 && outDecimal < .150)
  outFraction = '1/8';
} else {
  outFraction = '1/2';
}
console.log(outFraction)




            }





// ( 2 * pi * radius ) * ( angle / 360 )
