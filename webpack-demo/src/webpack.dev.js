const webpack = require('webpack');

module.exports = {

    mode: 'development',
  
    devtool: 'cheap-module-eval-source-map',
  
    plugins: [

        new webpack.HotModuleReplacementPlugin()
    
    ],

    output: {
  
      filename: 'js/[name].js',
  
    },
  
    module: {
  
      rules: [
  
        {
  
          test: /\.css$/,
  
          use: ['style-loader', 'css-loader', ],
  
        },
  
      ],
  
    },
  
  }
  
  
  
  