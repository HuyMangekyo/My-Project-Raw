class Circle{
    constructor(public color:string, public  radius:number) {
        this.color = color;
        this.radius = radius;
    }
}
let circleList : Circle[] = [];
circleList.push(new Circle("yellow",5));
circleList.push(new Circle("red",10));
circleList.push(new Circle("blue",15));
function showCircle (circle:Circle):void{
   console.log( `hinh tron nay co mau ${circle.color} va ban kinh ${circle.radius}`)
}
circleList.forEach(showCircle)
export default Circle;