import { computed, getCurrentInstance, WritableComputedRef } from "vue";
import { ICheckboxProps } from "./checkbox.type"

const useModel = (props: ICheckboxProps) => {
    const { emit } = getCurrentInstance()!
    const model = computed({
        get() {
            return props.modelValue
        },
        set(val) {
            emit('update:modelValue', val)
        }
    })
    return model
}

const useCheckboxStatus = (props: ICheckboxProps, model: WritableComputedRef<unknown>) => {
    const isChecked = computed(() => {
        return model.value
    })
    return isChecked
}

const useEvent = () => {
    const { emit } = getCurrentInstance()!
    const handleChange = (e: InputEvent) => {
        const target = e.target as HTMLInputElement
        emit('change',target.checked? true:false)
    }
    return handleChange
}

export const useCheckbox = (props: ICheckboxProps) => {
    let model = useModel(props);
    let isChecked = useCheckboxStatus(props, model);
    const handleChange = useEvent()
    return {
        model,
        isChecked,
        handleChange
    }
}

