const { exec, escape } = require('../db/mysql');
const { sshPwd } = require('../ulits/cryp');

const login = (userName, password) => {
    userName = escape(userName);
    password = escape(sshPwd(password));
    const sql = `SELECT username,realname from users where username=${userName} and password=${password};`;
    return exec(sql, rows => rows[0] || {});
}

module.exports = { login }