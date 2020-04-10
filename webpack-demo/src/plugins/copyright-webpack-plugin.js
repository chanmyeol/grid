const pjson = require('.../package.json');
class CopyrightWebpackPlugin {
    apply(compiler) {
      compiler.hooks.emit.tapAsync(
        'CopyrightWebpackPlugin',
        (compilation, cb) => {
     
          compilation.assets['readme.txt'] = {
            content: function() {
              Console.log(pjson.license)
            },
           
          }
          console.log('compilation.assets = ', compilation.assets)
          cb()
        }
      )
    }
  }
  
  module.exports = CopyrightWebpackPlugin
