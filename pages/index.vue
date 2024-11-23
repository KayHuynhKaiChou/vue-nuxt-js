<template>
  <banner/>
  <div
      style="width: 1380px"
      class="grid mx-auto gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  >
    <product-card
      v-for="p in listProduct"
      :product="p"
      @on-navigate-product-detail="handleNavigateToProductDetail"
    />
  </div>
  <div class="flex justify-center mt-10 mb-5">
    <a-button
        class="w-1/12"
        type="primary"
        size="large"
        @click="handleLoadMore"
    >
      {{ status === 'pending' ? 'Load more' : "Xem thêm" }}
    </a-button>
  </div>
</template>

<script setup lang="ts">
import {useProduct} from "~/composables/use-product";

definePageMeta({
  middleware: 'auth'
})

const {
  limit,
  handleLoadMore,
  handleGetListProduct
} = useProduct()

const { data: listProduct, status } = await useAsyncData(
    "list-product",
    handleGetListProduct,
    {
      watch: [limit]
    }
)

const handleNavigateToProductDetail = (id: string) => {
  navigateTo('/product-detail/'+id)
}

</script>

<style lang="scss" scoped>

</style>