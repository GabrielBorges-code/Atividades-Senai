/* Crie um programa que calcula um imposto de 0.3% sob o valor de uma compra online.
Requisitos: Entrada de dados e saída de dados na tela e no console, use uma função para calcular o imposto.*/

const porcentagemDoImposto = 3
var valorDaCompra = parseFloat(prompt(`Digite o valor da compra R$`))

function entradaDeValores() {
    var valorImposto = calcularImposto(valorDaCompra)

    window.alert(` O valor da compra sem imposto R$ ${valorDaCompra} \n 3% de imposto sobre o valor compra online R$ ${valorImposto} \n total R$ ${valorDaCompra + valorImposto}`)

/*     console.log(` O valor da compra é de R$ ${valorDaCompra} \n 3% de imposto sobre compras online R$ \n total R$ ${valorDaCompra} `)
 */    
    console.log(`${calcularImposto(valorDaCompra)} e ${valorImposto}`)
}

entradaDeValores()

function calcularImposto(preçoAPagar){
    var imposto = preçoAPagar * (porcentagemDoImposto/100)

    return imposto
}