const nums = [1, 2, 3, 4, 5]
const nuums = nums.map(function(hi){
    return hi * hi})
console.log(nuums);

console.log("hello");

const names = ["alice", "bob", "charlie", "danielle"]
const namees = names.map(function(item){
    return item[0].toUpperCase() + item.slice(1)
})
console.log(namees);

const football = ["Hazard", "Neymar", "Thiago"]
const baller = football.map(function(name){
    return `<p>${name}</p>`
})
console.log(baller);

