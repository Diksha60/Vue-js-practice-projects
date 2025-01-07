<template>
    <h1>Input Fields</h1>
    <label for="email">Email: </label>
    <input 
        type="email" 
        name="" 
        id=""
        placeholder="Email"
        required
        v-model="email"

    >

    <input 
        type="password" 
        name="" 
        id=""
        placeholder="Password"
        required
        v-model="password"
    >

    <button type="button" v-on:click="getDatas()">Submit</button>
</template>

<script>
export default {
    name: "InputFields",
    data()
    {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        getDatas()
        {
            console.log("email: ", this.email, "password: ", this.password)
        }
    }
}
</script>