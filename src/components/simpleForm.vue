<template>
<h1>Simple Form</h1>

<p>{{ form }}</p>

<form action="">
    <label for="">Name: </label>
    <input type="text" name="" id required v-model="form.name">
    <br>
    <br>
    <label for="">Email: </label>
    <input type="text" name="" id="" required v-model="form.email">
    <br>
    <br>
    <label for="">Password: </label>
    <input type="password" name="" id="" required v-model="form.password">
    <br>
    <br>
    <button v-on:click="getData">Submit</button>
</form>
</template>

<script>
export default {
    name: "SimpleForm",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        getData() {
            alert(this.form.name)
        }
    }

}
</script>
