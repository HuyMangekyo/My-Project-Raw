// name= {name:"x",pronounce:"y"}
class SampleSentence{
    eng:string;
    vie:string;
    constructor(eng,vie) {
        this.eng = eng;
        this.vie = vie;
    }
}
class Define{
    define: string;
    sampleSentence:SampleSentence[];
    constructor(define,sampleSentence: SampleSentence[]=[]) {
        this.define  = define;
        this.sampleSentence = sampleSentence;
    }
}
class Word{
    name
    noun:string;
    adjective:string;
    verb:string;
    synonymous:string;
    constructor(name,noun,adjective,verb,synonymous) {
        this.name = name;
        this.noun=noun;
        this.adjective=adjective;
        this.verb=verb;
        this.synonymous=synonymous;
    }
}
let noun = {}
let a = "my age"
let b = {"x":2}
noun[a] = b
console.log(noun[a]["x"])




