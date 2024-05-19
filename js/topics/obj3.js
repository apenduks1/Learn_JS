"use strict";
const person = {
  name: "Jonh",
  age: 30,
  city: "New York",
};

const { name, age, city, job = "Web developer" } = person;

console.log(person);
console.log(name);
console.log(age);
console.log(city);
console.log(job);

const product = {
  name: "Laptop",
  city: "london",
  age: 3,
};

const { name: productName, ...rest } = product;
console.log(rest);
console.log(city);
console.log(age);

const options = {
  size: {
    height: 100,
    with: 200,
  },
  items: ["yellow", "red"],
  extra: true,
};
const {
  size,
  size: { height, width, length = null },
  items,
  items: [color_1, color_2],
} = options;

console.log(size);
console.log(height);
console.log(width);

console.log(color_1);
console.log(color_2);

const rgb = [225, 44, 122];

const [red, green, blue] = rgb;

console.log(rgb);
console.log(red);
console.log(green);
console.log(blue);

const rgba = [22, 11, 456, 23];


//Деструктуризувати наступні об’єкти


const user = {
name: 'John',
age: 30,
email: 'john@example.com'
}

const  {name1,age1,email} = user

const car = {
  make: 'Toyota',
  model: 'Camry',
  model: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
  antilock_brakes: true,
  stability_control: true
  }
  }

  const { make,model,model1,features,safety, safety: {airbags,antilock_brakes,stability_control}} = car


  const movie = {
    title: 'The Shawshank Redemption',
    director: {
    name: 'Frank Darabont',
    nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
    }
    }
    const {title, director, director: {name2 ,nationality},actors,actors:[ first, second] , release_year,ratings,ratings:{imdb, rotten_tomatoes}} = movie

    const books = {
      count: 3,
      list: [
      {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
      },
      {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
      },
      {
      title: '1984',
      author: 'George Orwell',
      year: 1949
      }
      ]
      }


      const {count,list,list:[obj,  {title1, author1,year1}, {title2, author2,year2},{title3, author3,year3}] } = books


      // Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".
const person1 = {
  name: 'Nelli',
  surname: 'Laroy',
  age: 25
  };
  
  console.log(personInfo(person1));
  const personInfo = (obj)=>{
    const {name,surname,age}= obj
    console.log(`Мене звати ${name, surname} і мені ${age}років`);

  }

  const musicLibrary = {
    count: 2,
    artists: [
    {
    name: 'The Beatles',
    albums: [
    {
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    year: 1967,
    tracks: [
    { title: 'With a Little Help from My Friends', duration: '2:44' },
    { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
    { title: 'A Day in the Life', duration: '5:33' }
    ]
    },
    {
    title: 'Abbey Road',
    year: 1969,
    tracks: [
    { title: 'Come Together', duration: '4:19' },
    { title: 'Something', duration: '3:01' },
    { title: 'Here Comes the Sun', duration: '3:06' }
    ]
    }
    ]
    },
    {
    name: 'Pink Floyd',
    albums: [
    {
    title: 'The Wall',
    year: 1979,
    tracks: [
    { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
    { title: 'Comfortably Numb', duration: '6:23' },
    { title: 'Hey You', duration: '4:40' }
    ]
    },
    {
    title: 'Dark Side of the Moon',
    year: 1973,
    tracks: [
    { title: 'Speak to Me/Breathe', duration: '3:58' },
    { title: 'Time', duration: '7:06' },
    { title: 'Money', duration: '6:22' }
    ]
    }
    ]
    }
    ]
    }

    const {artists, artists:[iteam1,iteam2]} = musicLibrary
    const {name3, albums1, albums: [miniitem1, miniitem2]} = iteam1

    const {bigtitle1,bigyear1,tracks1, tracks: [miniminiiteam1,miniminiiteam2,miniminiiteam3,]} = miniitem1
    const {title5,duration1}= miniminiiteam1
    const {title6,duration2}= miniminiiteam2
    const {title7,duration3}= miniminiiteam3
    


    const {bigtitle2,bigyear2,tracks2, tracks: [miniminiiteam4,miniminiiteam5,miniminiiteam6,]} = miniitem2
    const {title9,duration4}= miniminiiteam4
    const {title10,duration5}= miniminiiteam5
    const {title11,duration6}= miniminiiteam6




    const {name4, albums2, albums: [miniitem3, miniitem4]} = iteam1

    const {bigtitle3,bigyear3,tracks3, tracks: [miniminiiteam7,miniminiiteam8,miniminiiteam9,]} = miniitem1
    const {title12,duration7}= miniminiiteam1
    const {title13,duration8}= miniminiiteam2
    const {title14,duration9}= miniminiiteam3
    


    const {bigtitle4,bigyear4,tracks4, tracks: [miniminiiteam10,miniminiiteam11,miniminiiteam12,]} = miniitem2
    const {title15,duration10}= miniminiiteam4
    const {title16,duration11}= miniminiiteam5
    const {title17,duration12}= miniminiiteam6