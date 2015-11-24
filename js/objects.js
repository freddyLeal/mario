function Rectangle2D(x, y, width, height, createFromTopLeft) { 
	this.width = (width === undefined) ? 0 : width; 
	this.height = (height === undefined) ? this.width : height; 
	this.scale = {x: 1, y: 1}; 
	if (createFromTopLeft) { 
		this.left = (x === undefined) ? 0 : x; 
		this.top = (y === undefined) ? 0 : y; 
	} else { 
		this.x = (x === undefined) ? 0 : x; 
		this.y = (y === undefined) ? 0 : y; 
	} 
} 

Rectangle2D.prototype = { 
	constructor: Rectangle2D, left: 0, top: 0, width: 0, height: 0, vx: 0, vy: 0, type: 0, 
	get x() { return this.left + this.width / 2; }, 
	set x(value) { this.left = value - this.width / 2; }, 
	get y() { return this.top + this.height / 2; }, 
	set y(value) { this.top = value - this.height / 2; }, 
	get right() { return this.left + this.width; }, 
	set right(value) { this.left = value - this.width; }, 
	get bottom() { return this.top + this.height; }, 
	set bottom(value) { this.top = value - this.height; }, 

	intersects: function (rect) { 
		if (rect !== undefined) { 
			return (this.left < rect.right && this.right > rect.left && this.top < rect.bottom && this.bottom > rect.top); 
		} 
	},

	drawImage: function (ctx, cam, img, sx, sy, sw, sh) { 
		if (ctx !== undefined) { 
			if (img.width) { 
				ctx.save(); 
				if (cam !== undefined) { 
					ctx.translate(this.x - cam.x, this.y - cam.y); 
				} else { 
					ctx.translate(this.x, this.y); 
				} 
				ctx.scale(this.scale.x, this.scale.y); 
				ctx.drawImage(img, sx, sy, sw, sh, -this.width / 2, -this.height / 2, this.width, this.height); 
				ctx.restore(); 
			} else { 
				if (cam !== undefined) { 
					ctx.strokeRect(this.left - cam.x, this.top - cam.y, this.width, this.height); 
				} else { 
					ctx.strokeRect(this.left, this.top, this.width, this.height); 
				} 
			} 
		} 
	} 
}; 