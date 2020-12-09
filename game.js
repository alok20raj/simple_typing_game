var canvas;
var canvasContext;
let x=20;
var string;
let score = 0;
let highscore = 0;



window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	var typeval = document.getElementById("typingValue"); 		//user typed value.
	canvasContext = canvas.getContext('2d');

	let fps=40;
	setInterval(function(){
		if(x==20){
			string = str(no);
		}
		moveEverything()
		drawEverything(x,string);
		if(x>820 || check()){
			x=20;
			document.getElementById("val").value = ''; 		//if inputed value get match then blank the input box.
			no++;
		}
	},1000/fps)
}

function drawEverything(x,string){
	canvasContext.fillStyle='black';		//for background.
	canvasContext.fillRect(20,20,canvas.width,canvas.height);

	drawString(x,string);
	scoreBoard(score);
	highScoreBoard(highscore);
}

function moveEverything(){
	x+=4;
}

let no= Math.floor(Math.random()*1+2); 		//random number between 3 to 5.

function drawString(x,string){
	canvasContext.font="30px Verdana";
	canvasContext.fillStyle='gray';
	canvasContext.fillText(string,x,245);  // place of text appearing.
}

function str(len){
	let random_str='';
	let random_ascii;
	for(let i=0;i<=len;i++){
		random_ascii=Math.floor((Math.random()*25)+97);
		random_str+=String.fromCharCode(random_ascii);
	}
	return random_str;
}

function holdString(no){
	return str(no);
}

function check(){
	var userVal = document.getElementById("val").value;
	if(userVal==string){
		return true;
	}
	return false;
}

function scoreVal(){
	if(check()){
		score++;
	}
}

function highScoreVal(){
	if(score>highscore){
		highscore=score;
	}
}

function scoreBoard(score){
	scoreVal();
	canvasContext.fillStyle = "gray";
	canvasContext.fillText("Your Score: ",50,60);
	canvasContext.fillStyle = "gray";
	canvasContext.font = "40px Verdana";
	canvasContext.fillText(score, 250, 60);
}
function highScoreBoard(highscore){
	highScoreVal();
	canvasContext.fillStyle = "gray";
	canvasContext.fillText("Your High Score:   ",510,60);
	canvasContext.fillStyle = "gray";
	canvasContext.font = "40px Verdana";
	canvasContext.fillText(highscore, 850, 60);
}