console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(`Salvador`,`São Paulo`,`Rio de Janeiro`)
console.log(listaDeDestinos)


const idadeComprador = 15
const estaAcompanhado = true
var temPassagem = false

if(idadeComprador >= 18 || estaAcompanhado){
    console.log("Pode vender")
    temPassagem = true
    listaDeDestinos.splice(listaDeDestinos.indexOf(`São Paulo`),1)
}
else{
    console.log("Não pode vender")
}

console.log(listaDeDestinos)

console.log("Embarque:")
if((idadeComprador >= 18 || estaAcompanhado) && temPassagem) console.log("Pode embarcar")
else console.log("Não pode embarcar")
