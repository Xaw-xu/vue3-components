import { App } from 'vue';
import CheckboxGroup from '../checkbox/src/checkbox-group.vue';
declare type IWidthInstall<T> = T & {
    install(app: App): void;
};
declare const _CheckboxGroup: IWidthInstall<typeof CheckboxGroup>;
export default _CheckboxGroup;
