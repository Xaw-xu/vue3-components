import { defineComponent, inject, computed, h } from 'vue';

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

export { Col as default };
