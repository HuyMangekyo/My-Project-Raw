abstract class Animal{
    abstract makeSound():string;
}
interface Edible{
    howtoEat():string;
}
class Tiger extends Animal{
    constructor(name:string) {
        super();
    }
    makeSound(): string {
        return "gru";
    }
}
class Chicken extends Animal implements Edible{
    constructor(name:string) {
        super();
    }
    makeSound(): string {
        return "o` o' o";
    }
    howtoEat(): string {
        return "cooking"
    }
}
abstract class Fruit implements Edible{
    abstract howtoEat(): string

}
class Orange extends Fruit{
    constructor(color:string) {
        super();
    }
    howtoEat(): string {
        return "no cooking";
    }
}
class Apple extends Fruit{
    constructor(color:string) {
        super();
    }
    howtoEat(): string {
        return "no cooking";
    }
}
let tiger1 = new Tiger("Tom")
// console.log(tiger1.makeSound())
let apple1 = new Apple("blue")
console.log(apple1.howtoEat())
