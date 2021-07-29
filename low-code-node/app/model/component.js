const { mongoose } = require('./../../db');
const { Schema } = mongoose;
const BaseModel = require('./base_model');
const componentSchema = new Schema(
  {
    name: String,
    desc:String,
    type:String,
    fileUrl:String,
    thumbnail:String,
    comName:String
  }
  , { collection: 'components', versionKey: false}
);

const componentModel = mongoose.model('component',componentSchema);

module.exports = new BaseModel(componentModel);