/*
DESAFIO
- Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ 's, cursos, capas de jogos, entre outros;
- Tentar implementar outras versões da estrutura de repetição que fizemos com `for`, como por exemplo com `foreach` ou `while`;
- Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;
- Criar um campo e botão para adicionar a imagem pela tela, e não direto no código.
*/

var listaFilmes = ["https://br.web.img3.acsta.net/pictures/210/123/21012312_20130613132958221.jpg","https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg", "https://br.web.img3.acsta.net/pictures/17/07/13/18/50/359962.png", "https://feira.tangerina.news/wp-content/uploads/2023/01/teen-wolf-o-filme-cartaz.jpg", "https://musicart.xboxlive.com/7/28f95d00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"];

for (var i = 0; i < listaFilmes.length; i++){
  document.write('<img src=' + listaFilmes[i] + '>')
}
