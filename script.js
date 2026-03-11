document.addEventListener("DOMContentLoaded", function() {

    // ELEMENTOS
    const input = document.querySelector("#input");
    const botao = document.querySelector("#botao");
    const ul = document.querySelector("#ul");

    // FUNÇÃO PARA CRIAR ITEM
    function criarItem(texto) {
        const li = document.createElement("li");
        li.innerText = texto;

        // remover tarefa ao clicar
        li.addEventListener("click", function() {
            li.remove();
        });

        return li;
    }

    // FUNÇÃO PARA ADICIONAR TAREFA
    function adicionarTarefa() {

        // impedir tarefa vazia
        if (input.value === "") {
            return;
        }

        //CRIAR UM NOVO ITEM COM A MESMA LOGICA DE CRIAR ITEM
        const novoItem = criarItem(input.value);
        //Gera as linhas
        ul.appendChild(novoItem);

        // limpar campo
        input.value = "";
    }

    // EVENTO DO BOTÃO
    botao.addEventListener("click", function() {
        adicionarTarefa();
    });

    // ADICIONAR COM ENTER
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            adicionarTarefa();
        }
    });

});