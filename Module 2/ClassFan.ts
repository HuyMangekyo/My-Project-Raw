enum SPEED {SLOW =1,MEDIUM =2,FAST =3};
class Fan {
    private speed: SPEED;
    private on: boolean;
    private radius: number;
    private color: string;

    constructor() {
        this.speed = SPEED.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }

    setSpeed(newSpeed: SPEED): void {
        this.speed = newSpeed;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    setColor(color: string): void {
        this.color = color;
    }
    setOn(on:boolean):void {
        this.on = on;
    }

    status() {
        if (this.on===true){
            return `Fan is on: ${this.color},${this.radius}, ${this.speed}`
        } else {
            return `Fan is off: ${this.color},${this.radius}`
        }
    }
}
let fan1 = new Fan();
fan1.setSpeed(SPEED.FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.setOn(true);
let fan2 = new Fan();
fan2.setSpeed(SPEED.MEDIUM);
console.log(fan1.status())
console.log(fan2.status())