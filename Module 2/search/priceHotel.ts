let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
function sumPrice(array){
    let sum =0;
    array.forEach((val,i)=>{
        val.forEach((price,j)=>{
            if (i ==0){
                if (price!=0){
                    sum+=price
                }
            }else if((price!=0) && array[i-1][j]!=0){
                sum+=price;
            }
        })
    })
    return sum;
}
console.log(sumPrice(matrix))