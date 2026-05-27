const prompt = require('prompt-sync')();
let usuarios = [];
let proximoID = 1;

function sistema(){
    
    let selecionarOpcoes = 0;

    while (true) {
        selecionarOpcoes = Number (prompt("\n=== SISTEMA ===\n 1 - CADASTRAR USUÁRIO\n 2 - LISTAR USUÁRIO\n 3 - MODIFICAR USUÁRIO\n 4 - REMOVER USUÁRIO\n 5 - FINALIZAR\n:"));

        if(selecionarOpcoes == 1){
            cadastrarUsuario();
        }
        else if(selecionarOpcoes == 2){
            listarUsuarios();
        }
        else if(selecionarOpcoes == 3){
            atualizarUsuario();
        }
        else if(selecionarOpcoes == 4){
            removerUsuario();
        }
        else if(selecionarOpcoes == 5){
            break;
        }
    }
    
    console.log("Sistema finalizado!")
}

function cadastrarUsuario(){

    let cadastros = {};
    let finalizarCadastro = 0;
    

    while(true){

        
        cadastros = {
            id: proximoID,
            nome: prompt("Nome: "),
            idade: Number(prompt("Idade: "))
        }
        usuarios.push(cadastros);
        console.log("Usuário Cadastrado!");
        proximoID++;

        let opcoesCadastro = Number(prompt("\nDeseja cadastrar outro usuário?\n 1 - CADASTRAR NOVO USUÁRIO\n 2 - SAIR\n: "));
        
        if(opcoesCadastro == 1){
            continue;
        }
        else if(opcoesCadastro == 2){
            break;
        }
    }
    
    console.log(usuarios);
}

function listarUsuarios(){
    console.log("=== LISTAR USUÁRIOS ===");
    for(let usuario of usuarios){
        console.log("Nome: " , usuario.nome);
        console.log("Idade: " , usuario.idade , "\n");
    }
    
}

function atualizarUsuario(){
    console.log("=== ATUALIZAR USUÁRIO ===\n");
    for(usuarioAtualizar of usuarios){
        console.log(`ID: ${usuarioAtualizar.id}\nNome: ${usuarioAtualizar.nome}\nIdade: ${usuarioAtualizar.idade}`);
        console.log("")
    }

    let idBuscar = Number(prompt("Digite o ID do usuário que você deseja modificar\n: "));

    for(usuarioModificar of usuarios){

        if(usuarioModificar.id === idBuscar){
           
            usuarioModificar.nome = prompt("\nNome(Novo): ");
            usuarioModificar.idade = Number(prompt("Idade(Novo): "));

            console.log("Usuário Atualizado!");

            return;
        }
    }
}
    function removerUsuario(){

        console.log("=== REMOVER USUÁRIO ===");
        for(let usuarioRemover of usuarios){console.log(`ID: ${usuarioRemover.id}\nNome: ${usuarioRemover.nome}\n`);}

        let idRemover = Number(prompt("Digite o ID que deseja remover\n: "));
        usuarios = usuarios.filter(usuario => usuario.id !== idRemover);
    }



sistema();