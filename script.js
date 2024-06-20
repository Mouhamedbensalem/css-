
let myname = "hama"
myname = "hlelem"
 console.log(myname)
const num= 52.5
console.log(num * 6)
console.log(7==9)
let x =null
console.log(x)
const names = ["hama","esra","dhia","yahia"]
for (let i = 0;i< names.length;i++){
    console.log(names[i])
    console.log(names[i].length) 
}
for ( let i of names){
    console.log(i)
}
const person = {
    firstName:"hama",
    lastName:"ben selem",
    school: 1
}
console.log(person)
console.log(person.lastName)
const students = [
    {  firstName:"hama",
        lastName:"ben selem",
        school: 1
    },{
        firstName:"dhia",
        lastName:"dachraoui",
        school: 5
    },{
        firstName:"yahia",
        lastName:" ben nasr",
        school: 2
    }
]
if( students[1].firstName == "dhia"){
    console.log("its dhia")
}else if( students[1].firstName == "hama"){
        console.log("its hama")
    }else{
        console.log("no found")
    }
function add (num1, num2){
    return num1 +num2
}
console.log(add(1,5))

