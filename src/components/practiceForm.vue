<template>
<h1>Practice Form</h1>

<p>{{ form }}</p>

<p v-for="error in errors" v-bind:key="error">
    {{ error }} is invalid
</p>

<form action="">
    <label for="Name">Name:</label>
    <input type="text" name="Name" id="name" v-model="form.name">
    <br>
    <br>

    <label for="Address">Address:</label>
    <input type="text" Address="Address" id="Address" v-model="form.address">
    <br>
    <br>

    <label for="Email">Email:</label>
    <input type="text" name="Email" id="Email" v-model="form.email">
    <br>
    <br>

    <label for="PhoneNo">PhoneNo:</label>
    <input type="number" name="Email" id="Email" v-model.number="form.phoneNo">
    <br>
    <br>

    <h2>Country</h2>
    <br>

    <select v-model="form.country">
        <option>Napal</option>
        <option>India</option>
        <option>China</option>
    </select>

    <h2>Gender</h2>
    <br>

    <label for="Male">Male</label>
    <input type="radio" value="Male" name="gender" id="Male" v-model="form.gender">
    <br>
    <br>

    <label for="Female">Female</label>
    <input type="radio" value="Female" name="gender" id="Female" v-model="form.gender">
    <br>
    <br>

    <label for="Other">Other</label>
    <input type="radio" value="Other" name="gender" id="Other" v-model="form.gender">
    <br>
    <br>

    <h2>Language</h2>
    <br>

    <label for="Java">Java</label>
    <input type="checkbox" value="Java" name="Java" id="Java" v-model="form.language">
    <br>
    <br>

    <label for="Python">Python</label>
    <input type="checkbox" value="Python" name="Python" id="Python" v-model="form.language">
    <br>
    <br>

    <label for="React">React</label>
    <input type="checkbox" value="React" name="React" id="React" v-model="form.language">
    <br>
    <br>
    <button type="button" v-on:click="getData">Submit</button>
</form>
</template>

<script>
export default {
    name: "PracticeForm",
    data() {
        return {
            form: {
                name: '',
                address: '',
                email: '',
                phoneNo: '',
                country: '',
                gender: '',
                language: [],
            },
            errors: [],
        }
    },
    methods: {
        getData() {
            this.errors = []
            for (const data in this.form) {
                if (this.form[data] === "" || this.form[data].length === 0) {
                    this.errors.push(data)
                }
            }
            if (this.errors.length === 0) {
                alert("Your data has been submitted successfully.")
            }
            console.log("Data: ", this.errors)
        }
    }
}
</script>
