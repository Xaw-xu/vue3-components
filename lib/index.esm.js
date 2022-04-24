import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

var script$1 = defineComponent({
  name: 'ZButton',
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, " button "))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = function (app) {
    // 注册组件
    app.component(script$1.name, script$1);
};
const _Button = script$1;

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

const components = [
    _Button,
    _Icon
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
