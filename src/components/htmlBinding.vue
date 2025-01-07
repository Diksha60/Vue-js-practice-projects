<template>
    <h1>Html Binding</h1>

    <h1>{{ name }}</h1>
    <div v-html="tag1"></div>
    <div v-html="tag2"></div>
</template>

<script>
export default {
    name: "htmlBinding",
    data() {
        return {
            name: "Regan Rai",
            tag1: "<h1>Regan  Rai</h1>",
            tag2: "<h1>Ritesh  Rai</h1>"
        }
    }
}
</script>
