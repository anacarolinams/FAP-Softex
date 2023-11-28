class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  
    represent() {
      console.log(`Veículo: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}`);
    }
  }
  
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas, escala) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
      this.escala = escala;
    }
  
    represent() {
      console.log(`Carro Hot Wheels: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Portas - ${this.numeroPortas}, Escala - ${this.escala}`);
    }
  }
  
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    represent() {
      console.log(`Moto: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Cilindradas - ${this.cilindradas}`);
    }
  }
  
  class Aplicacao {
    static criarVeiculos() {
      const veiculos = [];
  
      const fiat1 = new Carro('Fiat Strada 1.3', 'Fiat', 'Preto', 4, 1332, '1:64');
      const fiat2 = new Carro('Fiat Toro 1.3', 'Fiat', 'Azul', 4, 1450, '1:64');
      const fiat3 = new Carro('Fiat Argo 1.0', 'Fiat', 'Cinza', 4, 333, '1:64');
  
      const harley1 = new Moto('Nighster Special', 'Harley Davidson', 'Azul', 2, 975, '1:64');
      const harley2 = new Moto('Sportster S', 'Harley Davidson', 'Cinza', 2, 1.252, '1:64');
      const harley3 = new Moto('Heritage Classic', 'Harley Davidson', 'Vermelho', 2, 1.868, '1:64');
  
      veiculos.push(fiat1, fiat2, fiat3, harley1, harley2, harley3);
      return veiculos;
    }
  
    static clonarVeiculos(veiculos) {
      const clones = [];
      for (const veiculo of veiculos) {
        const clone = veiculo.clone();
        clones.push(clone);
      }
      return clones;
    }
  
    static representarClones(veiculos) {
      for (const veiculo of veiculos) {
        veiculo.represent();
      }
    }
  }
  
  const veiculos = Aplicacao.criarVeiculos();
  const clones = Aplicacao.clonarVeiculos(veiculos);
  
  console.log('Veículos clonados: ');
  Aplicacao.representarClones(clones);