<template>
<h1>Form</h1>

<label for="Name">Name: </label>
<input type="text" name="Name" id="Name" v-model="name">
<span v-if="hasErr">Name must be at least 3 characters long</span>
<br><br>
<label for="email">Email: </label>
<input type="text" name="email" id="email" v-model="email">
<span v-if="error.email">{{ error.email }} is invalid.</span>
<br><br>

<label for="password">Password: </label>
<input type="text" name="password" id="password" v-model="password">
<span v-if="error.password">{{ error.password }}</span>

<br><br>
<button v-on:click="addData">Add Data</button>
</template>

<script>
import axios from 'axios';

export default {
    name: "FormwithAPI",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            hasErr: false,
            error: {},
        }
    },
    methods: {
        async addData() {
            this.hasErr = this.name.length < 3;
            this.error = {}
            if (!this.email.includes('@gmail.com')) {
                this.error.email = 'Invalid email format';
            }
            if (!this.password) {
                this.error.password = 'Password is required.';
            } else if (this.password.length < 8) {
                this.error.password = 'Password must be at least 8 characters.';
            } else if (!/[A-Z]/.test(this.password)) {
                this.error.password = 'Password must contain at least one uppercase letter.';
            }

            if (!Object.keys(this.error).length) {
                alert('Form submitted successfully!');
            }

            console.log("Email: ", this.email, "Password: ", this.password)
            let result = await axios.post("https://reqres.in/api/users?page=1", {
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log("result", result)
        }
    },
}
</script>
