const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  //配置出入口文件
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
  },
  //文件后缀名
  resolve: {
    extensions: [".ts", ".js", ".cjs", ".json"]
  },
  //和模块对应的加载规则
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  // 使用html模板
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}
