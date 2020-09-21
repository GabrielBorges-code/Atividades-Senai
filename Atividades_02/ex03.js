// 3 👉Crie um programa que apresenta um cardápio ao cliente
// de pizzas diversas, com entrada de dados.
// Dica(Use estruturas de decisão e objetos ou vetores...)

let entradaUsuario = parseInt(window.prompt(`Bem vindo a Pizzaria do Gabriel \n Por favor digita uma opção: \n 1 - Pizza Tradicional, \n 2 - Pizza Doce, \n 3 - Pizza Premiun`))

function cardapio(entrada){
    var pizzaTradicionais = ["Calabresa", "Baiana", "Frango Catupiry", "Marguerita", "Napolitana"]
    var pizzaDoce = ["Banana com Canela", "Chocolate", "Sorverte", "Sensação", "Doce de leite"]
    var pizzaPremiun = ["Búfala La Bianca","Corn & Bacon","De Luxe","Pepperrock"]

    switch (entrada) {
        case 1:
            var entradaTradicional = window.prompt(`Temos esses sabores de pizzas Tradicionais: ${pizzaTradicionais} digite o sabor`)

            if(pizzaTradicionais.indexOf(entradaTradicional) > -1){
                window.alert(`você selecionou a pizza de ${entradaTradicional}. Bom apetite`)

            }else if (pizzaTradicionais.indexOf(entradaTradicional) === -1){
                window.alert(`o sabor digitado não existe no nosso cardapio`)

            }
            break;
        case 2: 
            var entradaDoce = window.prompt(`Temos esses sabores de pizzas Tradicionais: ${pizzaDoce} digite o sabor`)

            if(pizzaDoce.indexOf(entradaDoce) > -1){
                window.alert(`você selecionou a pizza de ${entradaDoce}. Bom apetite`)

            }else if (pizzaDoce.indexOf(entradaDoce) === -1){
                window.alert(`o sabor digitado não existe no nosso cardapio`)

            }
            break;
        case 3:
            var entradaEspecial = window.prompt(`Temos esses sabores de pizzas Tradicionais: ${pizzaPremiun} digite o sabor`)

            if(pizzaPremiun.indexOf(entradaEspecial) > -1){
                window.alert(`você selecionou a pizza de ${entradaEspecial}. Bom apetite`)

            }else if (pizzaPremiun.indexOf(entradaEspecial) === -1){
                window.alert(`o sabor digitado não existe no nosso cardapio`)

            }
            break;
        default:
            window.alert("Por favor digitar um valor válido [1, 2, 3]")
            break;
    }
}

cardapio(entradaUsuario)