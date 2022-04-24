import { App } from 'vue';
import Icon from './src/icon.vue';

Icon.install = function (app:App) {
    // 注册组件
    app.component(Icon.name, Icon);
}

type IWidthInstall<T> = T & {install(app:App):void};

const _Icon:IWidthInstall<typeof Icon> = Icon;

export default _Icon;