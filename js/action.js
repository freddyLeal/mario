function act(deltaTime) { 
	var i = 0, l = 0; 
	if (!pause) { 
		
	}
	if (lastPress === KEY_ENTER) { 
		pause = !pause; 
	} 
} 


document.addEventListener('keydown', function (evt) { 
	if (!pressing[evt.which]) { 
		lastPress = evt.which; 
	} 
	pressing[evt.which] = true; 
}, false); 

document.addEventListener('keyup', function (evt) { 
	pressing[evt.which] = false; 
}, false); 