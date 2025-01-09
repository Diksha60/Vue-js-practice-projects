<template>
    <h1>Computed Property</h1>

    <h3> {{ ((num1 * num2) / 2 ) + num3 - num4}}</h3>

    <h3> {{ getResult }}</h3>
    <h3> {{ getResultFuc() }}</h3>
</template>

<script>
export default {
    name: "ComputedProperty",
    data() {
        return {
            num1: 1000,
            num2: 998,
            num3: 989,
            num4: 345,
        }
    },
    // compatively this is more fast than others
    computed: {
        getResult() {
            return ((this.num1 * this.num2) / 2 ) + this.num3 - this.num4
        }
    },
    methods: {
        getResultFuc() {
            return ((this.num1 * this.num2) / 2 ) + this.num3 - this.num4
        }
    }
}
</script>