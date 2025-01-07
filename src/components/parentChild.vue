<template>
    <h1>{{ name }}</h1>
    <h2>Id: {{ user.id }}
        Name: {{ user.names }}
    </h2>
    <button v-on:click="getData()">Click</button>
</template>

<script>
export default {
    name: "parentChild",
    props: {
        name: String,
        user: Object,
        getData: Function,

    },
}
</script>