"use strict"

const fn = (num=1, value=10, step=1) =>{
 for(let i= num; i < value; i += step)   {
    sum += i
 }
 return sum;
}

console.log(fn());
console.log(fn(3));
console.log(fn(undefined, 20, 2));


const changeValue = function() {
    console.log(arguments)
    const args = Array.from(arguments)
    console.log(args)
}

changeValue(1,2,3,4,5,6,7,8,9,10)




const changeValue2 = function(...args) {
    console.log(args)
}

changeValue2(1,2,3,4,5,6,7,8,9,10)


//? Колбеки 

const first = function(){
  setTimeout(function(){
    console.log(1)
    calback()
  },500)
}

const second = function(){
    console.log(2);
}

first(second)

//? Абстрагування  повторення

for ( let i = 0 ; i < 10;i++){
    console.log(i)
}


const repeatLog = function(startValue, n ,step){
    for ( let i = startValue ; i < n;i+=step){
        console.log(i)
    }
}

repeatLog(2, 10, 1)
repeatLog(3, 50, 2)

const showName = function(name) {
    console.log(`Hello ${name}`
)
}

showName('Sasha')
showName('Roma')
showName('Ivan')


const printValue = function(value){
    console.log(value)
}

const repeat = function(n, ation){
    for(let i = 0;i < n; i++ ){
ation(i)
    }
} 

repeat(5, printValue)


const arrayLaibls = []
repeat(3, value=> {
    arrayLaibls.push(`Label ${value}`)
})

//? Фільтрація масиву

const filter = function(array, test){
    const filtredElement = []

    for(const element of array){
        const passed = test(element)
        if(passed){
            filtredElement.push(element)
        }
    }
    return filtredElement

    
}

const fruits = [
   {name :"appels", price: 200, isFresh: true},
   {name :"appe", price: 2009, isFresh: false},
   {name :"appel", price: 204, isFresh: true}
]

const fresjFruits = filter(fruits, fruits> fruits.isFresh )
const fresjPrise = filter(fruits, fruits=> fruits.prise>= 159 )