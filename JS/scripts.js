// Criando uma variável, que será usada para a passagem das imagens.
let contador = 1;
// Determinando que o 1º botão de rádio estará "selecionado" quando a variável for igual a 1.
document.getElementById('radio1').checked = true;


// Função que faz as imagens passarem sozinhas.
// A variável vai aumentando, de 1 em 1, e o respectivo botão de rádio é "selecionado".
// Se a variável for maior que 4, ela volta a ser 1, e a soma volta a ser feita.
function correImagem(){
    contador++;
    if(contador > 4){
        contador = 1;
    }
    
    document.getElementById('radio'+contador).checked = true;
}


// Criando um intervalo, que fará a imagem passar a cada 7 segundos, usando a função criada acima.
setInterval(() => {
    correImagem();
}, 7000);

