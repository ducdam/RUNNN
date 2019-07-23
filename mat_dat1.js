function Ground1(xPosition, yPosition, width, height,speed) {
    this.x = xPosition;
    this.y = yPosition;
    this.width = width;
    this.height = height;
    this.speed = speed;
//xử lý chuyển động mặt đất.
    this.moveLeft = function () {
        if (this.x + this.width < 0) {
            this.x = canvas.width;
        }
        this.x -= this.speed;
    };

    this.draw = function (canvas) {
        console.log("draw");
        let img = document.getElementById("ground1");
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
};