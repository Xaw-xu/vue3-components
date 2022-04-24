import { App } from 'vue';
import Button from './src/button.vue';

Button.install = function (app:App) {
    // 注册组件
    app.component(Button.name, Button);
}

type IWidthInstall<T> = T & {install(app:App):void};

const _Button:IWidthInstall<typeof Button> = Button;

export default _Button;