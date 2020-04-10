// 1 задание
// -  Створити функцію конструктор для об'єкту який описує теги

// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)

//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

// function Tag (title, action, attributs){
// this.title=title || 'Default title of tag';
// this.action=action|| 'Default action';
// this.attributs=attributs|| [];
// }

// let arrayOfTags=[
//   {
//    title:'<a>',
//    action:'Tег <a> устанавливает ссылку или якорь',
//    attributs:
//    [
//     {titleOfAttributes: 'href', values: 'Задает адрес документа, на который следует перейти'},
//     {titleOfAttributes: 'title', values:'Добавляет всплывающую подсказку к тексту ссылки'}
//   ]
// },
//   {
//     title:'<div>',
//    action:'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//    attributs:
//    [
//     {titleOfAttributes: 'align', values: 'Задает выравнивание содержимого тега <div>'},
//     {titleOfAttributes: 'title', values:'Добавляет всплывающую подсказку к содержимому'}
//   ]
//   },
//   {
//     title:'<h1>',
//    action:'представляет собой наиболее важный заголовок первого уровня',
//    attributs:
//    [
//     {titleOfAttributes: 'align', values: 'Определяет выравнивание заголовка.'},
//    ]
//   },
//   {
//     title:'<span>',
//    action:'Тег <span> предназначен для определения строчных элементов документа',
//    attributs:
//    [
//     {titleOfAttributes: 'class', values: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
//     {titleOfAttributes: 'id', values:'Указывает имя стилевого идентификатора'}
//   ]
//   },
//   {
//     title:'<input>',
//    action:'<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
//    attributs:
//    [
//     {titleOfAttributes: 'form', values: 'Связывает поле с формой по её идентификатору'},
//     {titleOfAttributes: 'list', values:'Указывает на список вариантов, которые можно выбирать при вводе текста'}
//   ]
// }
//  ];

// for (let iterator of arrayOfTags){

// let newTag=new Tag(iterator.title, iterator.action, iterator.attributs);
// console.log(`Тег ${iterator.title}`, newTag);
// console.log(`_______________`);
// }
// console.log(`***************`);

// 2 задание
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

// class Tags {
//   constructor (title, action, attributs){
//     this.title=title || 'Default title of tag';
// this.action=action|| 'Default action';
// this.attributs=attributs|| [];
//   }
// }

// for (let iterator of arrayOfTags){

//   let newTag=new Tags(iterator.title, iterator.action, iterator.attributs);
//   console.log(`Тег ${iterator.title}`, newTag);
//   console.log(`_______________`);
//   }

// 3 задание
//   - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//   model: "Some car",
//   manufacture: "GB",
//   year: 2018,
//   speed: 250,
//   v: 2.5,
//   drive: function () {
//     console.log(`Едет со скоростью: ${this.speed} км/ч`);
//   },
//   info: function () {
//     if (this.driver) {
//       console.log(`Вся информация об авто:
//     1. Модель-${this.model}
//     2. Производитель-${this.manufacture}
//     3. Год-${this.year}
//     4. Скорость-${this.speed}
//     5. Двигатель-${this.v}
//     6. Водитель:
//       6.1 Имя-${this.driver.name}
//       6.2 Лет-${this.driver.age}
//       6.3 Опыт-${this.driver.skill}`);
//     } else {
//       console.log(`Вся информация об авто:
//   1. Модель-${this.model}
//   2. Производитель-${this.manufacture}
//   3. Год-${this.year}
//   4. Скорость-${this.speed}
//   5. Двигатель-${this.v}`);
//     }
//   },
//   increaseMaxSpeed: function (newSpeed) {
//     this.speed += newSpeed;
//     console.log(`Едет с увеличенной скоростью: ${this.speed} км/ч`);
//   },
//   changeYear: function (newValue) {
//     this.year = newValue;
//     console.log(`Изменённый год: ${this.year}`);
//   },
//   addDriver: function (driver) {
//     this.driver = driver;
//     console.log(driver);
//   },
// };
// let driver = {
//   name: "Max",
//   age: 32,
//   skill: "94%",
// };

// car.info();

// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver(driver);
// console.log(`_______________`);
// car.info();

// console.log(`***************`);

