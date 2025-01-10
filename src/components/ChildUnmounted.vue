<template>
    <h1 ref="child">Child Unmounted Phase</h1>

</template >

<script>
export default {
    name: "CreatePhase",
    beforeUnmount() {
        console.log("beforeUnmount", this.$refs['child'])
    },
    unmounted() {
        console.log("Unmount", this.$refs['child'])
    },
}
</script>

<!--  -->
