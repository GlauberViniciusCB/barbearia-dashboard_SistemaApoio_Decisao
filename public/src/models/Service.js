class Service{
    static getAll(callback){
        const sql = 'SELECT * FROM services';
    }

    static getByMonth(mes, callback){
        const sql = 'SELECT * FROM services WHERE mes = ?';
    }
}

module.exports = Service;