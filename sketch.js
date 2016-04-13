
// Walker constructor function
// It will take in a position
// It will then take a `step` every frame
var walkers = [];

var Walker = function (initialX, initialY) {
 this.x = initialX;
 this.y = initialY;
 
 this.makeRect = function (){
 rect(this.x, this.y,20,20)
}
}

// This extends the Walker class. It is similar
// to just including it inside of the Walker constructor function.
Walker.prototype.step = function() {
 var choice = Math.floor(random(0,3))

 if (choice === 0) {
   this.x++;
 }
 if (choice === 1) {
   this.x--;
 }
 if (choice === 2) {
   this.y++;
 }
 else {
   this.y++;
 }
}

//
function mouseClicked() {
 // Hint use `push` and `new` to make instances of walkers
 // You might want to pass in mouseX and mouseY
 
  //Array.push(thing to put in the array)
  walkers.push(new Walker(mouseX,mouseY))
}

// Global scope for an array of walkers
function setup() {
 // Set up some kind of background
 
 // createCanvas with `windowWidth` and
 // `windowHeight` minus height of title
createCanvas(windowWidth, windowHeight - 30)
}

function draw() {
 // Tell every walker to take a step
 for (i = 0; i < walkers.length;i++){
   
  
      walkers[i].makeRect()
       walkers[i].step()
    }
  }
  
  // console.log(walkers[i])
 




/*
 When you have this working try implementing
 some of the following:
   - color or shape changes on key press
   - garbage collection, if a Walker moves off screen, kill it.
   - something we come up with in class
*/