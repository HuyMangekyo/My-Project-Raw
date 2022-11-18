// name= {name:"x",pronounce:"y"}
enum EKindWords{"Noun" ="Noun","Pronoun"="Pronoun","Adjective"="Adjective","Verb"="Verb","Adverb"="Adverb"}
//tao cau mau
class ExampleSentence{
    eng:string;
    vie:string;
    constructor(eng,vie) {
        this.eng = eng;
        this.vie = vie;
    }
}
//tao dinh nghia cho tung loai tu, kem cau mau
class Explain{
    name:string;
    exampleList;
    constructor(name) {
        this.name = name;
        // @ts-ignore
        this.exampleList = new Map;
    }
    setExample(exampleEng,exampleVie){
    this.exampleList.set(exampleEng,exampleVie)
    }
    delExample(example:ExampleSentence){
        this.exampleList.delete(example.eng)
    }
    getExampleSize(){
        return this.exampleList.size
    }
}
//tao loai tu cho tu kem cac dinh nghia
class KindWord{
    name;
    explainList;
    constructor(name) {
        this.name = name;
        // @ts-ignore
        this.explainList = new Map;
    }
    setExplain(explainName){
        let explain = new Explain(explainName);
        this.explainList.set(explain.name,explain);
    }
    delExplain(explainName){
        this.explainList.delete(explainName)
    }
    showExplain(){
        let explainList = [];
        this.explainList.forEach(explain=>{
            explainList.push(explain.name)
        })
        return explainList = []
    }

}
class Word{
    name;
    pronounce;
    kindWordList;
    constructor(name,pronounce) {
        this.name = name;
        this.pronounce= pronounce
        // @ts-ignore
        this.kindWordList = new Map;
    }
    setKindWord(kindWordName){
        let kindWord = new KindWord(kindWordName);
        this.kindWordList.set(kindWord.name,kindWord);
    }
    delKindWord(explainName){
        this.kindWordList.delete(explainName)
    }
    show(){
        let explainWord = "----tu "+this.name + " cach phat am "+ this.pronounce
        this.kindWordList.forEach(kindWordClass => {
            explainWord+= "\n" +`tu loai: ${kindWordClass.name}: `
            kindWordClass.explainList.forEach(explainClass=>{
                explainWord+=` dinh nghia: ${explainClass.name}. VD:`
                explainClass.exampleList.forEach((SentenceVie,SentenceEng)=>{
                    explainWord+= SentenceEng +":  "+ SentenceVie + ";"
                })
            })

        })
        return explainWord
    }
    setDefine(kindWord:EKindWords,explain,exampleEng?,exampleVie?){
        if (!this.kindWordList.has(kindWord)) {
            this.setKindWord(kindWord)
            }
        if (!this.kindWordList.get(kindWord).explainList.has(explain)){
            this.kindWordList.get(kindWord).setExplain(explain)
        }
        this.kindWordList.get(kindWord).explainList.get(explain).setExample(exampleEng,exampleVie)
    }
    delDefine(kindWord:EKindWords,explain,exampleEng?,exampleVie?){
        switch (arguments.length){
            case 3:
                this.kindWordList.get(kindWord).explainList.get(explain).exampleList.delete(exampleEng);
                break;
            case 2:
                this.kindWordList.get(kindWord).explainList.delete(explain);break;
            case 1:
                this.kindWordList.delete(EKindWords)
        }
    }
    editDefine(kindWord:EKindWords,explain,exampleEng,exampleVie){

    }
}
let word = new Word("hello","həˈlō")
word.setDefine(EKindWords.Noun, "chao","hello Huy","chao Huy")
word.setDefine(EKindWords.Noun, "xin chao","hello Cua","chao Cua")
console.log(word.show())
word.setDefine(EKindWords.Noun, "chao","hello Bong","chao Bong")
console.log(word.show())
word.delDefine(EKindWords.Noun, "xin chao")
console.log(word.show())



