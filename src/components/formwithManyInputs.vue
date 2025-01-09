<!-- <template>
<h1>Form </h1>

<p>{{ form }}</p>

<form>

    <ul>
        <li v-for="err in error" v-bind:key="err">
            {{ err }} not valid.
        </li>
    </ul>
    <label>Name: </label>
    <input type="text" name="name" id="name" required v-model="form.name">
    <br>
    <br>
    <label>Email: </label>
    <input type="text" name="email" id="email" required v-model="form.email">
    <br>
    <br>
    <label>Password: </label>
    <input type="password" name="password" id="password" required v-model="form.password">
    <br>
    <br>

    <label>Country</label>
    <select v-model="form.country">
        <option>Nepal</option>
        <option>India</option>
        <option>China</option>
    </select>

    <h2>Languages</h2>

    <label for="java">Java </label>
    <input type="checkbox" value="Java" id="java" v-model="form.language">
    <br>
    <br>

    <label for="php">Php</label>
    <input type="checkbox" value="Php" id="php" v-model="form.language">
    <br>
    <br>

    <label for="react">React</label>
    <input type="checkbox" value="React" id="react" v-model="form.language">
    <br>
    <br>

    <h2>Gender</h2>

    <label for="male">Male </label>
    <input type="radio" name="gender" value="male" id="male" v-model="form.gender">
    <br>
    <br>

    <label for="female">Female</label>
    <input type="radio" name="gender" value="female" id="female" v-model="form.gender">
    <br>
    <br>

    <label for="Other">Other</label>
    <input type="radio" name="gender" value="Other" id="Other" v-model="form.gender">
    <br>
    <br>

    <button type="button" v-on:click="getData">Login</button>
</form>
</template>

<script>
export default {
    name: "FormWithManyInputs",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                country: '',
                language: [],
                gender: '',
            },
            error: [],
        }
    },
    methods: {
        getData() {
            this.error = []
            for (const data in this.form) {
                if (this.form[data] === "" || this.form[data].length === 0) {
                    this.error.push(data)
                }
            }

            if (this.error.length === 0){
                alert("Data has been submitted succesfully.")
            }
            console.log(this.form, this.error)
        }
    }
}
</script> -->

<template>
    <h1>Form</h1>

    <p>{{ form }}</p>

    <ul>
        <li v-for="err in error" v-bind:key="err">
            {{ err }} is invalid.
        </li>
    </ul>

    <form>
        <label>Name:</label>
        <input type="text" v-model="form.name">
        <br><br>

        <label>Address:</label>
        <input type="text" v-model="form.address">
        <br><br>

        <label>Email:</label>
        <input type="text" v-model="form.email">
        <br><br>

        <h2>Country</h2>
        <br>

        <select v-model="form.country">
            <option>Nepal</option>
            <option>India</option>
            <option>China</option>
        </select>
        <br><br>

        <h2>Gender</h2>
        <br>

        <label for="male">Male</label>
        <input type="radio" name="gender" value="Male" id="male" v-model="form.gender">
        <br><br>

        <label for="female">Female</label>
        <input type="radio" name="gender" value="Female" id="female" v-model="form.gender">
        <br><br>

        <label for="Other">Other</label>
        <input type="radio" name="gender" value="Other" id="Other" v-model="form.gender">
        <br><br>

        <h2>Language</h2>
        <br>

        <label for="React">React</label>
        <input type="checkbox" value="React" name="React" id="React" v-model="form.language">
        <br><br>

        <label for="Vue js">Vue js</label>
        <input type="checkbox" value="Vue js" name="Vue js" id="Vue js" v-model="form.language">
        <br><br>

        <label for="Java">Java</label>
        <input type="checkbox" value="Java" name="Java" id="Java" v-model="form.language">
        <br><br>

        <button type="button" v-on:click="getData">Submit</button>

    </form>
</template>

<script>
export default {
    name: "FormWithManyInputs",
    data() {
        return {
            form: {
                name: '',
                address: '',
                email: '',
                country: '',
                gender: '',
                language: [],
            },
            error: [],
        }
    },
    methods: {
        getData() {
            
            for(const data in this.form) {
                if ( this.form[data] === '' || this.form[data].length === 0 ) {
                    this.error.push(data)
                }
            }

            if (this.error.length === 0) {
                alert("Your details have been submitted sucessfully.")
            }
            console.log(this.error)
        }

    }
}
</script>
