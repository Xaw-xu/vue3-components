import { App } from 'vue';
import Message from './src/message';

(Message as any).install = function (app: App) {
    // 注册组件
    app.config.globalProperties.$message = Message; // 这样组件内部可以this调用
}

export default Message;
