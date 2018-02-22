class Mammal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name:string) {
        this.name = name;
    }

    static makeMammal(name: string) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal `;
    }
}

let monkey = new Mammal("Fred");
document.write(`Mammal: ${monkey.name} <br />`);

let dog = Mammal.makeMammal("Joca");
document.write(`Mammal: ${dog.name} <br />`);

class Marsupial extends Mammal {
    constructor(name: string, hasPouch: boolean) {
        super(name);
    }

    getInfo() {
        return `${this.name} is a marsupial`;
    }
}

let kangaroo = new Marsupial("Paul", true);
document.write(`${monkey.getInfo()} <br />`);
document.write(`${kangaroo.getInfo()} <br />`);

// Promises - ES6
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
