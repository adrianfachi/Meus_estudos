const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["51996105286", "5199028922"],
    saldo: 200,
    efetuaPagamento(valor) {
        if (valor > this.saldo){
            console.log('Saldo insuficiente')
        } else {
            console.log(`Pagamento efetuado, o saldo atual é de ${this.saldo -=valor} reais.`)
        }
    }
  };

  cliente.efetuaPagamento(100)