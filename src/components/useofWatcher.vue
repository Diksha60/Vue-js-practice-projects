<template>
    <h1>Use of Watchers</h1>

    <h3>{{ count }}</h3>

    <button v-on:click="count = count + 1">Increase</button>
    <button v-on:click="count = count - 1">Decrease</button>
</template>

<script>
export default {
    name: "UseofWatcher",
    data() {
        return {
            count: 0,
        }
    },
    watch: {
        count(val, prev) {
            if (val > 5 && prev < val) {
                this.count = 0
            }
        }
    }
}
</script>