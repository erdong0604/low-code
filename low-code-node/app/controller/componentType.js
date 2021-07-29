const componentTypeModal = require("./../model/componentType");
const componentModal = require("./../model/component");



const list = async (ctx, next) => {
  const { hasComp } = ctx.request.query;
  
  try{
    const allType = await componentTypeModal.find();
    let allComponents = [];
    if(hasComp){
      allComponents = await componentModal.find();
    }
    const res = [];
    allType.forEach(t => {
      res.push({
        name:t.name,
        component:hasComp ? allComponents.filter(c => c.type == t.id) : []
      })
    })
    ctx.success(res);
  }catch(e){
    ctx.fail(e)
  }
};

module.exports = {
  list
};
