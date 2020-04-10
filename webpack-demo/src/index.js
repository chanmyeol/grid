
  module.exports = function(context){
    console.log(context);
    return context.replace(/console\.log\(.*?\)/g,"");
}