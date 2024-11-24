const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',         // MySQL 서버 주소
    user: 'root',      // MySQL 사용자 이름
    password: '1124@',  // MySQL 비밀번호
    database: 'artdb',  // 사용할 데이터베이스 이름
});

module.exports = pool.promise();
