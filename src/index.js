const express = require('express');
const app = express();

const rotas = require('./routes')
const port = 3000;

app.use(express.json());
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}.`)
})
