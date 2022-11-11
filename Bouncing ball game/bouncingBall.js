class Ball {
    constructor(left,top,x,y) {
        this.left = left;
        this.top = top;
        this.x = x;
        this.y = y;
    }
    position(){
        return "<div id = 'ball' style = 'position: absolute;left:"+this.left+"px;top:"+this.top+"px'></div>";

}
    moveBall(){
        this.left+=this.x;
        this.top=-1.2*this.x+590;
    }
}
class Bar{
    constructor(left) {
        this.left = 30+ left;
    }
    position(){
        return "<div id = 'bar' style = 'position: absolute;left:"+this.left+"px;top:350px'></div>";
    }
}
var ball= new Ball(200,50,1,1)
var bar = new Bar(150)
var scoure = 0
function press(key){
    if ((key=="ArrowLeft")&&(bar.left >30)){
        bar.left -= 5
    }
    if ((key=="ArrowRight")&&(bar.left +70 < 370-1)){
        bar.left += 5
    }
}
function ballMove(){
        ball.moveBall()
        if (((ball.left <= 5) && (ball.left >= 5 - Math.abs(ball.x))) || (ball.left >= 395) && (ball.left <= 395 + Math.abs(ball.x))) {
            ball.x = -ball.x
        }
        if (ball.top <=7) {

            ball.y = -ball.y
        }
        if ((ball.top >= 340) && (ball.top <= 340 + Math.abs(ball.y)) && ((ball.left >= bar.left - 20) && (ball.left <= bar.left + 78))) {
            ball.top = 340
            ball.y = -ball.y
            scoure += 100;

        }
        document.getElementById("Bar").innerHTML = bar.position()
        document.getElementById("Ball").innerHTML = ball.position()
        document.getElementById("scoure").innerHTML = "<b>" + scoure + "</b>";

}
function newGame(){
     ball= new Ball(200,50,1,1)
    bar = new Bar(150)
    document.getElementById("Bar").innerHTML = bar.position();
    document.getElementById("Ball").innerHTML = ball.position();
    document.getElementById("scoure").innerHTML = "<b>"+scoure+"</b>";

    ball.x = 5;
    ball.y = 5;
}
newGame()
function playGame() {
   let play = setInterval(()=> {
        if (ball.top >= 395) {
            clearInterval(play)
            alert("Lose")
        } else {
            ballMove()
        }
    }, 70)
}
