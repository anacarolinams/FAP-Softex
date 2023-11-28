class SistemaSeguranca {
    constructor() {
        if (SistemaSeguranca.instancia) {
            return SistemaSeguranca.instancia;
        }
        this.senhaBaseSecreta = "acesso271";
        SistemaSeguranca.instancia = this;
    }

    acessarBaseSecreta(senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Senha correta, acesso concedido com sucesso!");
        } else {
            console.log("Acesso negado! Tente novamente.");
        }
    }
}

SistemaSeguranca.instancia = null;

const sistemaSeguranca = new SistemaSeguranca();

sistemaSeguranca.acessarBaseSecreta("acesso271"); 
sistemaSeguranca.acessarBaseSecreta("acesso371"); 