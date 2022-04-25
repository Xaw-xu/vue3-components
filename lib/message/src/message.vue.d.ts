import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"success" | "info" | "warning" | "error" | undefined>;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: StringConstructor;
        default: string;
    };
    onclose: {
        type: FunctionConstructor;
        default: () => void;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
}, {
    classs: import("vue").ComputedRef<string[]>;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"success" | "info" | "warning" | "error" | undefined>;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: StringConstructor;
        default: string;
    };
    onclose: {
        type: FunctionConstructor;
        default: () => void;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    message: string;
    type: "success" | "info" | "warning" | "error" | undefined;
    id: string;
    duration: number;
    center: string;
    onclose: Function;
    offset: number;
}>;
export default _default;
