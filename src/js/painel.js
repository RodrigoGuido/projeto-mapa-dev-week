/*
quando clikar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem.

a imagem atual começa em 0 porque aé a primeira imagem assim que for clikado no vançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu vou  mostrar a segunda imagem

esconder todas as imagens
--pegar todas as imagens usando o DOM e remover a classe mostrar

mostrar a próxima imagem, descobrir qual é a próxima, e --colocar a classe mostrar nela

*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagem() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

/*
quando clikar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem.*/

setaAvancar.addEventListener("click", function () {
  // testa se o caontador da imagemAtual é igual ao total de imagens
  const totalDeImagens = imagensPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    console.log("não pode avançar mais");
    return;
  }

  // a imagem atual começa em 0 porque aé a primeira imagem assim que for clikado no vançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu vou  mostrar a segunda imagem

  imagemAtual++;

  // esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe mostrar

  esconderImagens();

  //   mostrar a próxima imagem, descobrir qual é a próxima, e --colocar a classe mostrar nela
  //

  mostrarImagem();
});

// quando clikar na seta para voltar temos que esconder todas as imagens e mostrar a imagem anterior.

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    console.log("não tem mais como voltar");
    return;
  }

  imagemAtual--;

  // esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe mostrar

  esconderImagens();

   //   mostrar a imagem anetrior
  // pegar todas as imagens, descobrir qual é a anterior, e --colocar a classe mostrar nela
  //

  mostrarImagem();
});
