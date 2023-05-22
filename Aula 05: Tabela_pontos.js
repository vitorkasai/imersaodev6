/*
DESAFIO
- Fazer a lógica de quando houver um empate, obrigatoriamente deveria já ajustar como empate para os demais jogadores;
- Validar se todos os pontos estão fazendo sentido, tanto o número de empates, derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo);
- Adicionar a imagem de cada jogador;
- Criar um botão para zerar todos os pontos;
- Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados;
- Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação.
*/

var vitor = {
  nome: "Vitor",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
  <tr>
          <td>${vitor.nome}</td>
          <td>${vitor.vitoria}</td>
          <td>${vitor.empate}</td>
          <td>${vitor.derrota}</td>
          <td>${vitor.pontos}</td>
          <td><button onClick="adicionarVitoria(vitor)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(vitor)">Empate</button></td>
          <td><button onClick="adicionarDerrota(vitor)">Derrota</button></td>
        </tr>
  `;
}
function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
