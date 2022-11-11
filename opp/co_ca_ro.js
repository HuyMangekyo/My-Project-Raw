const SIZE = 30
const DEFAULT_VALUE=""
const TOTAL_ROWS = 15
let result =[]
class Cell{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.value = DEFAULT_VALUE
    }
    getHtml(){
        let top = (this.x-1) *SIZE+50;
        let left = (this.y-1) *SIZE;
        let pos = "c"+this.x+"r"+this.y;
        let html = "<div id='cell"+ pos+"' onClick='setValue(this.id,"+this.x+","+this.y+")'"+ "style='width: "+SIZE+"px; height: "+SIZE
            +"px; position: absolute; left: "+left
            +"px;top: "+top+"px'> </div>";
        // alert("html=  "+html)
        return html;
    }
}
function game(){
    result =[]
    var game = ""
    for ( i=1;i<=TOTAL_ROWS;i++) {
        let result_col =[]
        for (j = 1; j <= TOTAL_ROWS; j++) {
            let cell = new Cell(i, j);
            game += cell.getHtml()
            result_col.push("")
        }
        result.push(result_col)
    }
    return game
}
function win() {
    for (var rows=0;rows<TOTAL_ROWS;rows++){
        for (var cols=0;cols<TOTAL_ROWS;cols++){
            if (isEmty(result[rows][cols])){
            continue;
        }
            var  count=0;
            for (var i=1;i<=4;i++){
                if((result[rows][cols]===result[rows][cols+i])&&(isEmty(result[rows][cols])===false)){
                count+=1;
            };
            if (count==4){
                return true;

            }
            }
            var  count=0;
            for (var i=1;i<=4;i++){
                if((result[rows][cols]===result[rows+i][cols])&&(isEmty(result[rows][cols])===false)){
                    count+=1;
                };
                if (count==4){
                    return true;

                }
            }
            var  count=0;
            for (var i=1;i<=4;i++){
                if((result[rows][cols]===result[rows+i][cols+i])&&(isEmty(result[rows][cols])===false)){
                    count+=1;
                };
                if (count==4){
                    return true;

                }
            }
        }
    }
}


let turn = "person1"
function isEmty(str){
    return (!str||0===str.length)
}
function setValue(val,x,y) {
    if (!win()) {
        if (isEmty(result[x][y])) {
            if (turn === "person1") {
                document.getElementById(val).innerHTML = "x"
                result[x][y] = "x"

                if (win()) {
                    alert("person1 win")
                } else {
                    turn="person2"
                }
            } else {
                document.getElementById(val).innerHTML = "o"
                result[x][y] = "o"

                if (win()) {
                    alert("person2 win")
                } else {
                    turn = "person1"
                }

            }
        } else {
            alert("marked")
        }
    }

}
function newGame(){
    var x= game()
    document.getElementById("Game").innerHTML = x
}
newGame()