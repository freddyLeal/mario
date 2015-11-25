function fillWallArray(rect){
	if(wall[rect.left] === undefined){
		wall[rect.left]= [] ;
	}
	wall[rect.left].push(rect);
}
