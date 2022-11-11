function fibonacci(n:number){
    if ((n===0)||n===1){
        return n
    }else {
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}

let sum:number = 0;
for (let i:number=0;i<=10;i++){
    console.log(fibonacci(i))
    sum+=fibonacci(i)
}
console.log(`tong: ${sum}`)