<template>
<h1>Input with Modifier</h1>
<input type="text" name="" id="" v-model.number.trim.lazy="data">

<h2>Data type:{{ typeof(data) }}</h2>

<h2>Data:{{ data }}</h2>
</template>

<script>
export default {
    name: 'InputwithModifiers',
    data() {
        return {
            data: '',
        }
    }
}
</script>
