import { App } from 'vue';
import ButtonGroup from '../button/src/button-group.vue';

ButtonGroup.install = function (app:App) {
    // 注册组件
    app.component(ButtonGroup.name, ButtonGroup);
}

type IWidthInstall<T> = T & {install(app:App):void};

const _ButtonGroup:IWidthInstall<typeof ButtonGroup> = ButtonGroup;

export default _ButtonGroup;