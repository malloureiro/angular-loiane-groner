
/** 
 * Plain Vanilla Javascript
 */
var minhaVar = "minha variavel";

function minhaFunc(x,y) {
    return x + y;
}

/**
 * http://es6-features.org
 * ECMAScript 2015
 * Obs: é necessário um transpiler que transforma o ECMAScript 6 (não interpretado por todos os browsers) para javascript.
 * Um transpiler bastante conhecido é o BABEL (https://babeljs.io), assim como o Typescript é também um transpiler.
 */
let num = 2; // let declara uma variável "privada" e visível apenas dentro de um escopo
const PI = 3.14; // uma constante não pode ser modificada

//Javascript
var numeros = [1,2,3,4,5];
numeros.map(function(val) {
    return val * 2;
});

// Arrow Functions
let mapArr = numeros.map(i => i * 2);
document.write(`Resultado map: ${mapArr}<br/>`);

let filterArr = numeros.filter(i => i % 2 == 0);
document.write(`Resultado filter: ${filterArr}<br/>`);

let difference = (num1, num2) => num1 - num2;
document.write(`Resultado difference: ${difference(10,5)}`);

let multiply = (num1, num2) => {
    let result = num1 * num2;
    document.write(`<p>O resultado da multiplicacao é: ${result}</p>`)
}
multiply(5,50);

//Objetos
function createAnimal(name, owner) {
    return {
		name,
		owner,
		getInfo() {
			return name + " is owned by " + owner;
		},
		address: {
			street: "Main St",
			city: "New York"
		}
    }
}
var dog = createAnimal("Costelinha", "Doug");
console.log(dog.getInfo());
console.log(dog.address.city);
console.log(Object.getOwnPropertyNames(dog));

// Classes
class Matematica {
    soma(x,y) {
        return x + y;
    }
}

// Escopos
if (true) {
    let x = 10; // x existe apenas dentro do escopo do if
}
//console.log(x); // x não é visível aqui

if (true) {
    var y = 10;
}
console.log(y); // var y assume escopo global mesmo dentro do escopo do if



