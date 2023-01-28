// function declaration

/* function areaQuadrado(lado){
    return lado * lado
}
areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4 */

// function sem parametro

/* function pi(){
    return 3.14
}
var total = 5 * pi //15.7 */

// peso e altura sao parametros
/* 
function imc (peso, altura) {
    const imc = peso / ( altura ** 2)
    return imc 
}

imc (80, 1.80) // 80 e 1.80 sao argumentos
imc (60, 1.70) // 60 e 1.70 sao argumentos

function corFavorita(cor){
    if (cor==='azul'){
        return 'voce gosta do céu'
    }
    if (cor==='verde'){
        return 'voce gosta do mato'
    }
    else{
        return 'voce nao gosta de nada'
    }
} */


function maiorEntreDois(){
    let n1 = parseFloat(prompt('DIGITE O PRIMEIRO NUMERO'))
    let n2 = parseFloat(prompt('DIGITE O SEGUNDO NUMERO'))
    if (n1>n2){
        alert('O maior numero é o ' + n1)
    }
    if (n2>n1){
        alert('O maior numero é o ' + n2)
    }
}

function maiorIdade(){
    let n1 = parseFloat(prompt('DIGITE A SUA IDADE'))
    if (n1>=18){
        alert('Voce é maior de idade')
    }
    if (n1<18){
        alert('Voce é menor de idade')
    }
}

function teste(valor){
    return valor ? "é true" : "é false"

}

