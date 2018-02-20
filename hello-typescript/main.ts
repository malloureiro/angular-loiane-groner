
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
let num = 2;
const PI = 3.14;

//Javascript
var numeros = [1,2,3];
numeros.map(function(val) {
    return val * 2;
});
// Arrow Functions
numeros.map(val => val * 2);

// Classes
class Matematica {
    soma(x,y) {
        return x + y;
    }
}