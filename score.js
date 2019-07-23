function Score(score) {
    this.score = score;
    this.getScore = function () {
        if (player.x + player.width == shit.x + 30 ){
            this.score += 1;
        }
    };
    this.draw = function () {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Score : ' + this.score, 20, 30);
        ctx.closePath();
    }
}
