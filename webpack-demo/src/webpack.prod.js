const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {

    mode: 'production',

    devtool: 'cheap-module-source-map',

    output: {

        filename: 'js/[name].[contenthash].js'

    }, module: {

        rules: [
    
          {
    
            test: /\.css$/,
    
            use: [
    
              {
    
                loader: MiniCssExtractPlugin.loader,
    
                options: {
    
                  publicPath: '../',
    
                }, 
    
              },
    
              'css-loader',
          
            ],
    
          },
    
        ],
    
      },
    
      plugins: [
    
        new MiniCssExtractPlugin({
    
          filename: 'css/[name].[hash:8].css', 
    
        }),
    ],



}