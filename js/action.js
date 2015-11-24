function act(deltaTime) { 
	var i = 0, l = 0; 
	if (!pause) { 


		if (pressing[KEY_RIGHT]) { 
			player.scale.x = 1; 
			if (player.vx < 10) { 
				player.vx += 1; 
			} 
		} else if (player.vx > 0) { 
			player.vx -= 1; 
		} 
		if (pressing[KEY_LEFT]) { 
			player.scale.x = -1; 
			if (player.vx > -10) { 
				player.vx -= 1; 
			} 
		} else if (player.vx < 0) { 
			player.vx += 1; 
		} 
		// Gravity 
		player.vy += 1; 
		if (player.vy > 10) { 
			player.vy = 10; 
		} // Jump 
		if (onGround && lastPress === KEY_UP) { 
			player.vy = -10; 
		} 


		player.x += player.vx; 
		// player.y += player.vy; 
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