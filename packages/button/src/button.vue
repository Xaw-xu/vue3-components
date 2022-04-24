<template>
   <button :class="classs" @click="handleClick">
     <!-- 如果loading则显示loading -->
     <i v-if="loading" class="z-icon-zujianxiangdao"></i> 
     <i v-if="icon&&!loading" :class="icon"></i>
     <!-- 有内容才有span -->
     <span v-if="$slots.default">
       <slot></slot>
     </span>
   </button>
</template>
<script lang="ts">
import { computed, defineComponent,Events,PropType } from 'vue';
type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export default defineComponent({
  name: 'ZButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default:'primary',
      vaildator:(val:string)=>{
        return ['primary','success','warning','danger','info','default'].includes(val)
      }
    },
    icon:{
      type:String,
      default:''
    },
    disabled:Boolean,
    loading:Boolean,
    round:Boolean,
  },
  emits:['click'],
  setup(props, { emit }) {
    const classs = computed(()=> [
      'z-button',
      'z-button--'+props.type,
      {
        'is-disabled':props.disabled,
        'is-loading':props.loading,
        'is-round':props.round,
      }
    ])

    const handleClick = (e:Events)=>{
      emit('click',e)
    }
    
    return {
      classs,
      handleClick
    }
  },
})
</script>
<style>
 
</style>
