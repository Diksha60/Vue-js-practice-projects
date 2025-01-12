<template>
<h1>VueX</h1>
<div>
    <ul>
        <li v-for="product in allProducts" :key="product.id">
            {{ product.title }} | {{ formatCurrency(product.price)  }}
            <button @click="deleteProduct(product.id)">Delete</button>
        </li>
    </ul>
    <!-- <p v-for="user in allUsers" :key="user.id">{{ user.name }} | {{ user.age }}</p>
    <p v-for="product in allProducts" :key="product.id">{{ product.title }} | {{ formatCurrency(product.price)  }}</p>
    <button v-for="product in allProducts" :key="product.id" @click="deleteProduct(products.id)">Delete</button> -->
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';

export default {
    name: "VueX",
    filters: {
        currency: function (val) {
            return "₹ " + parseFloat(val).toFixed(2)
        }
    },
    methods: {
        ...mapActions(["getUsers", "deleteProduct"]),
        formatCurrency(val) {
            return "₹ " + parseFloat(val).toFixed(2);
        }
    },
    computed: {
        ...mapGetters(["allUsers"]),
        ...mapGetters(["allProducts"])
    },
    created() {
        this.getUsers()
    }
}
</script>
