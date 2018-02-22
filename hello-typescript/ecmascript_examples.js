/** 
 * ECMAScript 6
*/
class Mammal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("Fred");
document.write(`Mammal: ${monkey.name} <br />`);

let chipmunk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2: ${chipmunk.name} <br />`);

class Marsupial extends Mammal {
    constructor(name, hasPouch) {
        super(name);
        this._hasPouch = hasPouch;
    }

    get hasPouch() {
        return this._hasPouch;
    }

    set hasPouch(hasPouch){
        this._hasPouch = hasPouch;
    }

    getInfo() {
        return `${this.name} is a marsupial`;
    }
}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch <br/>`);

document.write(`${monkey.getInfo()}<br/>`);
document.write(`${kangaroo.getInfo()}<br/>`);

function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

//Dynamic Class
class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala("Carl");
document.write(`${carl.getInfo()}<br/>`);

// Promises
var p1 = Promise.resolve("Resolve me");
p1.then((res) => document.write(`${res} <br/>`));

var randVal = 18;
var p2 = new Promise(function(resolve, reject) {
    if (randVal == 6) {
        resolve("Good Value");
    } else {
        reject("Bad Value");
    }
});
p2.then((res) => document.write(`Success: ${res} <br/>`),
(err) => document.write(`Failure: ${err} <br/>`))
