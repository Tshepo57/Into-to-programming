//1. If statement
var name = "Tshepo"
console.log(name)

//statement 1 = true
//checking if the length name is bigger than 2
if(name.length > 5){
    console.log("yey your name is long"); //this will print out
}
//statement 2 = true
//checking if the length name is bigger than 5
if(name.length > 6){
    console.log("yey your name is too long") // this will be skipped
}

//using if statement with else
//statement 2 is false
//checking if the length of the name is bigger than 5
if(name.length > 6){
    console.log("yey your name is too long") //this will be skipped
}else{
    console.log("yey your name is way too long");//this will print out

}

//if statement, else, else if
if(name.length > 6){
    console.log("yey your name is way too long")
}else if(name.length > 5){
    console.log("no that is not true")
}else if(name.length > 4) {
    console.log("yes your name is bigger than 5")
}else if(name.length > 3){
    console.log("yes your name is smaller than 6")
}else{
    console.log("your name is not bigger than 6")
}