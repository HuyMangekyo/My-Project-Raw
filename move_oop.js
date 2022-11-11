
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    this.moveDown = function(){
        this.top += 20;
        console.log('ok: ' + this.left);
    }

}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();

    }
    if((hero.left > window.innerWidth - hero.size-20)&&(hero.top <window.innerHeight - hero.size)){
        hero.moveDown();

    }

    document.getElementById('game1').innerHTML = hero.getHeroElement();
    setTimeout(start, 150)
}
function check(key){
    // alert("da an")
    if (key === "ArrowDown"){
        hero.top +=10
    }
    if (key==="ArrowRight"){
        alert("sang phai")
    }
}
start();