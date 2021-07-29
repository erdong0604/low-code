const { mongoose } = require('./../../db');
const { Schema } = mongoose;
const BaseModel = require('./base_model');
const componentTypeSchema = new Schema(
  {
    name: String,
    component:Array
  }
  , { collection: 'component_type', versionKey: false}
);

const componentTypeModel = mongoose.model('componentType',componentTypeSchema);

module.exports = new BaseModel(componentTypeModel);