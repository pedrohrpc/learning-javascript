
export class Conta{
    agencia
    #saldo = 0

    sacar(valor){
        if(this.#saldo>=valor) this.#saldo-=valor
        else console.log("Saldo indisponível")
    }

    depositar(valor){
        if (valor>=0) this.#saldo += valor
        else console.log("Valor inválido")
    }

    get_saldo(){
        return this.#saldo
    }

    constructor(agencia, saldo){
        this.agencia = agencia
        this.#saldo = saldo
    }
}