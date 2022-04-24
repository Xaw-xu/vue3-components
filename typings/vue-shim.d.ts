
declare module '*.vue' {
    import {App, defineComponent} from 'vue';

    const component:ReturnType<typeof defineComponent> & {install(app:App):void}; // 获取组件类型,install 方法 组件注册会用到

    export default component
}