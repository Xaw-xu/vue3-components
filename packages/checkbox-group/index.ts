import { App } from 'vue';
import CheckboxGroup from '../checkbox/src/checkbox-group.vue';

CheckboxGroup.install = function (app:App) {
    // 注册组件
    app.component(CheckboxGroup.name, CheckboxGroup);
}

type IWidthInstall<T> = T & {install(app:App):void};

const _CheckboxGroup:IWidthInstall<typeof CheckboxGroup> = CheckboxGroup;

export default _CheckboxGroup;