<template>
    <h1>Ref in Vue</h1>

    <input type="text" name="" id="" ref="input">
    <button v-on:click="getData">Click Here</button>
</template>

<script>
export default {
    name: "RefinVue",
    methods: {
        getData() {
            this.$refs.input.focus()
            let val = this.$refs.input.value
            console.log(val)
            this.$refs.input.style.color = "red"
        }
    }
}
</script>