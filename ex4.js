/* Um vendedor recebe, por mês, um salário fixo e mais um adicional de 20% do valor das vendas que ele efetuou. 
Faça um algoritmo que leia o salário fixo e o valor de venda do mês, calcule e mostre o salário final do vendedor.*/

// Entrada

var s = parseInt(prompt("Digite seu salário fixo"));

var v = parseInt(prompt("Digite o valor de suas vendas"));

// Processamento

var r = (v / 100) * 20 + s;

// Saída

alert("Seu salário final é: " + r);