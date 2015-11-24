'use strict'; 
var KEY_ENTER = 13, 
KEY_LEFT = 37, 
KEY_UP = 38, 
KEY_RIGHT = 39, 
KEY_DOWN = 40, 
canvas = null, 
ctx = null, 
lastPress = null, 
pause = false, 
gameover = true, 
pressing = [],
player = null, 
wall = [], 
onGround = false,
cam = null, 
worldHeight = 0,
worldWidth = 0,
elapsed = 0,  
sprite = new Image(); 
 	

function Camera() { 
	this.x = 0; 
	this.y = 0; 
} 
Camera.prototype = { 
	constructor: Camera, 
	focus: function (x, y) { 
		this.x = x - canvas.width / 2; 
		this.y = y - canvas.height / 2; 
		if (this.x < 0) { this.x = 0; } 
		else if (this.x > worldWidth - canvas.width) { this.x = worldWidth - canvas.width; } 
		if (this.y < 0) { this.y = 0; } 
		else if (this.y > worldHeight - canvas.height) { this.y = worldHeight - canvas.height; } 
	} 
}


function repaint() { 
	window.requestAnimationFrame(repaint); 
	paint(ctx); 
} 


function paint(ctx) { 
	var i = 0, l = 0; 
	ctx.fillStyle = '#5C94FC'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	ctx.fillStyle = '#fff'; 
	player.drawImage(ctx, cam, sprite, 23,507,12,15 ) 
	for (var i = 0; i < canvas.width; i=i+12) {
		ctx.drawImage(sprite, 373,124,14,15,  i,305,14,15);
		ctx.drawImage(sprite, 373,124,14,15,  i,290,14,15);
	}
	if (pause) { 
		ctx.textAlign = 'center'; 
		if (gameover) { 
			ctx.fillText('GAMEOVER', canvas.width / 2, canvas.height / 2); 
		} else { 
			ctx.fillText('PAUSE', canvas.width / 2, canvas.height / 2); 
		} 
		ctx.textAlign = 'left'; 
	} 
} 

function run() { 
	setTimeout(run, 50); 
	act(0.05); 
	lastPress = null; 
} 

function init() { 
	canvas = document.getElementById('canvas'); 
	ctx = canvas.getContext('2d'); 
	sprite.src = 'images/mario.gif'; 
	worldWidth = canvas.width; 
	worldHeight = canvas.height; 
	cam = new Camera(); 
	player = new Rectangle2D(50, 275, 12, 15, true);
	repaint(); 
	run();
} 

window.addEventListener('load', init, false);
	