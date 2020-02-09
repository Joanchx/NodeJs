const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/db');

const con = mysql.createConnection(MYSQL_CONF);
//开始连接
con.connect();

//执行sql语句
const exec = (sql) => {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            //err
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

module.exports = {
    exec,
    //mysql转译(防止sql攻击)
    escape: mysql.escape
}