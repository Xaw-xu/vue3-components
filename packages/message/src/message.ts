import { createVNode, render, VNode } from "vue";
import { IMessageParams } from "./message.type";
import MessageComponent from './message.vue'

const instance:VNode[] = [];

export default function Message(options:IMessageParams) {
    if(typeof options === 'string') {
        options = {
            message:options
        }
    }

    let offset = options.offset || 20
    instance.forEach(vm=>{
        offset += vm.el!.offsetHeight + 20
    })
    options.offset = offset

    let userclose = options.onClose
    options.onClose = () => {
        userclose?.()
        console.log('close');
        
    }
    const container = document.createElement('div');
    const vm = createVNode(MessageComponent,options as any)
    instance.push(vm)
    vm.props!.onDestory = () => {
        render(null,container)
    }
    render(vm,container)
    document.body.appendChild(container.firstElementChild!);
}