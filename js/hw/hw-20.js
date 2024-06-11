"use stirct"

//Отримати загальну суму балансу (поле balance) всіх користувачів.

const allBalance = users.reduce((acc,user )=> acc =+ user.balnce,0)
console.log(allBalance);

//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const findFriendName = 'Петро';
const result = users.filter(user => user.friends.includes(targetFriendName)).map(user => user.name);

//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const names = users.sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
console.log(names);

//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const skills = users.sort((a, b) => b.skills - a.skills )
console.log(skills);