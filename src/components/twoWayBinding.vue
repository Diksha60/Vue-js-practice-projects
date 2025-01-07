<template>
    <h1>Two Way Binding</h1>

    <input 
        type="text" 
        name="" 
        id=""
        v-model="count"
    >
    <p>{{ count }}</p>
</template>

<script>
export default {
    name: "TwoWayBinding",
    data() {
        return {
            count: 10,
        }
    }

}
</script>