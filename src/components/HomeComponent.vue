<script>
export default {
    name: "HomeComponent",
    data() {
        return {
            name: "Regan Rai",
            Address: "Dhearan-20, Sunsari",
            Email: "regan@gmail.com",
            PhoneNo: 98000000001,
        }
    },
    methods: {
        getName(name) {
            return name
        },
        getData() {
            return {
                name: this.name,
                address: this.Address,
                email: this.Email,
                phoneNo: this.PhoneNo
            }
        }
    }
}
</script>

<template>
<h1>Name: {{ name }}</h1>
<h1>Address: {{ Address }}</h1>
<h1>Email: {{ Email }}</h1>
<h1>PhoneNo: {{ PhoneNo }}</h1>
<h1>Name: {{ getName("Asmita") }}</h1>

<h1>All Data of Regan: {{ getData() }}</h1>
</template>
