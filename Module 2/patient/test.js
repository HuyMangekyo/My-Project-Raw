let map = new Map()
map.set("X",1)
map.set("y",2)
map.keys()[Symbol.iterator]().next().value = "z"
console.log(map)
console.log(map.keys()[Symbol.iterator]().next().value)
