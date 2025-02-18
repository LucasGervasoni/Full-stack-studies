import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'libertadores@',
    database : 'leads_bd'
});

export default pool;