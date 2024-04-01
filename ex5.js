/* Um banco concede um valor para empréstimo de até 60% do saldo médio anual do cliente. Faça um algoritmo que leia o 
saldo médio do cliente, calcule e mostre o valor disponível para empréstimo.*/

// Entrada

var s = parseInt(prompt("Digite seu saldo médio"));

// Processamento

var e = (s / 100) * 60;

// Saída

alert("Seu saldo disponível para empréstimo é: " + e);