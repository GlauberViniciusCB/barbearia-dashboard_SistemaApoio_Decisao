const Service = require('../models/Service');
const db = require('../../../utils/database');

exports.getServicos = (req, res) => {
    Service.getAll(db, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(results);
        }
    });
};

exports.getResumo = (req, res) => {
    const sql = `
        SELECT 
            servico,
            SUM(quantidade) as total,
            SUM(faturamento) as faturamento_total
        FROM services
        GROUP BY servico
        ORDER BY total DESC
    `;
    
    db.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(results);
        }
    });
};