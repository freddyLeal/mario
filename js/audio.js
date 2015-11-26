var	audioJump = new Audio(),
	audioSong = new Audio(),
	audioDead = new Audio(),
	audioPause = new Audio(),
	audioBreakBlock = new Audio(),
	audioNoBreakBlock = new Audio(),
	songs = true,
	stateMusic = 0;

function songGame(){
	if(cam.x > 6000 && stateMusic === 0){
		audioSong.src = 'songs/03-hurry-super-mario-bros.mp3';
		stateMusic = 1;
		setTimeout(function(){ songGame; },1000);
	}
	if(cam.x > 9000 && stateMusic === 1){
		audioSong.src = 'songs/06-underground.mp3';
		stateMusic = 1;
		setTimeout(function(){ songGame; },1000);
	}
	if(songs)
		audioSong.play();
}

function songGameStop(){
	audioSong.pause();
}

function songGameReset(){
	audioSong.currentTime = 0;
}

function jumpSong(){
	if(songs)
		 audioJump.play();
}

function deadSong(){
	if(songs)
		audioDead.play();
}

function pauseSong(){
	if(songs)
		 audioPause.play	();
}

function breakBlockSong(){
	if(songs)
		 audioBreakBlock.play();
}

function noBreakBlockSong(){
	if(songs)
		 audioNoBreakBlock.play();
}

function loadAudio(){
	audioSong.src = 'songs/01-super-mario-bros.mp3';
	audioJump.src = 'songs/smb_jump-small.wav';
	audioDead.src = 'songs/15-1-down.mp3';
	audioPause.src = 'songs/smb_pause.wav';
	audioBreakBlock.src = 'songs/smb_breakblock.wav';
	audioNoBreakBlock.src = 'songs/smb_bump.wav';
}