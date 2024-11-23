<template>
  <a-card
      class="relative"
      hoverable
      :loading="!product"
      @click="$emit('onNavigateProductDetail', product._id)"
  >
    <template #cover>
      <img alt="example" :src="product.image" />
      <span class="absolute !w-fit top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
        - {{ product.discount }} %
      </span>
    </template>
    <a-card-meta >
      <template #title>
        <span class="block text-ellipsis line-clamp-2 overflow-hidden">
          {{ product.name }}
        </span>
      </template>
      <template #description>
        <div class="text-xl font-bold text-slate-900">{{ product.price }} vnd</div>
        <div class="text-sm text-slate-900 line-through">{{ product.price * product.discount / 100 }} vnd</div>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">

import type {Product} from "~/types/model";

export default defineNuxtComponent({
  props:{
    product: {
      type : Object,
      required : true
    },
  },
  components:{

  },
  setup(props, {emit}) {
    return {

    }
  }
})

</script>

<style scoped lang="scss">

</style>