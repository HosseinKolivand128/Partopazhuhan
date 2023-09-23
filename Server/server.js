// let express = require('express');
// let app = express();
// app.get('/', function (req, res) {
//     let sql = require('mssql');
//     // config for your database
//     let config = {
//         // user: 'dbuser',
//         // password: 's3kreee7',
//         server: 'MSSQLSERVER1',
//         database: 'ChainStore',
//         options: {
//             trustedConnection: true
//         }
//     };
//     // connect to your database
//     sql.connect((config).then(()=>{
//         console.log("Connected");
//     }).catch(err=>{
//         console.log(err);
//     })
    // )
    // sql.connect(config, function (err) {
    //     if (err) console.log(err);
    //     // create Request object
    //     let request = new sql.Request();
    //     // query to the database and get the records
    //     request.query('SELECT 1 + 1 AS solution', function (err, recordset) {
    //         if (err) console.log(err)
    //         // send records as a response
    //         res.send(recordset);
    //     });
    // });
// });
// let server = app.listen(5000, function () {
//     console.log('Server is running..');
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const sql = require('mssql');

const config = {

            server: 'MSSQLSERVER1',
            database: 'ChainStore',
            options: {
                trustedConnection: true
            }

};

sql.connect(config).then(() => {
    console.log('Connected to the database.');
}).catch(err => {
    console.error(err);
});

sql.query`SELECT * FROM table`.then(result => {
    console.log(result);
}).catch(err => {
    console.error(err);
});

