//2 👉 Crie um chat para um cliente que quer comprar um carro com
// entrada de dados.
// Dica(Use estruturas de decisão e ou vetores ou funções...)
function comprarCarro() {
    
    const chevrolet = ["Onix", "Prisma", "Spin", "Montana", "Cruze"]
    const fiat = ["Strada", "Uno", "Toro", "Mobi", "Argo"]
    const volkswagen = ["Amarok", "Gol", "Jetta", "Golf", "Saveiro"]
    const renault  = ["Sandero", "Duster","Logan", "Kwid","Fluence" ]
    
    var entradaUsuario = window.prompt(`Seja bem vindo a Loja de Carros do Madruga \nTemos 4 marcas disponíveis para compra \n 1-Chevrolet \n 2-Fiat \n 3-Volkswagen \n 4-Renault \n Por favor digite uma opção que você deseja ver os modelos`)

    switch (entradaUsuario) {
        case "Chevrolet":
            escritaAutomatica(chevrolet)
            break;
        case "Fiat":
            escritaAutomatica(fiat)
            break;
        case "Volkswagen":
            escritaAutomatica(volkswagen)
            break;
        case "Renault":
            escritaAutomatica(renault)
            break;
        default:
            window.alert(`Marca não encontrada ou valor digitado está incorreto. \nPor favor digite a marca desejada (a primeira letra em maiúsculo)`)
            return comprarCarro()
    }
}

function precosDosCarros() {
    var precoDoCarro = (Math.random() * (100000 - 40000) + 40000)
    return precoDoCarro.toFixed(2)
}

function escritaAutomatica(marcaDoCarro) {
    
    var entrada2DoUsuario = window.prompt(`Temos as opções: ${marcaDoCarro}`)
    if(marcaDoCarro.indexOf(entrada2DoUsuario) > -1){
        var preco = precosDosCarros()
        var comprarCarroSimOuNao = window.prompt(`O carro escolhido foi o ${entrada2DoUsuario} o valor dele é R$ ${preco} \n Você deseja comprar o carro? (Sim/Não)`)
        
        if(comprarCarroSimOuNao === "sim" || comprarCarroSimOuNao === "Sim"){
            var parcelaCarro = parseInt(window.prompt(`O carro escolhido foi o ${entrada2DoUsuario} o preço é R$ ${preco} você deseja parcelar esse valor em quantas vezes? (Entrada somente de números)`))
            window.alert(`Parabéns pela compra do ${entrada2DoUsuario}. O valor total vai ser de R$ ${preco} Parcelando em ${parcelaCarro} de R$ ${preco/parcelaCarro.toFixed(2)} `)
        }else if(comprarCarroSimOuNao === "não" || comprarCarroSimOuNao === "nao" || comprarCarroSimOuNao === "Não" ){
            return comprarCarro()
        }
    }else if(marcaDoCarro.indexOf(entrada2DoUsuario) === -1){
        window.alert(`Carro não encontrado ou valor digitado está incorreto.`)
        return comprarCarro()
    }
}

comprarCarro()