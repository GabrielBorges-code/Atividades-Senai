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
        case "chevrolet":
            var entrada2Usuario = window.prompt(`Temos as opções: ${chevrolet}`)
            escritaAutomatica(chevrolet, entrada2Usuario)
            break;
        case "fiat":
            var entrada2Usuario = window.prompt(`Temos as opções: ${fiat}`)
            escritaAutomatica(fiat, entrada2Usuario)
            break;
        case "volkswagen":
            var entrada2Usuario = window.prompt(`Temos as opções: ${volkswagen}`)
            escritaAutomatica(volkswagen, entrada2Usuario)
            break;
        case "renault":
            var entrada2Usuario = window.prompt(`Temos as opções: ${renault}`)
            escritaAutomatica(renault, entrada2Usuario)
            break;
        default:
            window.alert(`Marca não encontrada ou valor digitado está incorreto. \nPor favor digite a marca desejada (tudo em minúsculo)`)
            return comprarCarro()
    }
}

function precosDosCarros() {
    var precoDoCarro = (Math.random() * (100000 - 40000) + 40000)
    return precoDoCarro.toFixed(2)
}

function escritaAutomatica(marcaDoCarro, Entrada2DoUsuario) {
    
    // Entrada2DoUsuario = window.prompt(`Temos as opções: ${marcaDoCarro}`)
    if(marcaDoCarro.indexOf(Entrada2DoUsuario) > -1){
        var preco = precosDosCarros()
        window.alert(`O carro escolhido foi o ${Entrada2DoUsuario} o valor dele é R$ ${preco}`)
    }else if(marcaDoCarro.indexOf(Entrada2DoUsuario) === -1){
        window.alert(`Carro não encontrado ou valor digitado está incorreto.`)
        return comprarCarro()
    }
}

// precosDosCarros()
comprarCarro()