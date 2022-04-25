import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
    name: 'ZCheckboxGroup',
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, " checkbox-group "))
}

script.render = render;
script.__file = "packages/checkbox/src/checkbox-group.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _CheckboxGroup = script;

export { _CheckboxGroup as default };
