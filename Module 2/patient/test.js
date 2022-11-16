// name= {name:"x",pronounce:"y"}
var WordType = /** @class */ (function () {
    function WordType() {
    }
    return WordType;
}());
var Word = /** @class */ (function () {
    function Word(name, noun, adjective, verb, synonymous) {
        this.name = name;
        this.noun = noun;
        this.adjective = adjective;
        this.verb = verb;
        this.synonymous = synonymous;
    }
    return Word;
}());
var noun = {};
var a = "my age";
var b = { "x": 2 };
noun[a] = b;
console.log(noun[a]["x"]);
