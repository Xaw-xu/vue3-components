import { App } from 'vue';
import Checkbox from './src/checkbox.vue';

Checkbox.install = function (app:App) {
    // 注册组件
    app.component(Checkbox.name, Checkbox);
}

type IWidthInstall<T> = T & {install(app:App):void};

const _Checkbox:IWidthInstall<typeof Checkbox> = Checkbox;

export default _Checkbox;