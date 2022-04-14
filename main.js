function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    //Atribui a tecla valor do tever no loop
    const tecla = listaDeTeclas[i];
    //pega a classe da tecla no loop
    const instrumento = tecla.classList[1];
    //"cria" o texto do id da tag de audio com template literals
    const idAudio = `#som_${instrumento}`;
    //Coloca a função declarada acima tocaSom tendo como parametro id criado pela idAudio, para tocar o audio da tecla em questão 
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

};


