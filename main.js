function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
};

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
};


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
listaDeTeclas[1].onclick = tocaSomClap;

