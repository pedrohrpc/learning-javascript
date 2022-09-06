import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"

const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 131516171819
const contaCorrente1 = new Conta(1231,100)

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 131516171820
const contaCorrente2 = new Conta()
contaCorrente2.agencia = 1231

contaCorrente2.depositar(100)
contaCorrente2.sacar(150)
contaCorrente2.sacar(50)
contaCorrente2.depositar(500)

console.log(cliente1)
console.log(contaCorrente1)
console.log(contaCorrente1.get_saldo())

