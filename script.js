let redGamePiece;
let blueGamePiece;
let yellowGamePiece;


// *** Setup
function startGame() {
    myGameArea.start();
    redGamePiece = new component(75, 75, "rgba(0, 0, 255, 0.5)", 200, 100);
    blueGamePiece = new component(65, 85, "blue", 300, 90);
    yellowGamePiece = new component(90, 30, "yellow", 20, 225);
}
let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 500;
        this.canvas.height = 280;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); // will run the updateGameArea every 20th millisecond (50 times per second)
        // this.frameNo = 0;
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clears the entire canvas : needed otherwise disappearing images would leave a "frame trail"
    }
}

// *** Adding the component : square ==> we define here the structure ++> *** COMPONENT CONSTRUCTOR ****
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    // addind the CONTROLLERS
    this.speedX = 0; // properties being used as speed indicators
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () { // added afterwards, to handle the drawing of the component
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () { // functions that uses speedX & Y properties to change the component's position
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() { // calls the clear() and the update() method
    myGameArea.clear();
    myGamePiece.newPos(); // called from updateGameArea before drawing the component
    myGamePiece.update();


    take back from here = https://www.w3schools.com/graphics/game_controllers.asp 

    //RED
    // redGamePiece.x += 1; *** COMMENTED ON PREVIOUS SHAPES

    // //BLUE
    // blueGamePiece.x += 1;
    // blueGamePiece.y -= 1;

    // //YELLOW
    // yellowGamePiece.x += 1;
    // yellowGamePiece.y -= 1;

    // //UPDATES
    // redGamePiece.update();
    // blueGamePiece.update();
    // yellowGamePiece.update();
}

// STEPS

// result is that the component is drawn and cleared 50 times per second

// to prove that the red square is being drawn 50t/s, we will change the x position (horizontal) by one pixel every time we update the game area

