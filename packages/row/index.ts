import { App } from 'vue';
import Row from '../col/src/row';

Row.install = function (app: App) {
    // 注册组件
    app.component(Row.name, Row);
}

export default Row;
