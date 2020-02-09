//环境参数
const env = process.env.NODE_ENV;

//连接数据库
let MYSQL_CONF;

//开发环境
if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'Joan1225',
        port: '3306',
        //数据库名称
        database: 'myblog'
    }
}

//生产环境...

module.exports = {
    MYSQL_CONF
}