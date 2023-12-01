const Galinha = {
    cacarejar: function () {
        console.log("Cócócócó");
    },
    colocarOvo: function () {
        console.log("Um novo ovo foi colocado!");
    }
};

const GalinhaComum = Object.create(Galinha);

const Pato = {
    grasnar: function () {
        console.log("Quack, Quack!");
    },
    voar: function () {
        console.log("O pato alçou vôo!");
    }
};

const PatoComum = Object.create(Pato);

function adaptadorPato(pato) {
    return {
        cacarejar: function () {
            pato.grasnar();
        },
        botarOvo: function () {
            console.log("Desculpe, o pato não bota ovos.");
        }
    };
}

function adaptadorPatoDemo() {
    console.log("Galinha:");
    GalinhaComum.cacarejar();
    GalinhaComum.colocarOvo(); 

    console.log("\nPato:");
    PatoComum.grasnar();
    PatoComum.voar();

    const adaptador = adaptadorPato(PatoComum);
    console.log("\nAdaptador Pato (Pato como se fosse uma galinha):");
    adaptador.cacarejar();
    adaptador.botarOvo();
}

adaptadorPatoDemo();