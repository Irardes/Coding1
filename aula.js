const { log } = require("console");
const { realpath } = require("fs");

const nome = "Irardes";
const idade = 24;

console.log ("Olá, meu nome é" + " " + nome + " " + "e tenho" + " " + idade + " " + "anos");


const cidade = "Salvador"

console.log(nome + " " + "é de" + " " + cidade);

let num1 = 30;
let num2 = 40; 

multiplicao = num1 * num2;
divisao = num1 / num2;
soma = num1 + num2;
subtracao = num1 - num2;

console.log(multiplicao + ", " + divisao + ", " + soma + " e " + subtracao);


const base = 7;
const altura = 3; 

área = base * altura;

console.log ("A área do triângulo é" + " " + área + " " + "m");


const nota1 = 2.5;
const nota2 = 10;
const nota3 = 8.5;

média = (nota1 + nota2 + nota3) /3 ;

console.log ("O resultado da média é" + " " + média);

preço = 80;
desconto = 0.2;
valorfinal = preço - (preço * desconto);

console.log ("O valor final com desconto é de" + " " + valorfinal + " reais");

const salario = 3270;
const aliquota = 0.15;
const salarioanual = salario * 12;

deduçãomensal = salario - (salario * aliquota);
deduçãoanual = salarioanual - (salarioanual * aliquota);

console.log ("A valor do salário bruto mensal é de" + " " + salario + " reais" + " e do salário líquido mesa é de " + deduçãomensal + " reais");
console.log ("A valor do salário bruto anual acumulado é de" + " " + salarioanual + " reais" + " e do salário líquido mesa é de " + deduçãoanual + " reais");

dinheiro1 = 10;

const real = 5.49;
const dolar = 1;
const euro = 1.11;
const libra = 1.32;

conversaoreal = (dinheiro1 * real);
let conversaorealformatado = conversaoreal.toFixed(1)
conversaolibra = (dinheiro1 * libra);
let conversaolibraformatado = conversaolibra.toFixed(1)
conversaoeuro = (dinheiro1 * euro);
let conversaoeuroformatado = conversaoeuro.toFixed(1)

console.log ("Eu tenho em 17/09" + " " + dinheiro1 * dolar + " " + "doláres" + " ,mas tenho" + " " + conversaorealformatado + " " + "em real," + " " + conversaolibraformatado + " " + "em libra," + " e" + " "+ conversaoeuroformatado + " " + "em euro");


var temperatura = 31;
var fehrenheit = (temperatura * 9/5) + 32;

console.log ("A temperatura é" + " " + temperatura + " " + "graus, em celsius" + " " + "e" + " " + fehrenheit + " " + "em fehrenheit");


peso = 80;
alturaimc = 1.90;
IMC = peso / (alturaimc * alturaimc);
let IMCreformatado = IMC.toFixed(2);

console.log ("Meu IMC é"+ " " + IMCreformatado);