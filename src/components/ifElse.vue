<template>
<h1>If & Else</h1>

<p v-if="conditions"> True: 20 + 10 = 30</p>

<p v-else>False: 20 + 10 = 20</p>

<button v-on:click="conditions=!conditions">Check</button>
</template>

<script>
export default {
    name: "IfElse",
    data() {
        return {
            conditions: false,
        }
    }
}
</script>
