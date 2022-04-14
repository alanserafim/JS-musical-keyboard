## Buscando elementos

    document.querySelector('seletor')

    seletor: classe (.nome)
             id (#nome)
             tag (button)

## Acessando os controles da tag audio

    document.querySelector('#som_tecla_pom').play();

    Ao colocar o ponto após o querySelector ele acessa as propriedades / funcionalidades do elemento


## Em qual o lugar devo chamar o arquivo javascript

    Opção 1: antes do fechamento da tag "<body></body>" para os casos em que o javascript dependa de elementos do html.

    Opção 2: dentro da tag <head> para os casos em que o javaScript não depende dos elementos do html.

## Onclick no JS

    function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    };

    document.querySelector('.tecla_pom').onclick = tocaSomPom;  
            


## Acessando todos os elementos de uma vez (document.querySelectorAll)

    //selecionamos todos os elementos e obtivemos uma lista
    document.querySelectorAll('.tecla')


## Referência no javaScript

    Deven ser declaradas com base nos valores que vão receber ou guardar
    
    const listaDeTeclas = document.querySelectorAll('.tecla)


