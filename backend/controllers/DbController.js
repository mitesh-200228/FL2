const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'oxford098allen@?DAP',
    database: 'rahul'
});

class DbController {
    insertData(req, res) {
        const id = uuidv4();
        const date = new Date().toISOString().slice(0, 10);
        const {grade} = req.body;
        const { entity, department, designation, hiringmanager, hrmanager, recruiter } = req.body.data;
        if(!grade || !entity || !department || !designation || !hiringmanager || !hrmanager || !recruiter){
            return res.status(400).json({message:'Sent all datas'});
        }
        const sqlInsert = `INSERT INTO applied_people (id,date,grade,entity,department,designation,hiringmanager,hrmanager,recruiter) VALUES ('${id}','${date}','${grade}','${entity}','${department}','${designation}','${hiringmanager}','${hrmanager}','${recruiter}');`;
        db.query(sqlInsert, (err, result) => {
            if (err) {
                return res.status(500).json({message:'Internal Server Error'});
            }
            return res.status(200).json({message:'Saved'});
        });
    }
}

module.exports = new DbController();