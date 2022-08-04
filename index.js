// IMPORTAÇOES
import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

// DECLARAÇÃO DO CLIENTE1
const cliente1 = new Cliente("Ramos", 46125341825);

// DECLARAÇÃO DO CLIENTE2
const cliente2 = new Cliente("Alice", 35412698575);

// DECLARACAO DA CONTA
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
const contaCorrenteCliente2 = new ContaCorrente(102, cliente2);

// DEPOSITO/TRANSFERIR CLIENTE1
contaCorrenteCliente1.deposito(500);
contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log(contaCorrenteCliente2.saldo);
// contaCorrenteCliente2.saldo = 30000; / Mostra um erro, pois é privado.
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);