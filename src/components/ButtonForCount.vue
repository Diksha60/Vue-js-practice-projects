<template>
<h1>Count: {{ count }}</h1>
<button v-on:click="increase">Increase</button>
<button v-on:click="decrease">Decrease</button>
<button v-on:click="multiply">Multiply</button>
<button v-on:click="divide">Divide</button>
</template>

<script>
export default {
    name: "ButtonForCount",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count = this.count + 1
        },
        decrease() {
            this.count = this.count - 1
        },
        multiply() {
            this.count = this.count * 2
        },
        divide() {
            this.count = this.count / 2
        },
    }
}
</script>