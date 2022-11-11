class Rat{
    constructor(name,mass,speed) {
        this.name = name;
        this.mass = mass;
        this.speed = speed;
        this.life = true;
    }
    setlife(life){
        this.life=life;
    }
    getlife(){
        return this.life;
    }
}
class Cat{
    constructor(name,mass,speed) {
        this.name = name;
        this.mass = mass;
        this.speed = speed;
        this.life = true;
    }
    setlife(life){
        this.life=life;
    }
    getlife(){
        return this.life;
    }
    catch(Rat){
        if ((Rat.speed<this.speed)&&(Rat.life)){
            this.mass+=Rat.mass
            Rat.life = false
            alert("da bat duoc chuot")
            alert("meo nang "+this.mass )
        }
        else if(!Rat.life) {
            alert("chuot da chet")
        }
        else {
            alert("Chuot chay qua nhanh")
        }
}
}
let jerry = new Rat("jerry",10,20)
let Tom = new Cat("Tom",30,10)
// jerry.setlife(false)
Tom.catch(jerry)

