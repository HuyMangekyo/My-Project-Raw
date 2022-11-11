class Point2D{
    private x:number;
    private y:number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    setX(x:number):void{
        this.x=x;
    }
    sety(y:number):void{
        this.y=y;
    }
    getXY() :object {
        return this
    }

}

class Point3D extends Point2D{
    z:number;
    constructor(x:number,y:number,z:number) {
        super(x,y);
        this.z = z;
    }
    getZ(){
        return this.z;
    }
    setZ(z:number):void{
        this.z=z;
    }
    getXYZ():object{
        return this;
    }
}
let point2D1 = new Point2D(3,4);
let point3D1 = new Point3D(5,6,7);
console.log(point2D1.getXY());
console.log(point3D1.getXYZ());