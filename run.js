let canvas = document.getElementById("RUN");
let ctx = canvas.getContext("2d");


let player = new Player(100, 320, 50, 50, 0, 1, 80, 10);
let background = new Background(0, 0, canvas.width, canvas.height);
let shit = new Shit(700, 330, 50, 50, 20);
let ground1 = new Ground1(0, 330, 350, 220, 20);
let ground2 = new Ground2(350, 330, 350, 220, 20);
let ground3 = new Ground3(700, 330, 350, 220, 20);
let clound1 = new Clound1(0, 80, 500, 315, 5);
let clound2 = new Clound2(300, 50, 600, 200, 4);
let clound3 = new Clound3(600, 5, 200, 200, 3);
let score = new Score(0);
let gameIsOver = false;
// hàm vẽ
    setInterval(function () {
        if (!gameIsOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            player.moveRight();
            player.jumpDown();
            shit.moveLeft();
            clound1.moveLeft();
            clound2.moveLeft();
            clound3.moveLeft();
            ground1.moveLeft();
            ground2.moveLeft();
            ground3.moveLeft();
            score.getScore();
            background.draw(canvas);
            score.draw(canvas);
            clound1.draw(canvas);
            clound2.draw(canvas);
            clound3.draw(canvas);
            ground1.draw(canvas);
            ground2.draw(canvas);
            ground3.draw(canvas);
            shit.draw(canvas);
            player.draw(canvas);
            player.touchGround();
            //xử lý va chạm
            if (player.x + player.width == shit.x + 30 && player.y == shit.y - 10) {
                gameIsOver = true;
                score.score = score.score - 1 ;
                alert("Dẫm phải cứt rồi ba");
                alert("Bạn đã nhảy qua " + score.score  + " cục cứt")
            }

        }
    }, 80);
// nước mắt anh rơi trò chơi kết thúc.
function restart() {
    location.reload();
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            if (player.canJump) {
                player.jumpUp();
                player.draw(canvas);
                player.canJump = false;
                console.log(player.y);
            }
            break;
    }
}
document.addEventListener("keydown", moveSelection);

