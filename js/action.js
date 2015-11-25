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


		// Gravity Jump
		player.vy += 1; 
		if (player.vy > 10) { 
			player.vy = 10; 
		} 
		if (onGround && lastPress === KEY_UP) { 
			player.vy = -10; 
		} 

		// Move player 
		player.x += player.vx; 
		for (i = 0, l = wall.length; i < l; i += 1) { 
			if (player.intersects(wall[i]) && (wall[i].type===1||wall[i].type===2)) { 
				if (player.vx > 0) { 
					player.right = wall[i].left; 
				} else { 
					player.left = wall[i].right; 
				} 
				player.vx = 0; 
			} 
		} 
		onGround = false; 
		player.y += player.vy; 
		for (i = 0, l = wall.length; i < l; i += 1) { 
			if (player.intersects(wall[i]) && (wall[i].type===1||wall[i].type===2)) { 
				if (player.vy > 0) { 
					player.bottom = wall[i].top; 
					onGround = true; 
				} else { 
					player.top = wall[i].bottom; 
				} 
				player.vy = 0; 
			} 
		} 
	


		// player.y += player.vy; 
		cam.focus(player.x, player.y); 
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