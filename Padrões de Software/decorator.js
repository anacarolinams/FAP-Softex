class Sanduiche {
    constructor() {
        this.descricao = "Sanduiche";
    }

    custo() {
        return 0;
    }

    descricaoDoSanduiche() {
        return this.descricao;
    }
}

class FrangoAssado extends Sanduiche {
    constructor() {
        super();
        this.descricao = "Sanduiche de Frango Assado";
    }

    custo() {
        return 4.5;
    }
}

class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    custo() {
        return this.sanduiche.custo() + 0.99;
    }

    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", Pepperoni";
    }
}

class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    custo() {
        return this.sanduiche.custo() + 2.0;
    }

    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", Queijo Mussarela Ralado";
    }
}

const meuSanduiche = new FrangoAssado();

const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(meuSanduiche));

console.log(`${sanduicheDecorado.descricaoDoSanduiche()} custa $${sanduicheDecorado.custo().toFixed(2)}.`);