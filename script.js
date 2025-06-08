
let imagem = document.querySelector('.starbucks');
let circulo = document.querySelector('.circulo');
let textoSobreposto = document.querySelector('.text');
const button = document.querySelector('.btn');
const buttonSolt = document.getElementById('btn-slt')
let paragrafo = document.querySelector('.p');


function trocaImagem(endereco){
    imagem.src = endereco;
}

function trocaCor(cor){
    circulo.style.background = cor;
}

function trocaTexto(mensagem, cor) {
    textoSobreposto.innerHTML = mensagem;
    textoSobreposto.style.color = cor;
    textoSobreposto.style.fontSize = '30px';
}

button.addEventListener('click', function(){
    paragrafo.innerHTML = 'Voce virou um mestre pokemon';
     paragrafo.style.color = 'red';
})

buttonSolt.addEventListener('click', function(){
    document.querySelector('.p').innerHTML = '';
})




