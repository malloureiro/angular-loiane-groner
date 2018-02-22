/**
 * Exemplo do conceito de Hoisting
 * 
 */
var foo = function() {
    if (true) {
        action = "Hello, stranger";
    } else {
        action = "Never here";
    }
    var action; // hoisting, o javascript declara as variáveis sempre no topo da função
    return action;
}

/**
 * Exemplo de declaração var com escopo global
 */
var something = true;
if (something) {
    var num = 10;
}
console.log(num); // num não assume apenas o escopo do bloco if

/**
 * - const e let não são "hoisting"
 * - limita o escopo das variáveis: é sempre melhor declarar as coisas o mais próximo de onde vc for utilizá-las.
 * - permite melhor controle
 */
