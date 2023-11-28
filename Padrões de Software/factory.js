/* Considere que:
- Os produtos devem implementar uma interface comum;
- O cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- Todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- Há dois tipos de computadores: cpu e server; - RAM e HD devem estar em GB;
- CPU deve estar em GHZ;
- Através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método toString() for aplicado a um computador, ele deve imprimir seus atributos. */

class Computer {
    getRAM() {}
    getHDD() {}
    getCPU() {}
    getType() {}
    toString() {}
}

class CPU extends Computer {
    getRAM() {
        return 'RAM: 12GB';
    }
    getHDD() {
        return 'HDD: 256GB';
    }
    getCPU() {
        return 'CPU: 8.00GHz';
    }
    getType() {
        return 'CPU';
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU();
    }
}

class Server extends Computer {
    getRAM() {
        return 'RAM: 18GB';
    }
    getHDD() {
        return 'HDD: 512GB';
    }
    getCPU() {
        return 'CPU: 4.0GHz';
    }
    getType() {
        return 'Server';
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU();
    }
}

class ComputerFactory {
    createComputer(type) {
        switch (type) {
            case 'CPU':
                const cpu = new CPU();
                console.log(cpu.toString());
                break;
            case 'Server':
                const server = new Server();
                console.log(server.toString());
                break;
            default:
                console.log('Tipo inválido');
        }
    }
}

const computerFactory = new ComputerFactory();

computerFactory.createComputer('CPU');
computerFactory.createComputer('Server');
computerFactory.createComputer('Netbook'); 
