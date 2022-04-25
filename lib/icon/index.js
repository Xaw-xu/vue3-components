import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

var script = defineComponent({
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`z-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _Icon = script;

export { _Icon as default };
