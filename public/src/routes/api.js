const express = require('express');
const router = express.Router();
const dashboardController  = require("../controllers/dashboardController");

router.get('/servicos', dashboardController.getServicos);
router.get('/resumo', dashboardController.getResumo);

module.exports = router;