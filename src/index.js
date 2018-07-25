#! /usr/bin/env node

// function Cat(eyesColor, woolLength, tailLength) {
//     this.eyesColor = eyesColor;
//     this.woolLength = woolLength;
//     this.tailLength = tailLength;
//     //return this;
// }
// Cat.prototype.caress = function() { console.log("mrrrrr...") };
// Cat.prototype.feed = function() { console.log("am-am!") };
class Cat {
    constructor(eyesColor, woolLength, tailLength) {
        this.eyesColor = eyesColor;
        this.woolLength = woolLength;
        this.tailLength = tailLength;
    }

    // noinspection JSMethodCanBeStatic
    caress() { console.log("mrrrrr...") }

    // noinspection JSMethodCanBeStatic
    feed() { console.log("am-am!") }
}

// const cat = Object.create(Cat.prototype); //{__proto__: Cat.prototype}
// Cat.call(cat, "green", 10, 150);
const cat = new Cat("green", 10, 150);

// тесты:
console.log(cat instanceof Cat); //true
console.log(cat.eyesColor === "green"); // true
console.log(cat.woolLength === 10); // true
console.log(cat.tailLength === 150); // true
cat.caress(); // mrrrrr...
cat.feed(); // am-am!

// function PersianCat(eyesColor, woolLength, tailLength) {
//     // Cat.call(this, eyesColor, woolLength, tailLength);
//     Cat.apply(this, arguments);
// }
class PersianCat extends Cat {
    constructor(eyesColor, woolLength, tailLength) {
        super(eyesColor, woolLength, tailLength);
    }

    // noinspection JSMethodCanBeStatic
    combOut() {
        console.log("Myau!")
    }
}

// Вариант №1 (ECMAScript 3)
// PersianCat.prototype = new Cat(/*...*/);

// Вариант №2 (ECMAScript 5)
// PersianCat.prototype = Object.create(Cat.prototype);
// PersianCat.prototype.constructor = PersianCat;

// Вариант №3 (ECMAScript 2015)
// Object.setPrototypeOf(PersianCat.prototype, Cat.prototype);

// PersianCat.prototype.combOut = function () {
//     console.log("Myau!")
// };

const persianCat = new PersianCat("gray", 150, 50);

// тесты:
console.log(persianCat instanceof Cat); //true
console.log(persianCat instanceof PersianCat); //true
console.log(persianCat.eyesColor === "gray"); // true
console.log(persianCat.woolLength === 150); // true
console.log(persianCat.tailLength === 50); // true
persianCat.caress(); // mrrrrr...
persianCat.feed(); // am-am!
persianCat.combOut(); // Myau!

// function SphinxCat(eyesColor, tailLength) {
//     Cat.call(this, eyesColor, 0, tailLength);
// }
//
// Object.setPrototypeOf(SphinxCat.prototype, Cat.prototype);

class SphinxCat extends Cat{
    constructor(eyesColor, tailLength) {
        super(eyesColor, 0, tailLength);
    }
}

const sphinxCat = new SphinxCat("yellow", 100);

// тесты:
console.log(sphinxCat instanceof Cat); //true
console.log(sphinxCat instanceof SphinxCat); //true
console.log(sphinxCat.eyesColor === "yellow"); // true
console.log(sphinxCat.woolLength === 0); // true
console.log(sphinxCat.tailLength === 100); // true
sphinxCat.caress(); // mrrrrr...
sphinxCat.feed(); // am-am!

// function instanceOf(obj, Constructor) {
//     if (obj === null)
//         return false;
//     const prototype = Object.getPrototypeOf(obj); // obj.__proto__
//     return Constructor.prototype === prototype ? true :
//         instanceOf(prototype, Constructor);
// }