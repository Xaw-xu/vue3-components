import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
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

const _hoisted_1 = {
  key: 0,
  class: "z-icon-zujianxiangdao"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    createCommentVNode(" 如果loading则显示loading "),
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon&&!_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createCommentVNode(" 有内容才有span "),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _Button = script;

export { _Button as default };
