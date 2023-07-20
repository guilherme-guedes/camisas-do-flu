
var camisas_1 = [
    "sem-imagem.png",
    "primeiro/1902.png",
    "primeiro/1975_1980.png",
    "primeiro/1980_1983.png",
    "primeiro/1983_1985.png",
    "primeiro/1985_1986.png",
    "primeiro/1986_1987.png",
    "primeiro/1987_1990.png",
    "primeiro/1990_1991.png",
    "primeiro/1991_1994.png",  
    "primeiro/1994_1995.png",  
    "primeiro/1995_1996.png",  
    "primeiro/1996_1997.png",  
    "primeiro/1997_1998.png",  
    "primeiro/1998_2001.png",  
    "primeiro/2001_2003.png",  
    "sem-imagem.png"
]

var camisas_2 = [
    "sem-imagem.png",
    "segundo/1979_1980.png",   
    "segundo/1980_1983.png",   
    "segundo/1983_1984.png",  
    "segundo/1984_1985.png",   
    "segundo/1985_1986.png",    
    "segundo/1986_1987.png",    
    "segundo/1987_1988.png",    
    "segundo/1988_1990.png",  
    "segundo/1990_1992.png",    
    "segundo/1992_1994.png",  
    "segundo/1994_1995.png",
    "segundo/1995_1996.png",  
    "segundo/1996_1997.png",         
    "segundo/1997_1998.png",         
    "segundo/1998_2001.png",         
    "sem-imagem.jpg"
]

var camisas_3 = [
    "sem-imagem.png",
    "terceiro/2002.png",   
    "sem-imagem.png"
]


var camisas_comemorativas = [
    "sem-imagem.png",
    "comemorativos/2002.png",   
    "sem-imagem.png"
]

camisas = camisas_1;    

// Menu
const primeiroUniforme = document.getElementById("uniformes1");
const segundoUniforme = document.getElementById("uniformes2");
const terceiroUniforme = document.getElementById("uniformes3");
const comemorativaUniforme = document.getElementById("comemorativas");

primeiroUniforme.addEventListener("click", () => {
    camisas = camisas_1;
    resetIndices();
    atualizarImagens();
});
segundoUniforme.addEventListener("click", () => {
    camisas = camisas_2;
    resetIndices();
    atualizarImagens();
});
terceiroUniforme.addEventListener("click", () => {
    camisas = camisas_3;
    resetIndices();
    atualizarImagens();
});
comemorativaUniforme.addEventListener("click", () => {
    camisas = camisas_comemorativas;
    resetIndices();
    atualizarImagens();
});

// Carrossel
const prev = document.getElementById("camisa_anterior");
const atual = document.getElementById("camisa_atual");
const next = document.getElementById("camisa_seguinte");

var indexPrev = parseInt(prev.getAttribute("ref"));
var indexAtual = parseInt(atual.getAttribute("ref"));
var indexNext = parseInt(next.getAttribute("ref"));

next.addEventListener("click", () => {
    avancar();
    atualizarImagens();
});

prev.addEventListener("click", () => {
    voltar();
    atualizarImagens();
});

voltar = function(){
    if(indexPrev <= 0){
        indexPrev = 0; 
        indexAtual = 1;
        indexNext = 2;
    } 
    else {
        indexPrev--;
        indexNext--;
        indexAtual--;
    } 
}

avancar = function(){    
    if((indexNext+1) >= camisas.length) {
        indexNext = (camisas.length-1);
        indexAtual = (camisas.length-2);
        indexPrev = (camisas.length-3);
    }
    else {
        indexNext++;
        indexPrev++;
        indexAtual++;
    }
}

resetIndices = function(){
    indexPrev = 0;
    indexAtual = 1;
    indexNext = 2;
}

atualizarImagens = function(){
    if(indexPrev <= 0)
        prev.innerHTML = "";
    else
        prev.innerHTML = ' <img src="imagens/camisas/' + camisas[indexPrev] + '"/> ';

    atual.innerHTML = ' <img src="imagens/camisas/' + camisas[indexAtual] + '"/> ';

    if(indexNext >= (camisas.length-1))
        next.innerHTML = "";
    else
        next.innerHTML = ' <img src="imagens/camisas/' + camisas[indexNext] + '"/> ';
}