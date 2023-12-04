const DB = require('../../db/')
module.exports = async (ctx) => {
    try {
        let data = await DB.query('select * from preRegisterUser')
        ctx.body = { message: '查询成功', data: data }
    } catch (err) {
        ctx.status = 500
        ctx.body = { message: 'query failed' }
    }


}