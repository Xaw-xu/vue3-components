import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

var script = defineComponent({
    name: 'ZButtonGroup',
});

const _hoisted_1 = { class: "z-button-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/button/src/button-group.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _ButtonGroup = script;

export { _ButtonGroup as default };
