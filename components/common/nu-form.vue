<template>
  <slot name="form-header"></slot>
  <a-form
      :model="formState"
      :label-col="{ span: 0 }"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      :layout="layout"
      @finish="values => $emit('onFinish', values)"
      @finishFailed="errorInfor => $emit('onFinishFailed', errorInfor)"
  >
    <slot name="form-body"></slot>
  </a-form>
  <slot name="form-footer"></slot>
</template>

<script lang="ts">
  export default defineComponent({
    props:{
      formState: {
        type : Object,
        required : true
      },
      layout: {
        type : String,
        required : false,
        validator : (value: string) => ['vertical', 'horizontal'].includes(value),
        default: 'vertical'
      }
    },
    components:{
    },
    setup() {

      return {

      }
    }
  })
</script>

<style scoped lang="scss">

</style>