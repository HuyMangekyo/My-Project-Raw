let arr= [1,2,3,4,5,6,7];
let square = item => item*item;
function arraySq(func,arr){
    let newArr = [];
    arr.forEach((element) =>{
        newArr.push(func(element))
    })
    return newArr;
}
//////////////////////////////////
let sum = (x,y,z) => x+y+z;
const numbers =[1,2,3];
// console.log(sum(...numbers));
//////////////////////
function lastIndexOf(arr, elt, start=arr.length) {
    for (let i = start - 1; i >= 0; i--)
        if (arr[i] === elt) return i
    return -1
}
// console.log(lastIndexOf([1, 2, 1, 2], 2))
////////////////////////////////////////////////////////////
const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]
total =(a,b) => a+b.value
machine = type =>type.type =="machine"
bl = inventory.filter(machine)
al = inventory.filter(machine).reduce(total,0)
/////////////////////////////////////////////////////////////
let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}
// let fname = profile.fname;
// let lname = profile.lname;
//
const {fname,lname} = profile;
// console.log(fname,lname)
////////////////////////////////////
 detectCollision=(object, point) => {
     let {x,y,width,height} = object;

     return x<=point.x && x+width>=point.x && y<=point.y && y+height>= point.y

 }

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
const point1 = {x: 14, y: 22}
let resulf = myObjects.find(check = object => detectCollision (object,point1))
// console.log(resulf)
///////////////////////////////////////////////////////////////////////
function replace(array, from, to, elements) {
    // array.splice.apply(array, [from, to - from].concat(elements))
    array.splice(from,to- from,...elements)
}
let testArray = [1, 2, 100, 100, 6]
let addArray = [3,4,5]
replace(testArray, 2, 4,  [3, 4, 5])
// console.log(...testArray)
//////////////////////////////////////
function copyReplace(array, from, to, elements) {
    // return array.slice(0, from).concat(elements).concat(array.slice(to))
  return  a= [...array.slice(0, from),...elements,...array.slice(to)]

}
// console.log(copyReplace([1, 2, 100, 100, 6], 2, 4, [3,4,5]))
// console.log(testArray)
//////////////////////////////


let recipe = {
    'title': 'Sườn xào chua ngọt',
    'servings': 2,
    'ingredients': ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
};
console.log('Tên món ăn: ' + recipe.title);
console.log('Khẩu phần ăn: : ' + recipe.servings);
console.log('Thành phần: ');
recipe.ingredients.forEach((str)=>console.log('+ '+str))

