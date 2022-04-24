<template>
  <div class="z-checkbox">
    {{model+'========'+modelValue}}
    <span class="z-checkbox__input">
      <input type="checkbox" v-model="model" :checked="isChecked" @change="handleChange" :name="name" :disabled="disabled" :indeterminate="indeterminate">
    </span>
    <span class="z-checkbox-label">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCheckbox } from "./useCheckbox";
export default defineComponent({
  name: "ZCheckbox",
  props: {
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ["update:modelValue","change"],
  setup(props) {
    return {
      ...useCheckbox(props),
    }
  }
});
</script>
<style></style>
