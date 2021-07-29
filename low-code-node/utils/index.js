const mongoose = require('mongoose');
module.exports = {
  stringToObjectId(id){
    return mongoose.Types.ObjectId(id);
  },
  objectIdToString(id){
    return mongoose.Types.ObjectId(id).toString()
  }
}