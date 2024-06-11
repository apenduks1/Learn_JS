"use strict";

/* //* 1 спосіб (застарілий)

const car = {
  wheels: 4,
  speed: 200,
  color: "red",
  dirve(){
    console.log("go");
  }
};

const ford = {
    health: 100,
    __proto__:car,
}
 */


//* 2 Спосіб

const car = {
    wheels: 4,
    speed: 200,
    color: "red",
    dirve(){
      console.log("go");
    }
  };
  const audi = Object.create(car)

  audi.name = "audi"
  audi.color = "black"
  console.log(audi.color);
  console.log(audi.name);
  console.log(audi.wheels);

  console.log(audi.hasOwnProperty("name"));
  console.log(audi.hasOwnProperty("wheels"));

  console.log(car.isPrototypeOf(audi));

  const animal = {
    eats: true
}

const dog = Object.create(animal)

dog.barks = true
for(let key in dog){
    console.log(key);
}

for(let key in dog){
    if(!dog.hasOwnProperty(key)) continue

    console.log(key);
}

const objKeys = Object.keys(dog)

//? класи

class User { 

  static #takenEmail= []

  #email
  #role
constructor(name, email, role){
    this.name = name 
    this.#email = email
    this.#role = role

  }
/*   get role (newRole){
    this.#role = newRole
  }

  set role (newRole){
    this.#role = newRole
  }

   */
}
const sasha = new User({email: "kfak", name: "sasha", role: User.role.ADMIN}) 
/*    
}
changeEmail(newEmail){
  this.#email=newEmail;
}
get email(){
      
}
set email(newEmail){
  this.#email=newEmail;
} */


/* 
console.log(mango.email)
  mango.email = "newlsdal["
  console.log(mango.email);
const mango = new User("mango", "mango@gmail.com")
console.log(mango);

const poly = new User("Poly", "poly@gmail.com")

console.log(poly);




 */


