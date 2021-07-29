// 文档地址 http://www.mongoosejs.net/docs/api.html#Model
class BaseModel {
  constructor(model){
    this.Model = model;
  }
   /**
   * 使用 Model 的 静态方法 save() 添加 doc
   *
   * @param data doc 数据
   * @returns {Promise}
   */
  save(data){ 
    return new Promise((resolve, reject) =>{
      const entity = new this.Model(data); 
      entity.save((err, res) =>{
        if(err){
          reject(err);
          return;
        }
        resolve(res);
      })
    })
  }
  /**
   * 更新doc
   * @param {Object} conditions 查找条件
   * @param {Object} updater  更新操作
   */
  update(conditions = {},updater){
    return new Promise((resolve, reject) =>{
      this.Model.updateMany(conditions,updater,(err, res) =>{
        if(err) {
          reject(err);
          return;
        };
        resolve(res);
      })
    })
  }

  /**
   * 根据ID更新doc
   * @param {Object} id 查找id
   * @param {Object} updater  更新操作
   */
  findByIdAndUpdate(id,updater){
    return new Promise((resolve, reject) =>{
      this.Model.findByIdAndUpdate(id,updater,(err, res) =>{
        if(err) {
          reject(err);
          return;
        };
        resolve(res);
      })
    })
  }

  /**
   * 删除 doc
   * 
   *@param {Object} conditions 删除条件
   *@description 从集合中删除匹配的第一个文档,行为类似remove()，但无论single选择什么，最多删除一个文档
   */

  deleteOne(conditions = {}){
    return new Promise((resolve, reject) =>{
      this.Model.deleteOne(conditions,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        resolve(res)
      })
    })
  }

  /**
   * 删除 docs
   * 
   *@param {Object} conditions 删除条件
   *@description 从集合中删除所有匹配的文档,行为类似remove()，但无论single选择什么，都删除所有匹配的文档
   */
  delete(conditions = {}){
    return new Promise((resolve, reject) =>{
      this.Model.deleteMany(conditions,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        resolve(res)
      })
    })
  }
  /**
   * 查找 docs(所有)
   * @param {Object} conditions  查询条件
   * @param {String} projection 选择返回的地段 name phone 空格分隔，默认为null
   * @param {Object} options 返回条件 (https://mongoosejs.com/docs/api.html#query_Query-setOptions)
  */
  find(conditions = {},projection = null,options = {}){
    return new Promise((resolve, reject) =>{
      this.Model.find(conditions,projection,options,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        resolve(res)
      })
    })
  }
  /**
   * 查找 doc(单个)
   * @param {Object} conditions  查询条件
   * @param {String} projection 选择返回的地段 name phone 空格分隔，默认为null
   * @param {Object} options 返回条件 (https://mongoosejs.com/docs/api.html#query_Query-setOptions)
  */
  findOne(conditions = {},projection = null,options = {lean:true}){
    
    return new Promise((resolve, reject) =>{
      this.Model.findOne(conditions,projection,options,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        
        resolve(res)
      })
    })
  }
  /**
   * 根据id 查找 doc
   * @param {String} id  查询id
   * @param {String} projection 选择返回的字段 name phone 空格分隔，默认为null
   * @param {Object} options 返回条件 (https://mongoosejs.com/docs/api.html#query_Query-setOptions)
  */
  findById(id,projection = null,options = {}){
   
    return new Promise((resolve, reject) =>{
      this.Model.findById(id,projection,options,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        resolve(res)
      })
    })
  }

  /**
   *  查找 doc 并且分页
   * @param {String} conditions  查询条件
   * @param {String} projection 选择返回的地段 name phone 空格分隔，默认为null
   * @param {Object} options 返回条件 (https://mongoosejs.com/docs/api.html#query_Query-setOptions)
  */
 findByPage(conditions = {},projection = null,options = {}){
  
  return new Promise(async (resolve, reject) =>{
    const count = await this.count(conditions);
    this.Model.find(conditions,projection,options,(err,res) => {
      if(err) {
        reject(err);
        return;
      };
      resolve({
        count,
        data:res
      })
    })
  })
}

  /**
   * @param {Object} conditions 查询条件
   * 
   */
  count(conditions = {}){
    return new Promise((resolve, reject) =>{
      this.Model.countDocuments(conditions,(err,res) => {
        if(err) {
          reject(err);
          return;
        };
        resolve(res)
      })
    })
  }

}

module.exports = BaseModel;