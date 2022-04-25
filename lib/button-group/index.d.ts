import { App } from 'vue';
import ButtonGroup from '../button/src/button-group.vue';
declare type IWidthInstall<T> = T & {
    install(app: App): void;
};
declare const _ButtonGroup: IWidthInstall<typeof ButtonGroup>;
export default _ButtonGroup;
