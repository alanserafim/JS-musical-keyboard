function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }  else {
        console.log('ELemento não encontrado ou seletor inválido');
    }
}

function limpaClasseAtiva(elemento) {
    elemento.classList.remove('ativa')
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

    //teste 
    tecla.onkeydown = function (evento) {
        
        if(evento.code === "Numpad7" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_pom");
            listaDeTeclas[0].classList.add('ativa');
            console.log("pom");
        }
        else if(evento.code === "Numpad8" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_clap");
            listaDeTeclas[1].classList.add('ativa');
            console.log("clap");
        }
        else if(evento.code === "Numpad9" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_tim");
            listaDeTeclas[2].classList.add('ativa');
            console.log("tim");
        }
        else if(evento.code === "Numpad4" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_puff");
            listaDeTeclas[3].classList.add('ativa');
            console.log("puff");
        }
        else if(evento.code === "Numpad5" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_splash");
            listaDeTeclas[4].classList.add('ativa');
            console.log("splash");
        }
        else if(evento.code === "Numpad6" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_toim");
            listaDeTeclas[5].classList.add('ativa');
            console.log("toim");
        }
        else if(evento.code === "Numpad1" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_psh");
            listaDeTeclas[6].classList.add('ativa');
            console.log("psh");
        }
        else if(evento.code === "Numpad2" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_tic");
            listaDeTeclas[7].classList.add('ativa');
            console.log("tic");
        }
        else if(evento.code === "Numpad3" ){
            listaDeTeclas.forEach(limpaClasseAtiva);
            tocaSom("#som_tecla_tom");
            listaDeTeclas[8].classList.add('ativa');
            console.log("tom");
        }

        


    }

};


