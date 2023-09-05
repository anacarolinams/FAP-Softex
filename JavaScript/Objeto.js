// Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.

// Objeto Material (1):
const carro = {
    marca: "Honda",
    modelo: "Fit",
    anoFabricacao: 2008,

ligar: function (){
    console.log("O carrro foi ligado!");
},
frear: function (){
console.log("O carro está parando...");
},
desligar: function (){
    console.log("O carro está desligado :)")
}
}

carro.ligar();  
carro.frear();  
carro.desligar();

//-----------------------------------------------------------------------------------------------------------------------//

// Objeto Material (2):
const livro = {
    titulo: "O cão alegre",
    editora: "Intríseca",
    autor: "Ko Moon Young",
    numPaginas: 24,

abrir: function (){
    console.log("O livro foi aberto!")
},
ler: function () {
    console.log("O livro está sendo lido :)")
},
fechar: function () {
    console.log("A leitura terminou.")
}
}

livro.abrir();  
livro.ler();    
livro.fechar(); 

//-----------------------------------------------------------------------------------------------------------------------//

// Objeto Abstrato (1):
const email = {
    endereco: "anac.medsouza@gmail.com",
    mensagensLidas: 250,
    mensagensNãoLidas: 0,

receberMensagens: function () {
    this.mensagensNãoLidas++;
},
enviarMensagens: function (pessoa, mensagem) {
    console.log(`Sua mensagem foi enviada para ${pessoa}: ${mensagem}.`)
},
caixaDeEntrada: function () {
    console.log(`Este endereço de e-mail ${this.endereco}.`);
    console.log(`Mensagens lidas: ${this.mensagensLidas}.`);
    console.log(`Mensagens não lidas: ${this.mensagensNãoLidas}.`);
}
}

email.receberMensagens();  
email.enviarMensagens("Thayna", "Oi sua lindinha cheirosa, como você está? ♥");  
email.caixaDeEntrada();  

//-----------------------------------------------------------------------------------------------------------------------//

// Objeto Abstrato (2):
const tarefas = {
    listaDeTarefas: 5,
    tarefasFeitas: 2,
    tarefasACumprir: 3,

adicionarTarefa: function () {
    this.listaDeTarefas++;
    this.tarefasACumprir++;
    console.log("Mais uma tarefa foi adicionada na sua lista!");
},
concluirTarefa: function () {
    if (this.tarefasACumprir > 0) {
      this.tarefasFeitas++;
      this.tarefasACumprir--;
      console.log("Você realizou essa tarefa com sucesso!");
    } else {
      console.log("Você concluiu todas as tarefas :)");
    }
  },
 listarTarefas: function () {
    console.log(`Suas tarefas de hoje: ${this.listaDeTarefas}`);
    console.log(`Tarefas cumpridas: ${this.tarefasFeitas}`);
    console.log(`Tarefas a cumprir: ${this.tarefasACumprir}`);
  }
}

tarefas.adicionarTarefa(); 
tarefas.concluirTarefa();   
tarefas.listarTarefas();