<template>
  <Header v-if="isShowHeader"/>
  <slot/>
</template>

<script setup lang="ts">
import Header from "~/components/header.vue";

const route = useRoute();
const isShowHeader = ref(true);

// Danh sách các trang không hiển thị Header
const excludeHeaderPages = ['signin', 'signup'];

// Theo dõi thay đổi route để ẩn/hiện Header
watch(
    () => route.name,
    (newRouteName) => {
      isShowHeader.value = !excludeHeaderPages.includes(newRouteName as string || '');
    },
    { immediate: true } // Chạy ngay lần đầu tiên
);

</script>

<style scoped lang="scss">

</style>