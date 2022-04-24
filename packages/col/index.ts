import { App } from 'vue';
import Col from './src/col';

Col.install = function (app: App) {
    // 注册组件
    app.component(Col.name, Col);
}

export default Col;
