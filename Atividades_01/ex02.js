/* Crie um programa que calcula o 13º salário de um funcionário.
Requisitos: Entrada de dados e saída de dados na janela e no console.
calculo do 13º salário (salario/12 meses)*meses trabalhados */

window.alert(`Calculo do 13º salário`)
var valorSalario = prompFloat(`Por favor digite seu salário em R$`, 'Por favor, digite um número.\nTente novamente.')
var mesesTrabalhado = prompFloat(`Informe os meses trabalhados`, 'Por favor, digite um número.\nTente novamente.')

function calculaDecimoTerceiro(){
    var receber13Salario = ((valorSalario/12) * mesesTrabalhado) 
    
    //valor a ser descontado do INSS 8%
    var descontoInss = receber13Salario * (8/100)
    
    window.alert(` Salário R$: ${valorSalario} \n Desconto INSS 8% R$ ${descontoInss}  \n Valor Parcela Bruto ${receber13Salario} \n Valor Decimo Terceiro R$ ${receber13Salario - descontoInss}`)

    console.log(`Salário R$: ${valorSalario} \n Desconto INSS 8% R$ ${descontoInss}  \n Valor Parcela Bruto ${receber13Salario} \n Valor Decimo Terceiro R$ ${receber13Salario - descontoInss}`)

}

calculaDecimoTerceiro()

//Verifica se a entrada de dados é do tipo 'Number'. Fonte: https://pt.stackoverflow.com/questions/312947/como-permitir-apenas-n%C3%BAmeros-em-um-prompt-em-javascript#:~:text=Voc%C3%AA%20pode%20criar%20uma%20vers%C3%A3o,prompt(msg))%3B%20if%20(!
function prompFloat(mensagem, tenteNovamente) {
    var msg = mensagem;
    while (true) {
        var ret = parseFloat(prompt(msg));
        if (!isNaN(ret)) return ret;
        msg = tenteNovamente;
    }
}