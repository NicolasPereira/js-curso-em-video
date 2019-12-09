//Executar no ambiente de desenvolvimento do node

/*Precedencia
1º - Operadores aritméticos.
2º - Operadores relacionais.
3º - Operadores lógicos.
*/

var preco = 1000;
var idade = 19;
var curso = 'NodeJS';
var n1 = 2;
var n2 = 1;

preco >= 200.50; // maior ou igual

idade <= 18; //menor ou igual

curso == 'JavaScript' //comparação

n1 != n2; //diferença

//Compara somente o valor
5 == '5'; //retorno será true, mesmo o tipo sendo diferentes

//Compara o valor e também o tipo
5 === '5'; //retorno será false, pois os tipos são diferentes

//As duas expressões devem ser verdadeiras.
idade >= 15 && idade <= 19

// Apenas uma das expressões precisa ser verdadeiras
curso =='JavaScript' || curso == 'NodeJS'

//Operador ternario
// TESTE ? true : false

idade > 15 ? 'sim' : 'não'