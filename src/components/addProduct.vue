<template>
<form @submit.prevent="onSubmit">
    <input type="text" placeholder="Add Product" v-model="title">
    <input type="text" placeholder="Add Price" v-model="price">
    <button type="submit">Submit</button>
</form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddProduct",
    data() {
        return {
            title: '',
            price: '',
        }
    },
    methods: {
        ...mapActions(["addProduct"]),
        onSubmit() {
            this.addProduct({
                title: this.title,
                price: this.price
            })
        }
    }
}
</script>
