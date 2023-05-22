/*
DESAFIO
- Continuar o projeto visto na aula 03 adicionando filmes com input criando um método.
*/

function adicionarFilme(){
  var filmeFavorito = document.getElementById("filme").value
  var elementoListaFilmes = document.getElementById("listaFilmes")
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<img src=" + filmeFavorito + ">"
  document.getElementById('filme').value = '' 
}
