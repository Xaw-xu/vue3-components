import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
  name: 'ZButton',
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, " button "))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _Button = script;

export { _Button as default };
