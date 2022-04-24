import { App } from 'vue';
import Icon from './src/icon.vue';
declare type IWidthInstall<T> = T & {
    install(app: App): void;
};
declare const _Icon: IWidthInstall<typeof Icon>;
export default _Icon;
