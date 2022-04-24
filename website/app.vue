<template>
  <div>
      <ZButton icon="z-icon-huangguan" type="primary">
        按钮
      </ZButton>
      <ZButton icon="z-icon-huangguan" type="sucess" round>
        按钮
      </ZButton>
      <ZButton icon="z-icon-huangguan" type="danger" loading>
        按钮
      </ZButton>
      <ZButton icon="z-icon-huangguan" type="warning" disabled>
      </ZButton>
      <hr/>
      <ZButtonGroup>
        <ZButton icon="z-icon-huangguan" type="primary">
        按钮
      </ZButton>
      <ZButton icon="z-icon-huangguan" type="primary">
        按钮
      </ZButton>
      </ZButtonGroup>
      <hr/>
      <ZRow :gutter="20">
        <ZCol :span="6">
          ppp
        </ZCol>
        <ZCol :span="6" :offset="6">
          ppp
        </ZCol>
        <ZCol :span="6">
          ppp
        </ZCol>
      </ZRow>
      <hr/>
      <ZCheckbox v-model="checkVal" @change="checkboxChange">52454</ZCheckbox>
      <ZCheckboxGroup></ZCheckboxGroup>
      <!-- <z-icon name="huangguan"></z-icon> -->
  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import {useCheckbox} from './hook/useCheckbox'
import Message from '@z-ui/message'

function checkboxChange(val){
  Message({
    type:'info',
    message:'message===',
    center:true,
  })
  console.log(val)
}

export default defineComponent({
  name: 'app',
  setup() {
    const handleClick = ()=>{
      console.log('parent');
    }
    const loading = ref(true)
    setTimeout(() => {
      loading.value = false
    }, 3000);
    return {
      loading,
      handleClick,
      ...useCheckbox(),
      checkboxChange
    }
  },
})
</script>
<style>
 
</style>
