const path = require('path')
// __dirname: 内置代表当前文件的文件夹的绝对路径

/* 
根据目录/文件夹名得到其对应的绝对路径
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: { // 编写webpack配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
      alias: { // 模块路径别名
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  }
}