import {Stack} from "./Stack";
function reverse(array:number[]):void{
    let stack = new Stack<number>();
    array.forEach(function (val){
        stack.push(val)

    })
    console.log(stack)
    console.log (stack.size())
let array1:number[]
  for (let i=0;i<array.length;i++){
      array1.push(stack.pop())
    }

}
let arrayTest = [1,2,3,4,5]
reverse(arrayTest)