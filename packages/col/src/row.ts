import { computed, defineComponent, h, provide } from "vue";

export default defineComponent({
    name: "ZRow",
    props: {
        tag:{
            type:String,
            default:'div'
        },
        gutter:{
            type:Number,
            default:0
        },
        justify:{
            type:String,
            default:'start'
        }
    },
    setup(props, { slots }) {
        provide('ZRow',props.gutter);

        const classs = computed(()=>[
            'z-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ''
        ])
        const style = computed(()=>{
            if(props.gutter!==0) {
                return {
                    marginLeft:`-${props.gutter/2}px`,
                    marginRight:`-${props.gutter/2}px`
                }
            }
            return {}
        })
        return () => {
            return h(props.tag, {class:classs.value,style:style.value},slots.default?slots.default():[]);
        };
    }
});