class Shape{
    color:string;
    filled: boolean;
    constructor(color:string,filled:boolean) {
        this.color = color;
        this.filled = filled;
    }
    toString(){
        if (this.filled ==true){
            return `A Shape with color of ${this.color} and filled`
        }else {
            return `A Shape with color of ${this.color} and not filled`
        }
    }
}
class Circle extends Shape{
    radius:number;
    constructor(color:string,filled:boolean,radius:number) {
        super(color,filled);
        this.radius = radius;
    }
    getperimeter(){
        return (2*Math.PI*this.radius).toFixed(2)
    }
    getArea(){
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2)
    }
    toString(): string {
        return ` A Circle with radius = ${this.radius}, which a sub class of ${super.toString()}`;
    }
}
let shape1 = new Shape("blue",true)
let Circle1 = new Circle("red",false,3)
class Rectangle extends Shape {
    width: number;
    length: number;
    constructor(color:string,filled:boolean,width: number,length: number) {
        super(color,filled);
        this.width = width;
        this.length = length;
    }
    getArea(){
        return this.width*this.length;
    }
    toString(): string {
        return ` A Rectangle with area = ${this.getArea()}${super.toString()}`;
    }
}
class Square extends Rectangle{
    constructor(color:string,filled:boolean,side:number) {
        super(color,filled,side,side);
    }
}
let square1 = new Square("yellow",true,3)
console.log(square1.width)
