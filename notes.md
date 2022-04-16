
# Fucionalidades

## Buscando elementos

<br>

### Elemento único 
### document.querySelector

    document.querySelector('seletor')

    seletor: classe (.nome)
             id (#nome)
             tag (button)

<br>

### Lista de elementos (todos do mesmo tipo) 
### document.querySelectorAll

    //selecionamos todos os elementos e obtivemos uma lista
    document.querySelectorAll('.tecla')

<br>

## Acessando os controles da tag audio
### elementoTagAudio.play()

    document.querySelector('#som_tecla_pom').play();

    Ao colocar o ponto após o querySelector ele acessa as propriedades / funcionalidades do elemento

<br>

## Manipulando eventos

    console.log(evento.code);
    https://keycode.info/

<br>

### Onclick
### elemento.onclick = function

    function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    };

    document.querySelector('.tecla_pom').onclick = tocaSomPom;  
            
<br>


### onkeydown -> Quando a tecla é pressionada

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa')
      }
    }

<br>

### onkeyup -> após o pressionamento da tecla

    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa')

    } 

<br>

## Trabalhando com classes no JS

<br>

### Adicionando uma classe a um elemento 
### elementoSelecionado.classList.add('nomeDaClasse')


    listaDeTeclas[3].classList.add('ativa')
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

<br>

### Removendo uma classe
### elementoSelecionado.classList.remove('nomeDaClasse')

    listaDeTeclas[3].classList.remove('ativa')
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

<br>



<br><br>

# Boas Práticas

## Referência no javaScript

    Devem ser declaradas com base nos valores que vão receber ou guardar
    
    const listaDeTeclas = document.querySelectorAll('.tecla)

<br>


## Em qual o lugar devo chamar o arquivo javascript

    Opção 1: antes do fechamento da tag "<body></body>" para os casos em que o javascript dependa de elementos do html.

    Opção 2: dentro da tag <head> para os casos em que o javaScript não depende dos elementos do html.