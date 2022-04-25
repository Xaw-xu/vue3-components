import { getCurrentInstance, computed, defineComponent, openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode, withDirectives, vModelCheckbox, renderSlot } from 'vue';

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

var script = defineComponent({
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "packages/checkbox/src/checkbox.vue";

script.install = function (app) {
    // 注册组件
    app.component(script.name, script);
};
const _Checkbox = script;

export { _Checkbox as default };
