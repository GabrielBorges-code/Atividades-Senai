/* Crie um programa em javascrip que calcula a média de um estudante a partir da nota de 3 provas.
Requisitos: Entrada de dados e saída de dados na janela e no console. */
window.alert('Vamos calcular a sua média. Por favor Digite a nota das suas 3 provas')

var nota1 = prompFloat ('Digite a primeira nota', 'Por favor, digite um número.\nTente novamente.')
var nota2 = prompFloat ('Digite a segunda nota', 'Por favor, digite um número.\nTente novamente.')
var nota3 = prompFloat ('Digite a terceira nota', 'Por favor, digite um número.\nTente novamente.')

function mediaNotasPopUp(){
    var media = (nota1 + nota2 + nota3)/3

    window.alert(`Sua média é ${media.toFixed(2)}`)

    situacao(media)
}

//Verifica se a entrada do dado é do tipo 'Number'. Peguei esse trecho de código no stack over flow
function prompFloat(mensagem, tenteNovamente) {
    var msg = mensagem;
    while (true) {
        var ret = parseFloat(prompt(msg));
        if (!isNaN(ret)) return ret;
        msg = tenteNovamente;
    }
}

mediaNotasPopUp()

function mediaNotasConsole(){
    console.log(` nota 1: ${nota1},\n nota 2: ${nota2},\n nota 3: ${nota3}`)
    
    var media = (nota1 + nota2 + nota3)/3

    console.log(`Sua média é ${media.toFixed(2)}`)

}
mediaNotasConsole()

function situacao(notas){
    if(notas >= 7){
        window.alert(`Você foi aprovado`)
        console.log(`Você foi aprovado`)
    }else if(notas < 7 && notas > 5){
        window.alert(`Você está de recuperação`)
        console.log(`Você está de recuperação`)
    }else{
        window.alert(`Você está reprovado`)
        console.log(`Você está reprovado`)
    }
}
