#! /usr/bin/env node

function Cat(eyesColor, woolLength, tailLength) {
    this.eyesColor = eyesColor;
    this.woolLength = woolLength;
    this.tailLength = tailLength;
}
Cat.prototype.caress = function() { console.log("mrrrrr...") };
Cat.prototype.feed = function() { console.log("am-am!") };

const cat = new Cat("green", 10, 150);
console.log(cat instanceof Cat); //true
console.log(cat.eyesColor === "green"); // true
console.log(cat.woolLength === 10); // true
console.log(cat.tailLength === 150); // true
cat.caress(); // mrrrrr...
cat.feed(); // am-am!

function PersianCat(eyesColor, woolLength, tailLength) {
    // Cat.call(this, eyesColor, woolLength, tailLength);
    Cat.apply(this, arguments);
}

// Вариант №1 (ECMAScript 3)
// PersianCat.prototype = new Cat(/*...*/);

// Вариант №2 (ECMAScript 5)
PersianCat.prototype = Object.create(Cat.prototype);
PersianCat.prototype.constructor = PersianCat;

// Вариант №3 (ECMAScript 2015)
Object.setPrototypeOf(PersianCat.prototype, Cat.prototype);

PersianCat.prototype.combOut = function () { console.log("Myau!")};

const persianCat = new PersianCat("gray", 150, 50);
console.log(persianCat instanceof Cat); //true
console.log(persianCat instanceof PersianCat); //true
console.log(persianCat.eyesColor === "gray"); // true
console.log(persianCat.woolLength === 150); // true
console.log(persianCat.tailLength === 50); // true
persianCat.caress(); // mrrrrr...
persianCat.feed(); // am-am!
persianCat.combOut(); // Myau!

function SphinxCat(eyesColor, tailLength) {
    Cat.call(this, eyesColor, 0, tailLength);
}
Object.setPrototypeOf(SphinxCat.prototype, Cat.prototype);

const sphinxCat = new SphinxCat("yellow", 100);
console.log(sphinxCat instanceof Cat); //true
console.log(sphinxCat instanceof SphinxCat); //true
console.log(sphinxCat.eyesColor === "yellow"); // true
console.log(sphinxCat.woolLength === 0); // true
console.log(sphinxCat.tailLength === 100); // true
sphinxCat.caress(); // mrrrrr...
sphinxCat.feed(); // am-am!