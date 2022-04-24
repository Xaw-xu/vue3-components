import { App } from 'vue';
import Button from './src/button.vue';
declare type IWidthInstall<T> = T & {
    install(app: App): void;
};
declare const _Button: IWidthInstall<typeof Button>;
export default _Button;
