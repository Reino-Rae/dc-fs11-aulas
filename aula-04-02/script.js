//document.body.innerText = "Bom dia"

const saudacao = document.getElementById("saudacao")

const horaMomento = new Date().getHours()

var usuario = {
    nome:"Reino"
}
if(horaMomento < 12){
    saudacao.innerText = "Bom dia " + usuario.nome
} else if(horaMomento > 17) {
    saudacao.innerText = "Boa noite " + usuario.nome
} else {
    saudacao.innerText = "Boa tarde " + usuario.nome
}

const lista = ["Ivan", "Ari", "Rangel","Amar"]

/* for(let i=0;i<lista.length;i++){
    console.log(lista[i])
} */

let i = 0
while(i<10){
    console.log(i)
    i = i + 2
}

/* let resposta
do{
    resposta = confirm("Vai me passar o pix")
}while(!resposta) */

function concatenaUM(texto, index, array){
alert(index+1 + "-" + texto + " Lista " + array)
}
lista.forEach(concatenaUM)