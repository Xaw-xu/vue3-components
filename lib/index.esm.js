import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, inject, h, provide, getCurrentInstance, createTextVNode, toDisplayString, createElementVNode, withDirectives, vModelCheckbox, ref, onMounted, createBlock, Transition, withCtx, normalizeStyle, vShow, createVNode, render as render$6 } from 'vue';

var script$5 = defineComponent({
    name: 'ZButton',
    props: {
        type: {
            type: String,
            default: 'primary',
            vaildator: (val) => {
                return ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(val);
            }
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        loading: Boolean,
        round: Boolean,
    },
    emits: ['click'],
    setup(props, { emit }) {
        const classs = computed(() => [
            'z-button',
            'z-button--' + props.type,
            {
                'is-disabled': props.disabled,
                'is-loading': props.loading,
                'is-round': props.round,
            }
        ]);
        const handleClick = (e) => {
            emit('click', e);
        };
        return {
            classs,
            handleClick
        };
    },
});

const _hoisted_1$2 = {
  key: 0,
  class: "z-icon-zujianxiangdao"
};
const _hoisted_2$1 = { key: 2 };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    createCommentVNode(" 如果loading则显示loading "),
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1$2))
      : createCommentVNode("v-if", true),
    (_ctx.icon&&!_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" 有内容才有span "),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "packages/button/src/button.vue";

script$5.install = function (app) {
    // 注册组件
    app.component(script$5.name, script$5);
};
const _Button = script$5;

var script$4 = defineComponent({
    name: 'ZIcon',
    props: {
        name: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
    },
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`z-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "packages/icon/src/icon.vue";

script$4.install = function (app) {
    // 注册组件
    app.component(script$4.name, script$4);
};
const _Icon = script$4;

var script$3 = defineComponent({
    name: 'ZButtonGroup',
});

const _hoisted_1$1 = { class: "z-button-group" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$3.render = render$3;
script$3.__file = "packages/button/src/button-group.vue";

script$3.install = function (app) {
    // 注册组件
    app.component(script$3.name, script$3);
};
const _ButtonGroup = script$3;

var Col = defineComponent({
    name: "ZCol",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props, { slots }) {
        const gutter = inject('ZRow', 0);
        const classs = computed(() => {
            const ret = [];
            const pos = ['span', 'offset'];
            pos.forEach(item => {
                const size = props[item];
                if (typeof size === 'number' && size > 0) {
                    ret.push(`z-col-${item}-${size}`);
                }
            });
            return [
                'z-col',
                ...ret
            ];
        });
        const style = computed(() => {
            if (gutter !== 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                };
            }
            return {};
        });
        return () => {
            return h(props.tag, { class: classs.value, style: style.value }, slots?.default?.());
        };
    }
});

Col.install = function (app) {
    // 注册组件
    app.component(Col.name, Col);
};

var Row = defineComponent({
    name: "ZRow",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            default: 'start'
        }
    },
    setup(props, { slots }) {
        provide('ZRow', props.gutter);
        const classs = computed(() => [
            'z-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ''
        ]);
        const style = computed(() => {
            if (props.gutter !== 0) {
                return {
                    marginLeft: `-${props.gutter / 2}px`,
                    marginRight: `-${props.gutter / 2}px`
                };
            }
            return {};
        });
        return () => {
            return h(props.tag, { class: classs.value, style: style.value }, slots.default ? slots.default() : []);
        };
    }
});

Row.install = function (app) {
    // 注册组件
    app.component(Row.name, Row);
};

const useModel = (props) => {
    const { emit } = getCurrentInstance();
    const model = computed({
        get() {
            return props.modelValue;
        },
        set(val) {
            emit('update:modelValue', val);
        }
    });
    return model;
};
const useCheckboxStatus = (props, model) => {
    const isChecked = computed(() => {
        return model.value;
    });
    return isChecked;
};
const useEvent = () => {
    const { emit } = getCurrentInstance();
    const handleChange = (e) => {
        const target = e.target;
        emit('change', target.checked ? true : false);
    };
    return handleChange;
};
const useCheckbox = (props) => {
    let model = useModel(props);
    let isChecked = useCheckboxStatus(props, model);
    const handleChange = useEvent();
    return {
        model,
        isChecked,
        handleChange
    };
};

var script$2 = defineComponent({
    name: "ZCheckbox",
    props: {
        name: String,
        indeterminate: Boolean,
        checked: Boolean,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean],
    },
    emits: ["update:modelValue", "change"],
    setup(props) {
        return {
            ...useCheckbox(props),
        };
    }
});

const _hoisted_1 = { class: "z-checkbox" };
const _hoisted_2 = { class: "z-checkbox__input" };
const _hoisted_3 = ["checked", "name", "disabled", "indeterminate"];
const _hoisted_4 = { class: "z-checkbox-label" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createTextVNode(toDisplayString(_ctx.model+'========'+_ctx.modelValue) + " ", 1 /* TEXT */),
    createElementVNode("span", _hoisted_2, [
      withDirectives(createElementVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        checked: _ctx.isChecked,
        onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.handleChange && _ctx.handleChange(...args))),
        name: _ctx.name,
        disabled: _ctx.disabled,
        indeterminate: _ctx.indeterminate
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
        [vModelCheckbox, _ctx.model]
      ])
    ]),
    createElementVNode("span", _hoisted_4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script$2.render = render$2;
script$2.__file = "packages/checkbox/src/checkbox.vue";

script$2.install = function (app) {
    // 注册组件
    app.component(script$2.name, script$2);
};
const _Checkbox = script$2;

var script$1 = defineComponent({
    name: 'ZCheckboxGroup',
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, " checkbox-group "))
}

script$1.render = render$1;
script$1.__file = "packages/checkbox/src/checkbox-group.vue";

script$1.install = function (app) {
    // 注册组件
    app.component(script$1.name, script$1);
};
const _CheckboxGroup = script$1;

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
        render$6(null, container);
    };
    render$6(vm, container);
    document.body.appendChild(container.firstElementChild);
}

Message.install = function (app) {
    // 注册组件
    app.config.globalProperties.$message = Message; // 这样组件内部可以this调用
};

const components = [
    _Button,
    _Icon,
    _ButtonGroup,
    Col,
    Row,
    _Checkbox,
    _CheckboxGroup,
    Message
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
// 后面可以使用 createApp().use(xxx) 来注册组件
var index = {
    install
};

export { index as default };
