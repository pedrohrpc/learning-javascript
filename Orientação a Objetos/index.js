
class Cliente{
    nome
    cpf
}

class Conta{
    agencia
    saldo

    sacar(valor){
        if(this.saldo>=valor) this.saldo-=valor
        else console.log("Saldo indisponível")
    }

    Conta(agencia, saldo){
        this.agencia = agencia
        this.saldo = saldo
    }
}


const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpg = 131516171819
const contaCorrente1 = new Conta(1231,100)

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 131516171820
const contaCorrente2 = new Conta()
contaCorrente2.agencia = 1231
contaCorrente2.saldo = 150



console.log(cliente1)
console.log(contaCorrente1)