import { App } from 'vue';
import Checkbox from './src/checkbox.vue';
declare type IWidthInstall<T> = T & {
    install(app: App): void;
};
declare const _Checkbox: IWidthInstall<typeof Checkbox>;
export default _Checkbox;
