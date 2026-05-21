const prompt = require('prompt-sync')();

function sistema(){
   
    let selecionarOpcoes = 0;

    while (true) {
        selecionarOpcoes = Number (prompt("\n=== SISTEMA ===\n 1 - CADASTRAR USUÁRIO\n 2 - LISTAR USUÁRIO\n 3 - MODIFICAR USUÁRIO\n 4 - REMOVER USUÁRIO\n 5 - FINALIZAR\n:"));

        if(selecionarOpcoes == 1){
            console.log("1");
        }
        else if(selecionarOpcoes == 2){
            console.log("2");
        }
        else if(selecionarOpcoes == 3){
            console.log("3");
        }
        else if(selecionarOpcoes == 4){
            console.log("4");
        }
        else if(selecionarOpcoes == 5){
            break;
        }
    }
    
    console.log("Sistema finalizado!")
}

function cadastrarUsuario(){

    let finalizarCadastro = 0;
    while(finalizarCadastro != 2){

    
    }
}


sistema();