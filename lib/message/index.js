import { defineComponent, computed, ref, onMounted, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, vShow, createVNode, render as render$1 } from 'vue';

var script = defineComponent({
    name: "message",
    props: {
        id: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
        duration: {
            type: Number,
            default: 2000,
        },
        center: {
            type: String,
            default: "",
        },
        onclose: {
            type: Function,
            default: () => { },
        },
        offset: {
            type: Number,
            default: 20,
        },
    },
    setup(props) {
        console.log("🚀 ~ file: message.vue ~ line 42 ~ setup ~ props", props);
        const classs = computed(() => [
            "z-message",
            `z-message-${props.type}`,
            props.center ? "is-center" : "",
        ]);
        const visible = ref(false);
        const starttimer = () => {
            setTimeout(() => {
                visible.value = false;
            }, props.duration);
        };
        onMounted(() => {
            starttimer();
            visible.value = true;
        });
        return {
            classs,
            visible
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, {
    name: "z-message-fade",
    onAfterLeave: _cache[0] || (_cache[0] = $event => (_ctx.$emit('destrory')))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(_ctx.classs),
        style: normalizeStyle({top:_ctx.offset+'px'})
      }, toDisplayString(_ctx.message), 7 /* TEXT, CLASS, STYLE */), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "packages/message/src/message.vue";

const instance = [];
function Message(options) {
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    let offset = options.offset || 20;
    instance.forEach(vm => {
        offset += vm.el.offsetHeight + 20;
    });
    options.offset = offset;
    let userclose = options.onClose;
    options.onClose = () => {
        userclose?.();
        console.log('close');
    };
    const container = document.createElement('div');
    const vm = createVNode(script, options);
    instance.push(vm);
    vm.props.onDestory = () => {
        render$1(null, container);
    };
    render$1(vm, container);
    document.body.appendChild(container.firstElementChild);
}

Message.install = function (app) {
    // 注册组件
    app.config.globalProperties.$message = Message; // 这样组件内部可以this调用
};

export { Message as default };
