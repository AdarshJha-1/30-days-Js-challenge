// Activity 3

// Task 5
let i = 1
do{
    console.log(i);
    i++
}while(i <= 5)


// Task 6
let fact = 1
let num = 10
do{
    if(num === 0){
       break
    }
    fact *= num
    num--
}while(num > 0)

console.log(fact);