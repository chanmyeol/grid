const path = require('path')

const merge = require('webpack-merge')

const devConfig = require('./webpack.dev.js')

const prodConfig = require('./webpack.prod.js')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
new CopyrightWebpackPlugin({
  name: 'xh'
})
const commonConfig = {

  devServer: {

    contentBase: './dist',

    port: 3000,

    hot: true,

    open: false,

  },

  entry: './src/index.js',
  plugins: [new CopyrightWebpackPlugin()],

  output: {

    path: path.resolve(__dirname, 'dist'),

  },
  module: {

    rules: [

      {

        test: /\.(jpe?g|png|gif|svg|)$/,

        use: [

          {

            loader: 'webpack-replace-loader',

            options: {

              limit: 8192,

              outputPath: 'images/',

              arr: [
                { search: 'redrock', replace: 'Redrock' },

              ]

            },

          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }

        ],

      },

    ],

  },

}


module.exports = env => {

  if (env && env.production) {

    return merge(commonConfig, prodConfig)

  } else {

    return merge(commonConfig, devConfig)

  }

}