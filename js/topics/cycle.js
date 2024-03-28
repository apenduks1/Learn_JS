//while(умова){

//}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let a = 3;
while (a) {
  console.log(a);
  a--;
}

let age = 0;
while (age <= 18) {
  age++;
  console.log(age);
}

let counter = 0;
while (age < 10) {
  counter += 2;
  console.log(counter);
}

let clients = 18;
const maxClients = 25;
while (clients <= maxClients) {
  console.log(clients);
  clients++;
}

let x = 15;

do {
  console.log(x);
  x++;
} while (x < 10);

let password = "";
do {
  password = promt("Введіть більше за 4 символи");
} while (password.length < 4);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let y = 0
for(;y< 3 ;y++){
    console.log(y++)
}


const target = 12
let sum=0
for(let k = 0; k< target; k++) {
    some += k
   
}
console.log(sum)


for(let i = 0; i < 1; i++){
    if(i === 5) {
        break;
    }
    console.log(i)
}

const num = 10
for(let i = 0; i<num;i++){
    if(i % 2 !== 0) {
        continue
    }
    console.log(i)
}