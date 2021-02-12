require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING, PORT } = process.env;

const app = express();

app.use(express.json());

const studentCtrl = require('./controllers/studentCtrl')
//endpoints
app.get('/api/students', studentCtrl.getAllStudents)

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(PORT, () => console.log(`bingpot on port ${PORT}`))
})
