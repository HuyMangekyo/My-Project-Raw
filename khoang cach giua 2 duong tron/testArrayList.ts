import {ArrayList} from "./ArrayList";
interface Post{
    Mess:string;
}
let arraylist = new ArrayList<Post>();
arraylist.add({Mess:"hello"})
arraylist.add({Mess:"bye"})
console.log(arraylist.container)