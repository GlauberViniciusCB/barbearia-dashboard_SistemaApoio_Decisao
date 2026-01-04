const db = require('../utils/database')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Servidor Da Barbearia Funcionando!");
});

app.get('/api/servicos',(req, res) => {
    const servicos = [
        {nome: 'Corte', quantidade: 18982},
        {nome: 'Barbaterapia', quantidade: 3990}
    ];
    res.json(servicos);
});

const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})