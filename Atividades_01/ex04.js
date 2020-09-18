/* Crie um programa que calcula o IMC de alguém. Requisitos: Entrada de dados e saída de dados na tela e no console. */

var nome = prompt(`Qual é o seu nome?`)
var peso = parseFloat(prompt(`Qual é o seu peso? [Apenas número]`))
var altura = parseFloat(prompt(`Qual é sua altura em Metros? [Apenas número]`))

function calcularIMC(){
    var imc = peso/(altura * 2)

    window.alert(`Bem vindo, ${nome} \n seu IMC é ${imc.toFixed(2)}`)

    estadoNutricional(imc)
}

calcularIMC()

function estadoNutricional(valorImc){
    if(valorImc < 16){
        window.alert(`Você está com magreza grave`)
    }else if(valorImc <= 17){
        window.alert(`Você está com magreza moderada`)
    }else if(valorImc <= 18.5){
        window.alert(`Você está com magreza leve`)
    }else if(valorImc <= 25){
        window.alert(`Você está saudável`)
    }else if (valorImc <= 30){
        window.alert(`Você está com sobrepeso`)
    }else if (valorImc <= 35){
        window.alert(`Você está com Obesidade Grau I`)
    }else if (valorImc <= 35){
        window.alert(`Você está com Obesidade Grau II (severa)`)
    }else {
        window.alert(`Você está com Obesidade Grau III (móbida)`)
    }
}