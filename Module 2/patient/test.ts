function sum(x,y?){
    function total(y){
        console.log( x+y)
    }
    if(y!==undefined){
        return total(y)
    }
    return x
}
sum(3)
// sum(3,4)