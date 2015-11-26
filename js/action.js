var KEY_ENTER = 13, 
	KEY_LEFT = 37, 
	KEY_UP = 38, 
	KEY_RIGHT = 39, 
	KEY_DOWN = 40, 
	KEY_SONGS = 77,//letra M
	KEY_RESET = 82, //letra R
	lastPress = null, 
	pause = false, 
	pressing = [],
	onGround = false;

function act() { 
	var i = 0, l = 0; 
	if (!pause) { 
		if (gameover) { 
			reset(); 
		} 
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
		if (onGround && pressing[KEY_UP] ) { 
			jumpSong();
			player.vy = -10; 
		} 
		// Move player 
		player.x += player.vx; 
		// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		for (var i = cam.x-avanceN; i < cam.x+avance; i++) {
			if(wall[i] !== undefined ){
				for (var j = wall[i].length - 1; j >= 0; j--) {
					if (player.intersects(wall[i][j]) && (wall[i][j].type===1||wall[i][j].type===2)) { 
						if (player.vx > 0) { 
							player.right = wall[i][j].left; 
						} else { 
							player.left = wall[i][j].right; 
						} 
						player.vx = 0; 
					} 
				} 
			}
		}
		onGround = false; 
		player.y += player.vy; 
		// YYYYYYYYYYYYYYYYYYYYYYYYYYY
		for (var i = cam.x-avanceN; i < cam.x+avance; i++) {
			if(wall[i] !== undefined ){
				for (var j = wall[i].length - 1; j >= 0; j--) {
					if (player.intersects(wall[i][j]) && (wall[i][j].type===1||wall[i][j].type===2)) { 
						if (player.vy > 0) { 
							player.bottom = wall[i][j].top; 
							onGround = true; 
						} else if(player.vy < 0){ 
							player.top = wall[i][j].bottom; 
							if(wall[i][j].type == 2){
								wall[i].splice(j,1);
								breakBlockSong();
							} else {
								noBreakBlockSong();
							}
						} 
						player.vy = 0; 
					} 
				}
			}
		}
		cam.focus(player.x, player.y); 
		elapsed += 0.05; 
		if (elapsed > 3600) { 
			elapsed -= 3600; 
		} 
		// Out Screen 
		if (player.x > worldWidth) { 
			player.left = worldWidth-12; 
		} 
		if (player.x < 0) { 
			player.x = worldWidth; 
		} 
		if (player.y > worldHeight) { 
			deadSong();
			songGameStop();
			songGameReset();
			gameover = true; 
			pause = true; 
		} 
	}
	if (lastPress === KEY_ENTER) { 
		pause = !pause; 
		if(pause)
			pauseSong();
	} 
	if (lastPress === KEY_SONGS ){
		songs = !songs;
		if(songs)
			songGame();
		else 
			songGameStop();
	}
	if (lastPress === KEY_RESET ){
		reset();
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