// 4 задание
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Cars(model, manufacture, year, speed, v) {
//   this.model = model;
//   this.manufacture = manufacture;
//   this.year = year;
//   this.speed = speed;
//   this.v = v;

//   (this.drive = function () {
//     console.log(`Едет со скоростью: ${this.speed} км/ч`);
//   }),
//     (this.info = function () {
//       if (this.driver) {
//         console.log(`Вся информация об авто:
//   1. Модель-${this.model}
//   2. Производитель-${this.manufacture}
//   3. Год-${this.year}
//   4. Скорость-${this.speed}
//   5. Двигатель-${this.v}
//   6. Водитель:
//     6.1 Имя-${this.driver.name}
//     6.2 Лет-${this.driver.age}
//     6.3 Опыт-${this.driver.skill}`);
//       } else {
//         console.log(`Вся информация об авто:
// 1. Модель-${this.model}
// 2. Производитель-${this.manufacture}
// 3. Год-${this.year}
// 4. Скорость-${this.speed}
// 5. Двигатель-${this.v}`);
//       }
//     }),
//     (this.increaseMaxSpeed = function (newSpeed) {
//       this.speed += newSpeed;
//       console.log(`Едет с увеличенной скоростью: ${this.speed} км/ч`);
//     }),
//     (this.changeYear = function (newValue) {
//       this.year = newValue;
//       console.log(`Изменённый год: ${this.year}`);
//     }),
//     (this.addDriver = function (driver) {
//       this.driver = driver;
//       console.log(driver);
//     });
// }
// const car1 = new Cars("VW", "GR", 2019, 225, 2.1);

// car1.info();

// car1.increaseMaxSpeed(50);
// car1.changeYear(2020);
// car1.addDriver(driver);
// console.log(`_______________`);
// car1.info();
// console.log(`***************`);

// Задание 5
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class CarrsClass{
//   constructor(model, manufacture, year, speed, v){

//   this.model = model;
//   this.manufacture = manufacture;
//   this.year = year;
//   this.speed = speed;
//   this.v = v;}

//   drive() {
//     console.log(`Едет со скоростью: ${this.speed} км/ч`);
//   };
//  info() {
//       if (this.driver) {
//         console.log(`Вся информация об авто:
//   1. Модель-${this.model}
//   2. Производитель-${this.manufacture}
//   3. Год-${this.year}
//   4. Скорость-${this.speed}
//   5. Двигатель-${this.v}
//   6. Водитель:
//     6.1 Имя-${this.driver.name}
//     6.2 Лет-${this.driver.age}
//     6.3 Опыт-${this.driver.skill}`);
//       } else {
//         console.log(`Вся информация об авто:
// 1. Модель-${this.model}
// 2. Производитель-${this.manufacture}
// 3. Год-${this.year}
// 4. Скорость-${this.speed}
// 5. Двигатель-${this.v}`);
//       }
//     };
//     increaseMaxSpeed(newSpeed) {
//       this.speed += newSpeed;
//       console.log(`Едет с увеличенной скоростью: ${this.speed} км/ч`);
//     };
//     changeYear(newValue) {
//       this.year = newValue;
//       console.log(`Изменённый год: ${this.year}`);
//     };
//     addDriver (driver) {
//       this.driver = driver;
//       console.log(driver);
//     };
//   }

//   const car2 = new CarrsClass("Ford", "Germany", 2017, 235, 2.4);

//   car2.info();

//   car2.increaseMaxSpeed(65);
//   car2.changeYear(2019);
//   car2.addDriver(driver);
//   console.log(`_______________`);
//   car2.info();
//   console.log(`***************`);

// Задание 6
//   -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Sinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}
class Prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
}
const arrayOfSinderel = [
  new Sinderella("Ann", "18", 35),
  new Sinderella("Kate", "19", 36),
  new Sinderella("Alice", "20", 37),
  new Sinderella("Iris", "21", 38),
  new Sinderella("Kira", "22", 39),
];
// console.log(arrayOfSinderel)
const prince = new Prince("John", 25, 37);

for (let iterator of arrayOfSinderel) {
  if (iterator.footSize === prince.shoeSize) {
    console.log(`Принц ${prince.name} нашёл золушку ${iterator.name}`);
  }
}
console.log(`***************`);

// Задание 7
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Sinderellas(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

function Princes(name, age, shoeSize) {
  this.name = name;
  this.age = age;
  this.shoeSize = shoeSize;
  this.find = function (array) {
    for (let iterator of array) {
      if (iterator.footSize === this.shoeSize) {
        console.log(`Принц ${this.name} нашёл золушку ${iterator.name}`);
      }
    }
  };
}

const arrayOfSinderelas = [
  new Sinderellas("Ann", "18", 35),
  new Sinderellas("Kate", "19", 36),
  new Sinderellas("Alice", "20", 37),
  new Sinderellas("Iris", "21", 38),
  new Sinderellas("Kira", "22", 39),
];
// console.log(arrayOfSinderelas)

const prince_2 = new Princes("Eric", 28, 39);

prince_2.find(arrayOfSinderelas);
