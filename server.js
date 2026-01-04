const express = require('express');
const cors = require('cors');
const apiRoutes = require('../barbearia-dashboard/public/src/routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Servir arquivos estáticos

// Usar rotas da API
app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando: http://localhost:${PORT}`);
});