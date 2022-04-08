// https://itproger.com/news/104

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();
var soundtrace = new Audio();
var fail = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
soundtrace.src = "audio/E1M1.mp3"
fail.src = "audio/fail.mp3"



var gap = 90;

// при нажатии на какую-либо кнопку

document.addEventListener("keydown", moveUp);

function moveUp() {
	yPos -= 25;
	fly.play();
	soundtrace.play();
}

// Создание блоков
var pipe = [];

pipe[0] = {
	x: cvs.width,
	y: 0
}

var score = 0;

// позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.5;


function GameOver() {
	window.location.reload()
}

function draw() {
	ctx.drawImage(bg, 0, 0);

	for (var i = 0; i < pipe.length; i++) {	
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

		pipe[i].x--;

		if (pipe[i].x == 125) {
			pipe.push({
				x: cvs.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}

		if (pipe[i].x == 5) {
			score++;
			score_audio.play();	
		}

		if (xPos + bird.width >= pipe[i].x 
			&& xPos <= pipe[i].x + pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
				|| yPos + bird.height >= pipe[i].y +
				pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
			//location.reload(); // перезагрузка страницы

			var EndTitle = ctx.fillText("Game Over", 70, 200)
			ctx.fillText("Your score: " + score, 62, 230);
			setTimeout(GameOver, 4000);
			fail.play();
			document.removeChild(cvs);
			//ctx.fillText("Счет: " + score, 10, cvs.height - 20);
			break;
		}
	}
	
	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;

	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);


	requestAnimationFrame(draw);
}

pipeBottom.onload = draw;

