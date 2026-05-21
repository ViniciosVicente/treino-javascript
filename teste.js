const prompt = require('prompt-sync')();

function sistema(){
   
    let selecionarOpcoes = 0.

    while(selecionarOpcoes != 5){
        selecionarOpcoes = Number(
            prompt(
                "\n=== SISTEMA ===\n" +
                "1 - CADASTRAR USUÁRIO\n" +
                "2 - LISTAR USUÁRIO\n" +
                "3 - MODIFICAR USUÁRIO\n" +
                "4 - REMOVER USUÁRIO\n" +
                "5 - FINALIZAR\n\n" +
                "Escolha uma opção: "
    }
    

}

sistema();