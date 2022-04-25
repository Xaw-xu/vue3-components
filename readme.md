组件库的打包格式
1.整个打包umd格式
2.esModule
3.组件按需加载，需要把每个文件单独打包


如果需要发布的npm需要不能与npm上有相同的包名，把package.json中的private换成
"publishConfig": {
    "access": "public"
},