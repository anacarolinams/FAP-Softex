class EditorObserver {
    update(event, data) {}
}

class TextEditor {
    constructor() {
        this.lines = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(event, data) {
        for (const observer of this.observers) {
            observer.update(event, data);
        }
    }

    insertLine(lineNumber, text) {
        this.lines.splice(lineNumber, 0, text);
        this.notify('insert', {
            lineNumber,
            text
        });
    }

    removeLine(lineNumber) {
        if (lineNumber >= 0 && lineNumber < this.lines.length) {
            const removedLine = this.lines.splice(lineNumber, 1);
            this.notify('remove', {
                lineNumber,
                text: removedLine[0]
            });
        }
    }

    startEditing() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log('Comece a editar o texto. Digite EOF para salvar e sair.');

        rl.on('line', (input) => {
            if (input.trim().toLowerCase() === 'eof') {
                this.saveToFile();
                rl.close();
            } else {
                this.insertLine(this.lines.length, input);
            }
        });
    }

    saveToFile() {
        console.log('Salvando arquivo...');
        console.log('Conteúdo do arquivo:');
        console.log(this.lines.join('\n'));
        this.notify('save', this.lines.join('\n'));
    }
}

const textEditor = new TextEditor();

const observer = new EditorObserver();
textEditor.addObserver(observer);

textEditor.startEditing();