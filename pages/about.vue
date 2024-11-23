<template>
    <div>
        {{ titleHome }}
    </div>
    <p>index</p>
</template>

<script lang="ts">
    export default defineComponent({
        props:{},
        components:{
        },
        setup() {
            const titleHome = ref("About");

            return {
                titleHome
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>