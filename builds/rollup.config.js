import typescript from "rollup-plugin-typescript2";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import path from "path";
import {getPackagesSync} from "@lerna/project"
import vue from "rollup-plugin-vue";

const inputs  = getPackagesSync().map(pck=>pck.name).filter(name=>name.includes('@z-ui'))

export default inputs.map(name=>{
    const pckname = name.split('@z-ui')[1] //button icon
    return {
        input:path.resolve(__dirname,`../packages/${pckname}/index.ts`),
        output:{
            format:'es',
            file:`lib/${pckname}/index.js`
        },
        plugins:[
            nodeResolve(),
            vue({
                target:'browser'
            }),
            typescript({
                tsconfigOverride:{
                    compilerOptions:{ // 打包单个组件不生成ts文件
                        declaration:false
                    },
                    exclude:[
                        'node_modules',
                        'website'
                    ]
                }
            })
        ],
        external(id){// 排除vue本身 和 自己写的包都排除掉不打包 
            return /^vue/.test(id) || /^@z-ui/.test(id)
        }
    }
})