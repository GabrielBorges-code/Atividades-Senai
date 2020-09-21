// 1 👉 Faça um programa que recebe um usuário e senha
// e valida a senha e o usuário com entrada de dados
// Dica(Tente simular um acesso estático e dinâmico usando funções e estruturas de decisão)
var usuario = 'user@test.com'
var senha = 'xly14'

var novoUsuario = " "
var novaSenha = " "

function validacaoEstatica(){
    var entradaUsuario = window.prompt(`Usuário:`)
    var entradaSenha = window.prompt(`Senha:`)

    if(user === usuario && password === senha){
        window.alert(`Seja bem vindo. Acesso liberado ao sistema`)
    }else{
        window.alert(`Acesso Negado, senha ou usuário invalidos`)
    }
}

function validacaoDinamica (){
    
    var inputUser = window.prompt(`Você já tem cadastro no sistema? [Sim/Não]`)

    if (inputUser === "Sim" || inputUser === "sim"){
        var entradaUsuario = window.prompt(`Usuário:`)
        var entradaSenha = window.prompt(`Senha:`)

        if(entradaUsuario === usuario && entradaSenha === senha || entradaUsuario === novoUsuario && entradaSenha === novaSenha){
            window.alert(`Acesso liberado ao sistema`)
        }else{
            window.alert(`Acesso negado! Usuário e Senha incorretos`)
            return validacaoDinamica()
        }
                
    }else if (inputUser === "Não" || inputUser === "não" || inputUser === "nao"){
        var inputUser2 = window.prompt(`Você deseja criar um login? [Sim/Não]`)

        if(inputUser2 === "sim" || inputUser2 === "Sim"){
            novoUsuario = (window.prompt("Digite um nome para Usuário"))
            novaSenha = (window.prompt("Digite uma senha"))

            window.alert(`Bem vindo ao sistema ${novoUsuario}`)
            console.log(` [${novoUsuario}] e [${novaSenha}]`)

            return validacaoDinamica()

        }else if(inputUser2 === "não" || inputUser2 === "Não" || inputUser2 === "nao"){
            window.alert(`Saindo do sistema`)

            }

    }else{
        window.alert(`Digitar um valor válido "Sim" ou "Não"`)
    }


}
//deixar comentado ou descomentado para chamar a função
validacaoDinamica()
// validacaoEstatica()