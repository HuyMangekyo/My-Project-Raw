interface IQueue<T>{
    enQueue(item: T):void;
    deQueue():T|string|undefined;
    size():number|undefined
    firstPrioritizePatient()
    showList()
}
export class Patient{
    name;
    code;
    constructor(name:string,code:number) {
        this.name = name;
        this.code = code;
    }
}
export class QueuePatient implements IQueue<Patient>{
    private storage:Patient[]=[]
    constructor(private capacity:number=Infinity) {
    }
    size():number|undefined {
        return this.storage.length
    }
    enQueue(data:Patient): void{
        this.storage.push(data)
    }
    firstPrioritizePatient(){
        let maxPrioritize = 1;
        let prioritize = 7;
        let prioritizePatient:Patient
        for (let i = 0; i < this.size(); i++) {
            if (this.storage[i].code === maxPrioritize) {
                return this.storage[i]
            }
            if(prioritize>this.storage[i].code){
                prioritize = this.storage[i].code
                prioritizePatient = this.storage[i];
            }
        }
        return prioritizePatient
    }
    deQueue(): Patient | string|undefined {
        if (!this.size()){
            return undefined
        } else {
            if(!this.firstPrioritizePatient()){
                return "het benh nhan"
            }
            let patientNext = this.firstPrioritizePatient()
            let patientIndex = this.storage.indexOf(patientNext)
            this.storage.splice(patientIndex,1)
            return patientNext.name
        }
    }
    showList(){
        return this.storage
    }
}