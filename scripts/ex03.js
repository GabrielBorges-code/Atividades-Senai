/* Crie um programa que calcula um imposto de 0.3% sob o valor de uma compra online.
Requisitos: Entrada de dados e saída de dados na tela e no console, use uma função para calcular o imposto.*/

function calcularImposto() {
    var valorDaCompra = parseFloat(prompt(`Digite o valor da compra R$`))
    var imposto = valorDaCompra * (3/100)

    window.alert(` O valor da compra é de R$ ${valorDaCompra} \n 3% de imposto sobre compras online R$ ${imposto} \n total R$ ${valorDaCompra + imposto} `)

    console.log(` O valor da compra é de R$ ${valorDaCompra} \n 3% de imposto sobre compras online R$ ${imposto} \n total R$ ${valorDaCompra + imposto} `)
    
}

calcularImposto()