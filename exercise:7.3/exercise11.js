const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
assert.ok(isAbove(3, 2))