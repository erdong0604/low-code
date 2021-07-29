const mongoose = require('mongoose');
const Config = require('./../config');

/**
 * 连接
 */
mongoose.connect(Config.mongoose.url,Config.mongoose.config);

/**
 * 链接成功
 */
mongoose.connection.on('connected',() => {
  console.log('Mongoose connection open to ' + Config.mongoose.url);  
})
 /**
 * 链接异常
 */
mongoose.connection.on('error',() => {
  console.log('Mongoose connection error ' + Config.mongoose.url);  
})
  /**
 * 链接失败
 */
mongoose.connection.on('error',() => {
  console.log('Mongoose connection error ' + Config.mongoose.url);  
})

/**
 * 链接断开
 */

mongoose.connection.on('disconnected',() => {
  console.log('Mongoose connection error ' + Config.mongoose.url);
})

/**
 * 关闭mongo链接
 */

const close = () => {
  mongoose.close();
}
module.exports = {
  mongoose,
  close
}