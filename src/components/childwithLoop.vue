<!-- <template>
<div>
    <h1>{{ details.id }}</h1>
    <h1>{{ details.name }}</h1>
    <button v-on:click="showName(details.name)">Show Name</button>
</div>
</template>

<script>
    export default {
        name: "childwithLoop",
        props: {
            details: Object,
            showName: Function,
        },

    }
</script> -->

<template>
    <div>
        <h1>{{ details.id }}</h1>
        <h1>{{ details.name }}</h1>
        <button v-on:click="showName(details.name)">Show Name</button>
    </div>
</template>

<script>
export default {
    name: "childwithLoop",
    props: {
        details: Object,
        showName: Function,
    },
}
</script>
