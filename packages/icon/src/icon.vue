<template>
  <i :class="`z-icon-${name}`"></i>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
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
})
</script>
<style>
 
</style>