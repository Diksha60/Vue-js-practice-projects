<template>
    <h1>Create Phase of Lifecycle Methods</h1>

    <p>{{ count }}</p>
</template>

<script>
export default {
    name: "CreatePhase",
    data() {
        console.log("Hello")
        return {
            count: 0,
        }
    },
    beforeCreate() {
        alert("Before Create")
    },
    created() {
        this.count = 100
    },

}
</script>