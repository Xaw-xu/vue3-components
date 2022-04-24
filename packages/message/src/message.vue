<template>
  <transition name="z-message-fade" @after-leave="$emit('destrory')">
    <div :class="classs" v-show="visible" :style="{top:offset+'px'}">
      {{ message }}
    </div>
  </transition>
</template>
<script lang="ts">
import { IMessageOptions } from "@z-ui/message/src/message.type";
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
export default defineComponent({
  name: "message",
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String as PropType<IMessageOptions["type"]>,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 2000,
    },
    center: {
      type: String,
      default: "",
    },
    onclose: {
      type: Function,
      default: () => {},
    },
    offset: {
      type: Number,
      default: 20,
    },
  },
  setup(props) {
    console.log("🚀 ~ file: message.vue ~ line 42 ~ setup ~ props", props);
    const classs = computed(() => [
      "z-message",
      `z-message-${props.type}`,
      props.center ? "is-center" : "",
    ]);
    const visible = ref(false)
    let timer = null
    const starttimer = ()=>{
        setTimeout(() => {
            visible.value = false
        }, props.duration);
    }
    
    onMounted(()=>{
        starttimer()
        visible.value = true
    })
    return {
      classs,
      visible
    };
  },
});
</script>
<style></style>
