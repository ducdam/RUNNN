function Background(xPosition, yPosition, width, height) {
    this.x = xPosition;
    this.y = yPosition;
    this.width = width;
    this.height = height;

    this.draw = function (canvas) {
        let img = document.getElementById("background");
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
}



