const port = 8889;
const ip = require('ip');

module.exports =   {
  mongoose: {
  // username 数据库用户名
  // password 数据库密码
  // localhost 数据库ip
  // dbname 数据库名称
    url:'mongodb://admin:123456@127.0.0.1:27017/low-code?authSource=admin',
    config:{
      useNewUrlParser: true,
      useFindAndModify:false,
      useCreateIndex:true,
      useUnifiedTopology: true
    }
  }, // 数据库地址
  // 是否启动token校验
  corsConfig:{
    origin: function(ctx) {
      return ctx.header.origin;
    },
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept','openId','bookId'],
  },
  staticFilePath:'/resources',
  ipAddress:ip.address(),
  port,
  routePrefix:'/lowCode'
}



