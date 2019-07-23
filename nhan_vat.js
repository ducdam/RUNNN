function Player(xPosition, yPosition, width, height, speed, index,speedUp,speedDown) {
    this.x = xPosition;
    this.y = yPosition;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.index = index;
    this.speedUp = speedUp;
    this.speedDown = speedDown;
    this.canJump = true;
// xử lý hành động nhân vật.
    this.moveRight = function () {
        if (this.index == 1) {
            this.index = 2;
        } else {
            this.index = 1
        }
        this.x += this.speed;
    };
    // tạo bước nhảy.
    this.jumpUp = function () {
        this.y -= this.speedUp;
    };
    this.jumpDown = function () {
        this.y += this.speedDown;
    };
    this.touchGround = function (canvas) {
        if (this.y >= 320) {
            this.y = 320;
            this.canJump = true;
        }
    };
    this.draw = function (canvas) {
        console.log("draw");
        let img = document.getElementById("player" + this.index);
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };

}