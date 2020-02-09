const crypto = require('crypto');

const SELCT_KEY = "Joan_1225#";


//md5加密
const md5 = (content) => {
    //创建有hash对象
    let md5 = crypto.createHash('md5');

    //digest('hex'):使用编码格式的参数，输出的是一个字符串格式的摘要内容
    return md5.update(content).digest('hex');
};

//加密
const sshPwd = (password) => {
    const str = `${password}&key=${SELCT_KEY}`;
    return md5(str);
};

module.exports = { sshPwd }
