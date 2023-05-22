
/*
Desafio:
- Trocar a moeda dolar do exemplo para uma criptomoeda.
- Adicionar no *****alert***** o nome da pessoa que está pedindo o valor.
    - Criar um nome para colocar em uma string e colocar no alert como por exemplo “Olá *****nome***** o valor em real é *****valor*****”.
*/

var nome = prompt("Qual seu nome ?");
var valorEmDolar = prompt("Qual o valor em dolar que você deseja converter ?");
var cotacaoDoDolar = 5.09;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert(
  "Olá " +
    nome +
    " o equivalente do valor inserido em reais é de R$ " +
    valorEmReal
);

var escolha = prompt("Deseja continuar convertendo moedas ? Sim(1) Não(2)");
if (escolha == 1) {
  valorEmDolar = prompt("Qual o valor em dolar que você deseja converter?");
  var cotacaoDoBitcoin = 0.000043;
  alert(
    "Olá " +
      nome +
      " o equivalente do valor inserido em bitcoin é de BT$ " +
      valorEmDolar * cotacaoDoBitcoin
  );
}
