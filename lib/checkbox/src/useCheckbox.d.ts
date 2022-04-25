import { WritableComputedRef } from "vue";
import { ICheckboxProps } from "./checkbox.type";
export declare const useCheckbox: (props: ICheckboxProps) => {
    model: WritableComputedRef<unknown>;
    isChecked: import("vue").ComputedRef<unknown>;
    handleChange: (e: InputEvent) => void;
};
