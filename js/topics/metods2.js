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