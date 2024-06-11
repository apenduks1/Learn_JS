"use strict"

//* reduce()
/* 
const numbers = [ 1, 2, 3,4,5]
const sum = numbers.reduce((acc, num) {
    console.log(acc);
})

console.log(sum);
 */


const evenNumbers = numbers.reduce((acc, num) => {
    if(num % 2 === 0)
        acc.push(num)

    return acc
}, [])

console.log(evenNumbers);

const maxValue = numbers.reduce((maxValue,num) => Math.max(maxValue,num))

console.log(maxValue);

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    const countLikes = tweets.reduce((acc,item) => acc += item.likes, 0)
    console.log(countLikes);

    const tag = tweets.reduce((allTags, tag)=> allTags.push(tag.tags),[])



    const countTags  = tag.reduce((acc,tag)=> {
    acc[tag ] = [acc[tag] || 0] +1
    }, {})



// sort 

const numbers1 = [1,2,10,3,15,4,5,23,6,7,8,9]
console.log(numbers1.sort((a, b)=> a - b));
console.log(numbers1.sort((a, b)=> b - a));

const clients = ["Alex", "Olya", "Ivan", "Misha"]
console.log(clients.sort());


//Порахувати загальну кількість годин
//Відсортувати по кількості проведенного часу в грі

const players = [
{ id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
{ id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
{ id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
{ id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
{ id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const allTimePlayed = players.reduce((allTimePlayed, player) =>allTimePlayed += player.timePlayed  , 0)
console.log(allTimePlayed);

console.log(players.sort((a, b) => a.timePlayed - b.timePlayed));

//Порахувати загальну кількість товарів в кошику

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
    ];
    
    
    const totalAmount = cart.reduce((totalAmount, product)=> totalAmount += product.quantity, 0)
    
 console.log(totalAmount);

//Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
    ];

console.log(arr.sort((a) => a.name ));