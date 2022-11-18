// name= {name:"x",pronounce:"y"}
var EKindWords;
(function (EKindWords) {
    EKindWords["Noun"] = "Noun";
    EKindWords["Pronoun"] = "Pronoun";
    EKindWords["Adjective"] = "Adjective";
    EKindWords["Verb"] = "Verb";
    EKindWords["Adverb"] = "Adverb";
})(EKindWords || (EKindWords = {}));
//tao cau mau
var ExampleSentence = /** @class */ (function () {
    function ExampleSentence(eng, vie) {
        this.eng = eng;
        this.vie = vie;
    }
    return ExampleSentence;
}());
//tao dinh nghia cho tung loai tu, kem cau mau
var Explain = /** @class */ (function () {
    function Explain(name) {
        this.name = name;
        // @ts-ignore
        this.exampleList = new Map;
    }
    Explain.prototype.setExample = function (exampleEng, exampleVie) {
        this.exampleList.set(exampleEng, exampleVie);
    };
    Explain.prototype.delExample = function (example) {
        this.exampleList["delete"](example.eng);
    };
    Explain.prototype.getExampleSize = function () {
        return this.exampleList.size;
    };
    return Explain;
}());
//tao loai tu cho tu kem cac dinh nghia
var KindWord = /** @class */ (function () {
    function KindWord(name) {
        this.name = name;
        // @ts-ignore
        this.explainList = new Map;
    }
    KindWord.prototype.setExplain = function (explainName) {
        var explain = new Explain(explainName);
        this.explainList.set(explain.name, explain);
    };
    KindWord.prototype.delExplain = function (explainName) {
        this.explainList["delete"](explainName);
    };
    KindWord.prototype.showExplain = function () {
        var explainList = [];
        this.explainList.forEach(function (explain) {
            explainList.push(explain.name);
        });
        return explainList = [];
    };
    return KindWord;
}());
var Word = /** @class */ (function () {
    function Word(name, pronounce) {
        this.name = name;
        this.pronounce = pronounce;
        // @ts-ignore
        this.kindWordList = new Map;
    }
    Word.prototype.setKindWord = function (kindWordName) {
        var kindWord = new KindWord(kindWordName);
        this.kindWordList.set(kindWord.name, kindWord);
    };
    Word.prototype.delKindWord = function (explainName) {
        this.kindWordList["delete"](explainName);
    };
    Word.prototype.show = function () {
        var explainWord = "----tu " + this.name + " cach phat am " + this.pronounce;
        this.kindWordList.forEach(function (kindWordClass) {
            explainWord += "\n" + "tu loai: ".concat(kindWordClass.name, ": ");
            kindWordClass.explainList.forEach(function (explainClass) {
                explainWord += " dinh nghia: ".concat(explainClass.name, ". VD:");
                explainClass.exampleList.forEach(function (SentenceVie, SentenceEng) {
                    explainWord += SentenceEng + ":  " + SentenceVie + ";";
                });
            });
        });
        return explainWord;
    };
    Word.prototype.setDefine = function (kindWord, explain, exampleEng, exampleVie) {
        if (!this.kindWordList.has(kindWord)) {
            this.setKindWord(kindWord);
        }
        if (!this.kindWordList.get(kindWord).explainList.has(explain)) {
            this.kindWordList.get(kindWord).setExplain(explain);
        }
        this.kindWordList.get(kindWord).explainList.get(explain).setExample(exampleEng, exampleVie);
    };
    Word.prototype.delDefine = function (kindWord, explain, exampleEng, exampleVie) {
        switch (arguments.length) {
            case 3:
                this.kindWordList.get(kindWord).explainList.get(explain).exampleList["delete"](exampleEng);
                break;
            case 2:
                this.kindWordList.get(kindWord).explainList["delete"](explain);
                break;
            case 1:
                this.kindWordList["delete"](EKindWords);
        }
    };
    Word.prototype.editDefine = function (kindWord, explain, exampleEng, exampleVie) {
    };
    return Word;
}());
var word = new Word("hello", "həˈlō");
word.setDefine(EKindWords.Noun, "chao", "hello Huy", "chao Huy");
word.setDefine(EKindWords.Noun, "xin chao", "hello Cua", "chao Cua");
// word.setDefine(EKindWords.Noun, "xin chao")
// word.setDefine(EKindWords.Verb, "tam biet","hello Huy")
// console.log(word.kindWordList.get("Noun"))
console.log(word.show());
word.setDefine(EKindWords.Noun, "chao", "hello Bong", "chao Bong");
console.log(word.show());
word.delDefine(EKindWords.Noun, "chao", "hello Huy");
console.log(word.show());
