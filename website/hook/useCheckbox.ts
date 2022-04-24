import { ref } from "vue";


export function useCheckbox() {
    const checkVal = ref(false);
    return {
        checkVal,
    }
}

