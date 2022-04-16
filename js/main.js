function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    // elemento != null ===> elemento (igual a se o elemento existe)
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }  else {
        console.log('ELemento não encontrado ou seletor inválido');
    }
}

// variavel que guarda um nodeList similar com um indice para cada tecla
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

    //monitora o pressionamento da tecla
    tecla.onkeydown = function (evento) {
        //console.log(evento.code);
        if(evento.code === "Enter" || evento.code === "Space" || evento.code === "NumpadEnter"){
            //adiciona a classe
            tecla.classList.add('ativa');
        }
    }

    //monitora o des-pressionamento da tecla
    tecla.onkeyup = function () {
        //remove a classe
        tecla.classList.remove('ativa')
    }

}


