declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    label: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    modelValue: (StringConstructor | BooleanConstructor | NumberConstructor)[];
}, {
    model: import("vue").WritableComputedRef<unknown>;
    isChecked: import("vue").ComputedRef<unknown>;
    handleChange: (e: InputEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    label: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    modelValue: (StringConstructor | BooleanConstructor | NumberConstructor)[];
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    indeterminate: boolean;
    checked: boolean;
    disabled: boolean;
}>;
export default _default;
