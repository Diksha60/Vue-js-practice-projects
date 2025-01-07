<template>
<label for="">Name: </label>
<input type="text" name="" id="" v-model="name">
<br>
<br>

<label for="">Address: </label>
<input type="text" name="" id="" v-model="address">
<br>
<br>

<label for="">Email: </label>
<input type="text" name="" id="" v-model="email">
<br>
<br>

<h2>Gender</h2>
<br>
<br>

<label for="Male">Male: </label>
<input type="radio" value="Male" v-model="gender" name="gender" id="Male">
<br>
<br>

<label for="Female">Female: </label>
<input type="radio" value="Female" v-model="gender" name="gender" id="Female">
<br>
<br>

<label for="Others">Others: </label>
<input type="radio" value="Others" v-model="gender" name="gender" id="Others">
<br>
<br>

<h2>Lagnguges</h2>
<br>
<br>

<label for="React">React: </label>
<input type="checkbox" value="React" v-model="languages" name="React" id="React">
<br>
<br>

<label for="Java">Java: </label>
<input type="checkbox" value="Java" v-model="languages" name="Java" id="Java">
<br>
<br>

<label for="Word Press">Word Press: </label>
<input type="checkbox" value="Word Press" v-model="languages" name="Word Press" id="Word Press">
<br>
<br>

<label for="C++">C++: </label>
<input type="checkbox" value="C++" v-model="languages" name="C++" id="C++">
<br>
<br>

<h1>Your Details</h1>

<p>Name: {{ name }}</p>
<p>Address: {{ address }}</p>
<p>Email: {{ email }}</p>
<p>gender: {{ gender }}</p>
<p>languages: {{ languages }}</p>

<ul>
    <li>
        {{ showDetails() }}
    </li>
</ul>
</template>

<script>
export default {
    name: "practiveOnly",
    data() {
        return {
            name: '',
            address: '',
            email: '',
            gender: '',
            languages: [],

        }
    },
    methods: {
        showDetails() {
            return {
                name: this.name,
                address: this.address,
                email: this.email,
                gender: this.gender,
                languages: this.languages
            }
        }
    }

}
</script>
