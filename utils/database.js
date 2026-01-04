const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123456', 
    database: 'barbearia_db'
});

connection.connect((error)=>{
    if (error) {
        console.error('Erro ao conectar:', error);
    }else{
        console.log('Conectado ao MySQL !')
    }
});

module.exports = connection;
