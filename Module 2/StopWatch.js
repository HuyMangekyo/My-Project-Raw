class StopWatch{
    #startTime;
    #endTime;
    constructor() {
        this.#startTime = Date();
    };
    getterStartTime(){
        return this.#startTime
    }
    getterEndTime(){
        return this.#endTime
    }
    reStart(){
        this.#startTime = new Date();
    }
    endStart(){
        this.#endTime = new Date();
    }
    getElapsedTime(){
        return this.#endTime.getTime() - this.#startTime.getTime()
    }
}
watch = new StopWatch();

startWatch=()=> {

    watch.reStart()
}
endWatch = ()=>{
    watch.endStart()
    alert("ElapsedTime   "+ watch.getElapsedTime())
}
watch.reStart()
let total = 0
for (i=1;i<=1000000;i++){
    total+=i;
}
watch.endStart()
alert("ElapsedTime   "+ watch.getElapsedTime())
alert(total)