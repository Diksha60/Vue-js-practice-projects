<template>
<h1>Update Phase of Lifecycle Methods</h1>

<p ref="count">{{ count }}</p>
<button v-on:click="count = count + 1">Update Count</button>
</template>

<script>
export default {
    name: "UpdatePhase",
    data() {
        console.log("Hello")
        return {
            count: 0,
        }
    },
    beforeUpdate() {
        console.log("beforeUpdate", this.$refs['count'].textContent)
    },
    updated() {
        console.log("Updated", this.$refs['count'].textContent)

    }
}
</script>
<!-- this phase is called when ui is updated -->
<!-- where can this be used?
 -check login
 -check age authenticathion
 -to check if condition based on some values
  -->
