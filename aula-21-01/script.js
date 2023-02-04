    //QUESTÃO 0

/*     var total = 10 + 5 * 2 / 2 + 20
    console.log(total) */

    //QUESTÃO 1

/*     var frase = "Isso é uma frase"
    var numero = 10

    resultado = frase / numero
    console.log(resultado)
    resultado2 = frase * numero
    console.log(resultado2) */

    //QUESTÃO 2

/*     var n1 = "90"
    var n2 = 10

    var r1 = parseInt(n1) + n2
    console.log(r1)
 */
    //QUESTÃO 3 

/*     var incremento = 10
    console.log(++incremento) */

    //QUESTÃO 4

/*     var numero = '80'
    var unidade = 'kg'
    var peso = numero + unidade

    console.log(peso)

    var pesoPorDois = parseInt(numero)/2
    pesoPorDois = pesoPorDois+unidade
    console.log(pesoPorDois) */

    //QUESTÃO 5

/*     var idade = prompt("DIGITA A IDADE AE COLEGA")
    if(idade>=18){
        alert("MAIOR DE IDADE")
    }
    else{
        alert("MENOR DE IDADE")
    } */

    //QUESTÃO 6

/*     var nota1 = parseInt(prompt("Digite a sua primeira nota"))
    var nota2 = parseInt(prompt("Digite sua segunda nota"))
    var media = (nota1 + nota2) / 2
    alert("Sua media foi de " + media)
    if(media>7){
        alert("Você foi aprovado")
    }
    else if(media==7){
        alert("Você passou na media")
    }
    else{
        alert("Você foi reprovado")
    } */

    //QUESTÃO 7

    var peso = parseFloat(prompt("Qual o seu peso em Kg"))
    var altura = parseFloat(prompt("Qual a sua altura em metros"))
    var imc = peso/(altura**2)
    alert("seu imc é " + imc.toFixed(1))
    if(imc < 18.5){
        alert("Voce esta em estado de Magreza")
    }
    if(imc > 18.5 && imc < 24.9){
        alert("Voce esta em estado de Normal")
    }
    if(imc > 25 && imc < 29.9){
        alert("Voce esta em estado de Sobrepeso")
    }
    if(imc > 30 && imc < 39.9){
        alert("Voce esta em estado de Obesidade")
    }
    if(imc > 40){
        alert("Voce esta em estado de Obesidade Grave")
    }