/*
DESAFIO
- Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final;
- Quando a pessoa errar, deixe na mensagem se o número chutado é maior ou menor que o número secreto;
*/

var escolha = prompt("Deseja jogar o jogo ? Sim(1) Não(2)")
if (escolha == 1){
  var numeroSecreto = parseInt(Math.random() * 1001)
  var tentativas = 1

  alert("Atenção, você tem um número limitado de 20 tentativas !")
  while (chute != numeroSecreto && tentativas != 21){
    alert("Tentativa número " + tentativas)
    var chute = prompt("Digite um número entre 0 e 1000")
    tentativas += 1
    if (chute == numeroSecreto){
      alert("Parabéns, você acertou com " + tentativas + " tentativas!")
    }
    else if (chute > numeroSecreto){
      alert("Errou... o número chutado " + chute + " é maior do que o número secreto")
    }
    else if (chute < numeroSecreto){
      alert("Errou... o número chutado " + chute + " é menor do que o número secreto")
    }
  }
}
