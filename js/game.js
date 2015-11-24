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
gameover = 	, 
pressing = [],
sprite = new Image(); 
// onGround = false, 
// worldWidth = 0, 
// worldHeight = 0, 
// elapsed = 0, 
// cam = null, 
// player = null, 

function repaint() { 
	window.requestAnimationFrame(repaint); 
	paint(ctx); 
} 

function paint(ctx) { 
	var i = 0, l = 0; 
	ctx.fillStyle = '#5C94FC'; 
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	ctx.fillStyle = '#fff'; 
	ctx.fillText('Last Press: ' + lastPress, 0, 20); 
	ctx.drawImage(sprite, 23,507,12,15,  50,275,12,15);
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
	repaint(); 
	run();
} 



window.addEventListener('load', init, false);
	