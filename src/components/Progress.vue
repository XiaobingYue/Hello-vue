<template>
    <div style="margin: auto;text-align: center">
        <el-progress type="circle"
                     :color="color"
                     width="150"
                     stroke-width="15"
                     stroke-linecap="square"
                     :percentage="percentage" :status="isSuccess"></el-progress>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        data() {
            return {
                color: '#88898d',
                percentage: 80,
                isSuccess: false
            }
        }
    }
</script>

<style scoped>

</style>
